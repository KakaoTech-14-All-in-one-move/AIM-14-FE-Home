import redisConcurrencyImage from '../assets/tech/redis.png';
import FastAPIImage from '../assets/tech/fastapi-cors.png';
import cloudFirstImage from '../assets/tech/cloud-first.png';
import websocketAuthImage from '../assets/tech/websocket.jpg';
import agileBacklogImage from '../assets/tech/agile-backlog.png';
import mediapipeVlmLocalizationImage from '../assets/tech/mediapipe.jpg';

export interface TechPost {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  content: string;
  tags: string[];
}

export const techPosts: TechPost[] = [
  {
    id: 'mediapipe-vlm-localization-improvement',
    title: 'Computer Vision(Mediapipe) & 프롬프트 엔지니어링을 활용한 VLM Localization 성능 향상',
    description: 'Mediapipe를 이용한 컴퓨터 비전, VLM 로컬라이제이션, COT 기법을 통한 온라인 발표에서 AI기반 피드백 제공 기술을 개발한 내용을 공유합니다.',
    category: 'AI/ML',
    date: '2024-11-18',
    author: 'Toby.Kim (김대현)',
    readTime: '20분',
    imageUrl: mediapipeVlmLocalizationImage,
    content: `
---

## Mediapipe와 고급 프롬프트 엔지니어링을 활용한 VLM 로컬라이제이션 성능 향상

안녕하세요, Pitching에서 AI 발표 피드백 기능 & Data Pipeline 구축을 담당하는 Toby라고 해요.

이 블로그 포스트에서는 **Mediapipe**라는 강력한 컴퓨터 비전(CV) 라이브러리를 통합하여 시각 언어 모델(VLM) 로컬라이제이션의 성능을 향상시키는 방법을 다룹니다. 또한, **체인 오브 쏘트(Chain of Thought, CoT)** 기법을 포함한 고급 **프롬프트 엔지니어링** 기술을 활용하여 세분화된 점수 기반 메트릭을 통해 상세하고 구조화된 피드백을 제공하는 방법을 탐구합니다.

## Mediapipe란?

![Mediapipe 기능](https://ai.google.dev/static/mediapipe/images/solutions/overview-diagram.svg?hl=ko)

Mediapipe는 구글에서 제공하는 오픈소스 프레임워크로, 실시간 인식 작업을 위한 커스터마이징 가능한 머신러닝(ML) 솔루션 모음을 제공합니다. 다양한 개발 플랫폼을 지원하며, 얼굴 인식, 얼굴 특징 감지, 자세 랜드마크 인식 등 다양한 비전 작업을 수행할 수 있는 도구와 라이브러리를 제공합니다.

### 왜 Mediapipe인가?

VLM 로컬라이제이션의 성능이 충분하지 않아 Mediapipe를 도입하게 되었습니다. VLM에만 의존할 경우 탐지 정확도가 낮았기 때문에, GPU를 사용하지 않는 CV 라이브러리인 Mediapipe를 적용하여 초기 필터링을 강화하였습니다. 이를 통해 시스템의 전체적인 신뢰성을 향상시킬 수 있었습니다.


Mediapipe는 얼굴 인식, 얼굴 특징 감지, 자세 랜드마크 인식 등 다양한 비전 작업을 수행할 수 있습니다. 이번 기능 업데이트에서는 크게 세 가지 기술을 적용했습니다:
**동작 인식** (movement), **얼굴 인식** (gaze_processing), **자세 인식** (posture_body).

Mediapipe를 통해 **동작 인식**, **얼굴 인식**, **자세 인식** 등 다양한 비언어적 행동을 효과적으로 탐지할 수 있습니다. 손 랜드마크 감지는 정책상의 이유로 생략하고, 대신 팔을 높게 드는 경우를 Bounding Box로 탐지하도록 개발했지만, 개발팀 논의후, 바운딩 박스는 표현하지 말되, 나중에 추후 옵션 기능을 활용하자고 결론내렸습니다.

---

## 구현 과정

### 주요 코드 수정

기본 구조는 유지하면서, VLM에게 피드백 이미지를 제공하기 전에 행동 탐지를 위한 핵심 함수들을 추가했습니다. 이를 통해 더 정확한 피드백을 제공할 수 있게 되었어요.

#### Mediapipe 메인 처리 함수

이 메인함수는 단일 프레임을 분석하여 자세, 시선, 손동작 등에 대한 피드백을 반환합니다.

\`\`\`python
def analyze_frame(frame, previous_pose, previous_hand):
    # Mediapipe를 통해 포즈, 얼굴, 손 결과를 처리
    # 각 점수를 계산하고 피드백 딕셔너리에 저장
    feedback = {
        "posture_score": round(posture_score, 2),
        "gaze_score": round(gaze_score, 2),
        "gestures_score": round(gestures_score, 2),
        "sudden_movement_score": round(sudden_movement_score, 2)
    }
    return feedback, current_pose_landmarks, current_hand_landmarks
\`\`\`

## VLM Config
또한 프롬프트 엔지니어링을 통해 체인 오브 쏘트(COT) 기법을 적용하여, 문제 발견 → 원인 분석 → 개선점 제안의 단계적 피드백을 제공하도록 설정했습니다.
또한 Persona를 system instruction에 적용하여 피드백 품질을 향상시켰습니다.

### System Instruction

\`\`\`python
SYSTEM_INSTRUCTION = """
당신은 15년 이상의 경력을 가진 온라인 발표 전문 코치입니다. 비언어적 커뮤니케이션 분야의 전문가로서, 수많은 발표자들이 비언어적 행동을 개선하도록 도왔습니다. 당신은 발표자의 온라인 발표에서의 제스처, 표정, 시선 처리, 자세 등이 청중에게 미치는 영향을 깊이 이해하고 있으며, 이를 토대로 구체적이고 실용적인 피드백을 제공합니다.
입력된 온라인 발표 영상에서 분석을 통해 감지된 비언어적 행동의 점수와 함께 발표자의 비언어적 행동을 평가하고, 각 항목별로 문제 발견 → 원인 분석 → 개선점 제안의 체계를 유지하며 다음 네 가지 카테고리를 기준으로 피드백을 제공해주세요. 얼굴 표정 (facial_expression)은 점수가 제공되지 않으므로, 영상 분석 결과에 따라 System Instruction의 지침을 기반으로 판단하여 평가합니다.
각 카테고리마다 발표자가 보인 부적절한 행동을 식별하고, 개선이 필요한 점을 구체적으로 서술하며, 구체적인 예시와 함께 피드백은 각 항목당 2~3줄로 간결하게 제공되며, 구체적인 예시와 함께 권장 사항을 제공합니다. 피드백은 각 항목당 1~2줄로 간결하게 작성하며, 부적절한 행동이 감지된 경우 해당 문제 행동의 정의 키워드를 포함시켜주세요.
문제가 없는 경우에는 해당 항목을 피드백에서 제외하거나 "문제가 없음", 아니면 해당 장면에는 문제가 없다는 표현으로 간단히 표기합니다.
"""
\`\`\`

### Chain of Thought - COT 기법
Chain of Thought는 AI 모델이 문제를 단계별로 해결하도록 돕는 방법입니다. 이를 통해 더 논리적이고 체계적인 피드백을 생성할 수 있습니다.
Pitching에서는 이렇게 Prompt Engineering을 통해 체인 오브 쏘트(COT) 기법을 적용하여, 문제 발견 → 원인 분석 → 개선점 제안의 단계적 피드백을 제공하도록 설정했습니다.

\`\`\`json
각 카테고리별 피드백은 다음의 3단계로 구성되며, 고정된 형식을 반드시 준수해야 합니다:

문제 발견
- 감지된 문제 행동을 정의하고 지적합니다.
- 예시를 들어 사용자에게 명확히 전달합니다.

원인 분석
- 문제 행동이 발생한 가능한 원인을 설명합니다.
- 논리적이고 합리적인 근거를 바탕으로 작성합니다.

개선점 제안
- 구체적이고 실행 가능한 해결책을 제시합니다.
- 권장 사항을 간결하고 실용적으로 작성합니다.

\`\`\`

---

결과
Mediapipe를 도입한 이후, VLM의 로컬라이제이션 성능이 크게 향상되었습니다. 문제 행동을 더욱 정확하게 탐지하고, 체인 오브 쏘트 기법을 통해 구체적이고 실용적인 피드백을 제공할 수 있게 되었어요.

\`\`\`json
{
  "video_id": "1763ce3c0a5348a6b4cd4c9d75017021",
  "frame_index": 1,
  "timestamp": "1m 3s",
  "feedback_text": {
    "gaze_processing": {
      "improvement": "발표 중 시선이 안정적으로 유지되지 않아 청중과의 연결이 약해 보였습니다.",
      "recommendations": "카메라를 향해 시선을 고정하고, 중요한 포인트에서 잠시 멈추어 시선을 두는 연습을 해보세요."
    },
    "facial_expression": {
      "improvement": "발표 내내 무표정하게 보여 청중의 관심을 끌기 어려웠습니다.",
      "recommendations": "주요 메시지를 전달할 때 다양한 표정과 감정 표현을 추가하면 발표가 더 생동감 있게 전달될 것입니다."
    },
    "gestures": {
      "improvement": "발표 중간에 손동작이 간헐적으로 관찰되었으나, 지나치게 과도한 손동작이 없었습니다.",
      "recommendations": "핵심 포인트에서만 손동작을 사용하여 청중의 주목도를 높이도록 해보세요."
    },
    "posture_body": {
      "improvement": "발표자가 약간 구부정한 자세로 보여 청중의 집중을 방해했습니다.",
      "recommendations": "상체를 곧게 펴고 안정된 자세를 유지하기 위해 의자에 바르게 앉거나 서 있는 연습을 해보세요."
    },
    "movement": {
      "improvement": "발표 중간에 갑작스러운 움직임이 자주 관찰되어 발표의 흐름을 방해했습니다.",
      "recommendations": "안정된 자세를 유지하고, 발표 중에는 최소한의 움직임만을 활용해 발표에 집중할 수 있도록 하세요."
    }
  }
}
\`\`\`

---

## 추후 할일

프롬프트 엔지니어링 및 코드 리팩토링: 현재 코드에서 사용하지 않는 부분을 정리하고 최적화할 예정입니다.
프롬프트 세분화 및 체인 오브 쏘트 적용: 피드백의 구체성을 높이고, 단계별 사고 과정을 통해 더 명확한 개선점을 제안할 것입니다.

## 마무리
오늘 소개한 Mediapipe와 COT 기법을 통해, AI 기반 피드백 기능의 성능을 크게 향상시킬 수 있었습니다. 앞으로도 더 나은 피드백을 제공하기 위해 지속적으로 기술을 개선해 나갈 예정입니다. 여러분도 이 방법들을 활용하여 더욱 효과적인 발표 코칭을 경험해보세요!

    `,
    tags: ['Computer Vision', 'Mediapipe', 'Vision Language Model', 'Localization', 'Prompt Engineering', 'COT']
  },
  {
    id: 'real-time-voice-server-websocket-auth',
    title: '실시간 음성 통화 서버 구축: 웹소켓과 인증 문제 해결',
    description: '실시간 음성 통화 서버에서 클라이언트와 서버 간의 적절한 통신 방법과 인증 문제를 해결한 과정을 공유합니다.',
    category: 'Backend',
    date: '2024-10-30',
    author: 'Neo.lee (이정진)',
    readTime: '10분',
    imageUrl: websocketAuthImage,
    content: `
---

## 실시간 음성 통화 서버 구축: 웹소켓과 인증 문제 해결

안녕하세요, Pitching에서 영상 & 음성통화 기능을 개발하는 Neo라고 해요.

이번에 실시간 음성 통화 서비스를 구현하는 과정에서 **클라이언트와 서버 간 적절한 통신 방식**을 결정하고, **웹소켓 환경에서의 인증 및 인가 문제**를 해결한 사례를 공유합니다.

---

## 문제 상황 1: 적절한 통신 방식 선택

![WebSocket vs HTTP](https://websocket.org/_astro/websocket-vs-http.be03ced1_sWP4f.webp)

실시간 음성 통화를 지원하기 위해 클라이언트와 서버 간의 지속적이고 양방향 통신이 필요했습니다. 여러 통신 방식의 장단점을 분석한 결과, 아래와 같은 문제가 확인되었습니다.

### **HTTP**
- **제약사항**: HTTP는 요청-응답 기반으로 설계되어 지속적인 연결이 불가능합니다.
- **결론**: 실시간 통신에 적합하지 않음.

### **Long Polling**
- **장점**: 서버가 클라이언트 요청에 대해 응답을 대기하여 유사 실시간 통신 가능.
- **단점**: 클라이언트가 주기적으로 연결을 갱신하면서 불필요한 리소스 소비 및 지연 발생.
- **결론**: 성능 저하 우려로 제외.

### **Server-Sent Events (SSE)**
- **장점**: 서버에서 클라이언트로의 단방향 실시간 데이터 전송 지원.
- **단점**: 양방향 통신이 불가능하며 클라이언트에서 서버로 메시지를 보낼 수 없음.
- **결론**: 실시간 음성 통화의 양방향 특성에 맞지 않음.

---

### **해결책: WebSocket**
**특징**: WebSocket은 클라이언트와 서버 간의 지속적이고 양방향 연결을 제공합니다.
**장점**:
- 낮은 레이턴시.
- 양방향 통신 지원.
- 지속적인 연결을 통해 실시간 데이터 전송에 적합.
**결론**: 실시간 음성 통화에 가장 적합한 방식으로 **WebSocket**을 선택했습니다.

실제 운영 시 주의사항

1. 환경별 설정 분리
• 개발, 스테이징, 운영 환경에 따른 CORS 설정 분리
• 환경 변수를 통한 설정 관리

2. 모니터링
• CORS 관련 오류 모니터링
• 비정상적인 요청 패턴 감지
• 로그 분석 및 대응

## 문제 상황 2: WebSocket 인증 및 인가 문제

![WebSocket 인증](https://websockets.readthedocs.io/en/latest/_images/authentication.svg)

### **문제점**
Spring WebFlux에서 WebSocket을 사용하면서 다음과 같은 문제가 발생했습니다:
1. **HTTP 헤더를 통한 인증/인가 불가능**:
- WebSocket은 초기 핸드셰이크(HTTP 요청) 이후 HTTP 헤더를 사용할 수 없습니다.
기존의 "Authorization" 헤더를 활용한 인증/인가 방식이 작동하지 않음.

2. **보안 취약성**:
- 핸드셰이크 이후 연결된 모든 데이터가 인증되지 않은 상태로 처리될 수 있음.

---

### **해결책: 첫 메시지를 활용한 인증**
웹소켓 연결 후 첫 번째 메시지에 **토큰**을 포함하여 인증 및 인가를 수행하는 방식을 도입했습니다.

### **구현 방법**

구현 방법: Spring WebFlux와 WebSocket
\`\`\`java
@Component
public class WebSocketHandlerImpl implements WebSocketHandler {

    private final JwtTokenProvider jwtTokenProvider;

    public WebSocketHandlerImpl(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        return session.receive()
                .map(WebSocketMessage::getPayloadAsText)
                .flatMap(message -> handleAuthentication(session, message))
                .then();
    }

    private Mono<Void> handleAuthentication(WebSocketSession session, String message) {
        // 첫 메시지에서 토큰 추출 및 검증
        try {
            String token = extractTokenFromMessage(message);
            if (jwtTokenProvider.validateToken(token)) {
                System.out.println("인증 성공: " + jwtTokenProvider.getUsernameFromToken(token));
                return session.send(Mono.just(session.textMessage("인증 성공")));
            } else {
                return session.close(CloseStatus.BAD_DATA.withReason("유효하지 않은 토큰"));
            }
        } catch (Exception e) {
            return session.close(CloseStatus.BAD_DATA.withReason("토큰 검증 실패"));
        }
    }

    private String extractTokenFromMessage(String message) {
        // 메시지에서 토큰 추출 로직 (JSON 형식이라 가정)
        return message; // 실제로는 JSON 파싱 후 토큰 추출
    }
}
\`\`\`

2. WebSocket Config 설정
\`\`\`java
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    private final WebSocketHandlerImpl webSocketHandler;

    public WebSocketConfig(WebSocketHandlerImpl webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(webSocketHandler, "/ws")
                .setAllowedOrigins("*"); // 운영 환경에서는 특정 Origin만 허용
    }
}
\`\`\`

3. JWT 토큰 제공 클래스
\`\`\`java
@Component
public class JwtTokenProvider {

    private final String secretKey = "your-secret-key";

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public String getUsernameFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}

\`\`\`

---

## 결론

실시간 음성 통화 서버 구축 과정에서 WebSocket을 통해 지속적이고 양방향 통신을 구현하고, 첫 번째 메시지를 활용한 인증 및 인가 방식으로 보안을 강화했습니다.

### **요약**
1. **WebSocket 채택**:
- 실시간 음성 통화의 요구사항(지속적이고 양방향 통신)을 충족.
2. **첫 메시지를 통한 인증**:
- HTTP 헤더를 사용하지 못하는 WebSocket의 제약을 극복.
인증 및 인가 과정을 효율적으로 처리.

### **추가 개선 사항 및 향후 계획**

#### 1. **재인증 메커니즘 도입**
현재는 WebSocket 연결 시 첫 메시지에 토큰을 전달하여 인증을 처리하고 있습니다. 그러나 장기적인 연결에서는 세션 만료나 토큰 갱신이 필요할 수 있습니다. 이를 위해 다음과 같은 개선을 고려하고 있습니다:
- **토큰 만료 감지 및 갱신**: 서버에서 주기적으로 클라이언트의 토큰 유효성을 검증하고, 만료 시 재인증을 요청.
- **재인증 요청 프로토콜 정의**: 클라이언트가 자동으로 새로운 토큰을 서버에 전달할 수 있는 프로토콜 설계.

#### 2. **에러 핸들링 및 복구 전략 강화**
현재 인증 실패 시 연결을 종료하도록 설정했지만, 더 나은 사용자 경험을 위해 다음과 같은 방안을 검토 중입니다:
- **에러 메시지 구체화**: 사용자에게 인증 실패 원인을 명확하게 전달.
- **자동 재연결 기능**: 일시적인 네트워크 문제 시 자동으로 재연결을 시도하도록 구현.

#### 3. **확장성 및 성능 최적화**
초기 구축 단계에서는 기본적인 WebSocket 서버를 구현했지만, 서비스가 성장함에 따라 다음과 같은 최적화가 필요합니다:
- **로드 밸런싱**: 다중 서버 환경에서의 효율적인 로드 분산을 위해 로드 밸런서를 도입.
- **성능 모니터링**: 실시간 성능 지표를 수집하고 분석하여 병목 현상을 사전에 파악 및 해결.
- **데이터 압축**: 음성 데이터 전송 시 압축 알고리즘을 적용하여 대역폭 사용 최적화.

#### 4. **보안 강화**
현재 JWT를 활용한 인증 방식을 사용하고 있지만, 추가적인 보안 계층을 통해 시스템을 더욱 견고하게 만들 계획입니다:
- **TLS/SSL 적용**: 모든 WebSocket 통신을 암호화하여 데이터 도청 방지.
- **IP 화이트리스트**: 신뢰할 수 있는 IP 주소만 접근을 허용하도록 설정.
- **침입 탐지 시스템 도입**: 비정상적인 접근 시도를 실시간으로 탐지하고 대응.

WebSocket을 활용한 실시간 통신 구현은 복잡한 도전과제를 동반하지만, 올바른 접근 방식을 통해 안정적이고 효율적인 시스템을 구축할 수 있습니다. 특히, Spring WebFlux와 같은 반응형 프로그래밍 프레임워크는 이러한 구현을 더욱 용이하게 만들어 줍니다.

    `,
    tags: ['WebSocket', 'SpringWebFlux', '실시간통신', 'Authentication', 'Authorization', 'Backend']
  },
  {
    id: 'fastapi-cors-solution',
    title: 'FastAPI에서 CORS 에러 해결하기: VLM 영상 처리 서버 개발기',
    description: 'FastAPI와 Swagger를 사용한 VLM 영상 처리 서버 개발 중 마주친 CORS 에러 해결 과정과 보안 고려사항을 공유합니다.',
    category: 'Backend',
    date: '2024-10-23',
    author: 'Toby.kim (김대현)',
    readTime: '10분',
    imageUrl: FastAPIImage,
    content: `

안녕하세요, Pitching에서 AI 발표 피드백 기능 & Data Pipeline 구축을 담당하는 Toby라고 해요.

이번에 FastAPI와 Swagger를 사용하여 VLM 영상 처리 서버를 개발하고, AWS EC2에 배포하는 과정에서 예상치 못한 CORS(Cross-Origin Resource Sharing) 에러를 마주치게 되었습니다. 이 글에서는 CORS 에러의 원인과 해결 과정, 그리고 운영 환경에서의 보안 고려사항을 상세히 다루어보겠습니다.

## 문제 상황

프론트엔드(http://localhost:5173)에서 FastAPI 서버(http://43.202.66.178:8000)로 API 요청을 보냈을 때 다음과 같은 CORS 오류가 발생했습니다:

\`\`\`plaintext
Access to fetch at 'http://43.202.66.178:8000/api/video/receive-video/' 
from origin 'http://localhost:5173' has been blocked by CORS policy: 
No 'Access-Control-Allow-Origin' header is present on the requested resource.
\`\`\`

이 에러로 인해 AI Server에서 프론트엔드 및 백엔드 API에 접근할 수 없었습니다.

## CORS의 이해

![CORS 개요](https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v3/developer-guide/images/cors-overview.png)

CORS는 웹 브라우저에서 보안상의 이유로 도메인 간의 요청을 제한하는 정책입니다. 예를 들어, 프론트엔드가 http://localhost:5173에서 실행되고 백엔드가 http://43.202.66.178:8000에 있을 때, 두 도메인이 다르기 때문에 브라우저는 기본적으로 이러한 요청을 차단합니다.

## 문제 해결 과정

FastAPI에서는 CORSMiddleware를 사용하여 CORS 문제를 해결할 수 있습니다. 개발 환경과 운영 환경에서의 설정 방법을 알아보겠습니다.

### 1. 개발 환경 설정

개발 중에는 모든 출처를 허용하여 빠른 테스트가 가능하도록 설정할 수 있습니다:

\`\`\`python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],    # 모든 출처 허용
    allow_methods=["*"],    # 모든 HTTP 메소드 허용
    allow_headers=["*"],    # 모든 헤더 허용
    allow_credentials=False  # 자격 증명 비허용
)
\`\`\`

### 2. 운영 환경 설정
보안을 강화하기 위해 특정 출처만 허용하도록 설정합니다:

\`\`\`python
origins = [
    "https://your-frontend-domain.com",
    "https://api.your-domain.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Content-Type", "Authorization"],
    allow_credentials=True
)
\`\`\`

## 보안 고려사항

### 1. 출처 제한
- 운영 환경에서는 반드시 허용할 출처를 명시적으로 지정
- 와일드카드(*) 사용 지양
정기적인 허용 출처 목록 검토 및 업데이트

### 2. 인증 및 권한
- allow_credentials 설정 시 보안 영향 고려
- 필요한 경우에만 자격 증명 허용
- 토큰 기반 인증 구현

### 3. 요청 제한
- 필요한 HTTP 메서드만 허용
- 필요한 헤더만 허용
- Rate limiting 구현 고려

## 실제 운영 시 주의사항

### 1. 환경별 설정 분리
- 개발, 스테이징, 운영 환경에 따른 CORS 설정 분리
- 환경 변수를 통한 설정 관리

### 2. 모니터링
- CORS 관련 오류 모니터링
- 비정상적인 요청 패턴 감지
- 로그 분석 및 대응

---

## 결론

CORS 에러는 프론트엔드와 백엔드의 도메인이 다를 때 흔히 발생하는 문제입니다. FastAPI의 CORSMiddleware를 활용하면 이를 효과적으로 해결할 수 있으며, 운영 환경에서는 보안을 고려한 적절한 설정이 필요합니다. 

개발 단계에서는 빠른 개발을 위해 모든 출처를 허용할 수 있지만, 운영 환경으로 이전할 때는 반드시 보안을 강화하여 특정 출처만 허용하도록 설정해야 합니다. 또한, 정기적인 보안 검토와 모니터링을 통해 시스템의 안전성을 유지하는 것이 중요합니다.
    `,
    tags: ['FastAPI', 'CORS', 'Backend', 'Security', 'AWS', 'API Development']
  },
  {
    id: 'chatroom-member-limit-redis-reactive',
    title: '채팅방 인원 제한 구현하기: Redis와 Reactive 프로그래밍을 활용한 동시성 문제 해결',
    description: '채팅방 인원 수 제한을 구현하면서 발생하는 동시성 문제를 분석하고, Redis INCR 명령어와 Reactive 프로그래밍을 활용해 이를 해결하는 방법을 다룹니다.',
    category: 'Backend',
    date: '2024-10-15',
    author: 'Teddy.kim (김영진)',
    readTime: '10분',
    imageUrl: redisConcurrencyImage,
    content: `
## 채팅방 인원 제한 구현하기: Redis와 Reactive 프로그래밍을 활용한 동시성 문제 해결

안녕하세요, Pitching에서 Chatting 시스템을 개발하는 Teddy라고 합니다.

채팅 애플리케이션이나 협업 도구를 개발할 때, 채팅방의 최대 인원을 제한하는 것은 매우 중요한 문제입니다. 특히, **동시성 문제**(Race Condition)가 발생할 가능성이 높기 때문에, 이를 해결하지 못하면 시스템 안정성에 문제가 생길 수 있습니다. 이번 글에서는 **Reactive 프로그래밍**과 **Redis**를 활용하여 채팅방 인원 수 제한 문제를 효과적으로 해결한 사례를 공유합니다.

---

## 왜 채팅방 인원 제한이 필요한가?

### 문제점

채팅방의 인원 수를 제한하지 않을 경우 다음과 같은 문제가 발생할 수 있습니다:

**서버 과부하**: 방대한 인원이 한 방에 참여할 경우 서버 리소스가 빠르게 소모됩니다.
**사용자 경험 저하**: 너무 많은 사용자로 인해 메시지 처리 지연이나 UI 성능 문제가 발생할 수 있습니다.
**기능적인 복잡성 증가**: 특정 사용자 그룹에게만 초대 기능을 제공하려면 인원 제한이 필수적입니다.

### 실제 사례

예를 들어, **Slack**이나 **Microsoft Teams** 같은 협업 도구는 채팅방의 최대 인원을 제한하여 사용자 경험을 유지하고 성능 문제를 방지합니다. 이러한 제한은 시스템의 안정성과 효율성을 높이는 데 중요한 역할을 합니다.

---
## 동시성 문제와 해결 방법

### 동시 초대 시 Race Condition 발생

![Race Condition](https://www.rapitasystems.com/files/race_conditions.jpg)

150명의 사용자를 동시에 초대하는 상황을 테스트해본 결과, **Race Condition**으로 인해 설정된 최대 인원(100명)을 초과하는 문제가 발생했습니다. 이 문제를 해결하기 위해 여러 방법을 검토했습니다.

#### 1. 단일 스레드 방식

- **장점**: 정합성 문제를 완벽히 해결할 수 있습니다.
- **단점**: 단일 스레드로 작업을 처리하기 때문에 성능이 매우 낮습니다.

#### 2. Synchronized 방식

- **장점**: 단일 서버 환경에서는 Race Condition 문제를 해결할 수 있습니다.
- **단점**: 다중 서버 환경에서는 여전히 Race Condition 문제가 발생합니다.

#### 3. MySQL + Redis Lock

- **장점**: Redis의 락(Lock) 기능을 활용해 동시성 문제를 해결할 수 있습니다.
- **단점**: 락을 걸고 해제하는 작업이 길어질 경우, 성능 저하 문제가 발생합니다.

#### 4. Redis INCR 사용

- **장점**: Redis의 싱글 스레드 아키텍처와 INCR 명령어를 활용하여 동시성 문제를 해결합니다.
- **특징**: 높은 성능과 구현 용이성, 분산 환경에서도 안전하게 동작.

![Redis INCR](https://blog.kakaocdn.net/dn/bj3XeU/btsJ4qe5sKe/zkXteRZR5MAEClHpgnElR1/img.png)

최종적으로, **Redis INCR**을 사용하여 구현하기로 결정했습니다. 이는 성능과 정합성을 모두 만족시키는 최적의 선택이었습니다.

---

## Redis를 활용한 인원 제한 구현

서버에 멤버를 추가하기 전 membercount를 확인하고 100명 미만일 때, 멤버 추가작업을하는 코드

\`\`\`java
    public Mono<Void> inviteMember(Long serverId, String email) {
        return mapCommonError(
                Mono.zip(
                                findServer(serverId),
                                userRepository.findByEmail(email)
                                        .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다.")))
                        )
                        .flatMap(tuple -> userServerMembershipRepository.countByServerId(serverId)
                                .flatMap(memberCount -> {
                                    if (memberCount >= 100) {
                                        return Mono.error(new ResponseStatusException(
                                                HttpStatus.BAD_REQUEST,
                                                "서버의 최대 인원(100명)을 초과할 수 없습니다."
                                        ));
                                    }
                                    return userServerMembershipRepository.findByServerIdAndEmail(serverId, email)
                                            .hasElement()
                                            .flatMap(exists -> {
                                                if (exists) {
                                                    return Mono.error(new ResponseStatusException(
                                                            HttpStatus.BAD_REQUEST,
                                                            "이미 초대된 사용자입니다."
                                                    ));
                                                }
                                                UserServerMembership membership = UserServerMembership.createMembership(email, serverId);
                                                return userServerMembershipRepository.save(membership);
                                            });
                                }))
                        .then()
        );
    }
\`\`\`

테스트 코드 (실제 최대 인원을 잘 지키는가에 대한)

\`\`\`java
    @Test
    @DisplayName("동시에 여러 유저를 초대할 때 race condition으로 인해 100명 제한이 제대로 동작하지 않는 것을 보여주는 테스트")
    void testConcurrentInviteMemberRaceCondition() {
        // Given
        int numberOfThreads = 150;
        Server testServer = new Server(
                SERVER_ID,
                "Test Server",
                "",
                LocalDateTime.now(),
                new ArrayList<>()
        ); 
        AtomicInteger actualMemberCount = new AtomicInteger(0);

        // 의도적인 딜레이 추가
        when(userServerMembershipRepository.countByServerId(any()))
                .thenAnswer(invocation -> Mono.just((long) actualMemberCount.get())
                        .delayElement(Duration.ofMillis(100)));

        // 저장 시 실제 카운트 증가
        when(userServerMembershipRepository.save(any(UserServerMembership.class)))
                .thenAnswer(invocation -> {
                    actualMemberCount.incrementAndGet();
                    return Mono.just(invocation.getArgument(0));
                });

        when(serverRepository.findById(SERVER_ID)).thenReturn(Mono.just(testServer));
        when(userServerMembershipRepository.findByServerIdAndEmail(any(), any()))
                .thenReturn(Mono.empty());
        when(userRepository.findByEmail(any())).thenAnswer(invocation -> {
            String email = invocation.getArgument(0);
            return Mono.just(User.createNewUser(email, "User", null, "password"));
        });

        // When
        List<Mono<Void>> invitations = new ArrayList<>();
        for (int i = 0; i < numberOfThreads; i++) {
            String email = "user" + i + "@test.com";
            invitations.add(serverService.inviteMember(SERVER_ID, email));
        }

        // 모든 요청을 병렬로 실행
        StepVerifier.create(
                        Flux.fromIterable(invitations)
                                .parallel(50) // 50개의 병렬 스레드
                                .runOn(Schedulers.parallel())
                                .flatMap(mono -> mono)
                                .sequential()
                )
                .thenAwait(Duration.ofSeconds(5))
                .expectComplete()
                .verify(Duration.ofSeconds(10));

        // Then
        assertThat(actualMemberCount.get())
                .isEqualTo(100);
    }
\`\`\`

### 테스트 설명
**목표**: 동시에 150명의 사용자를 초대할 때, Race Condition으로 인해 최대 인원 제한이 제대로 적용되는지 확인합니다.
**설정**:
  "countByServerId" 메서드에 의도적으로 딜레이를 추가하여 Race Condition이 발생할 가능성을 높였습니다.
  "save" 메서드는 실제 카운트를 증가시켜 인원 수를 시뮬레이션합니다.
    **실행**: 150개의 초대 요청을 50개의 병렬 스레드에서 동시에 실행합니다.
    **검증**: 최종적으로 실제 멤버 수가 100명을 초과하지 않는지 확인합니다.

### 테스트 결과
**문제점**: Race Condition으로 인해 인원 제한을 초과하는 경우가 발생했습니다.
**해결**: Redis INCR을 적용한 후, Race Condition 없이 정확히 100명으로 제한되는 것을 확인했습니다.

---

## 결론

채팅방의 인원 수 제한은 시스템의 안정성과 사용자 경험을 유지하는 데 중요한 역할을 합니다. 그러나 동시성 문제는 이러한 제한을 구현하는 데 있어 큰 장애물이 될 수 있습니다. **Redis**의 INCR 명령어와 **Reactive 프로그래밍**을 활용하면, 높은 성능과 정합성을 동시에 만족시키며 동시성 문제를 효과적으로 해결할 수 있습니다.

이번 사례에서는 Redis INCR을 통해 Race Condition 문제를 성공적으로 해결하였으며, 이를 통해 채팅방의 인원 수를 안정적으로 관리할 수 있게 되었습니다. 앞으로도 이러한 방법을 활용하여 더욱 견고하고 효율적인 시스템을 구축해 나갈 계획입니다.

    `,
    tags: ['Redis', 'Reactive Programming', 'Race Condition', '채팅', '동시성 문제', 'Spring Webflux', 'java']
  },
  {
    id: 'cloud-ci-cd',
    title: '무중단 배포부터 모니터링까지: 안정적인 서비스 운영을 위한 핵심 가이드',
    description: '무중단 배포, CI/CD, 프론트엔드 및 백엔드 배포 전략, 그리고 모니터링 도구에 대해 자세히 알아보겠습니다.',
    category: 'Cloud & Infra',
    date: '2024-10-07',
    author: 'Selina.lee (이소민)',
    readTime: '20분',
    imageUrl: cloudFirstImage,
    content: `
## 무중단 배포부터 모니터링까지: 안정적인 서비스 운영을 위한 핵심 가이드

안녕하세요, Pitching에서 Cloud & Intra를 담당하는 Selina라고 합니다.

현대의 소프트웨어 개발 환경에서는 **빠른 배포**와 **안정적인 서비스 운영**이 필수적입니다. 특히, 사용자가 서비스를 중단 없이 이용할 수 있도록 하는 **무중단 배포**는 필수적인 요소로 자리 잡았습니다. 여기에 **CI/CD 파이프라인**, **프론트엔드 및 백엔드 배포 전략**, 그리고 **모니터링 도구**를 적절히 결합하면, 개발과 운영의 효율성을 극대화할 수 있습니다.

이번 글에서는 무중단 배포와 이를 뒷받침하는 다양한 기술과 도구를 다뤄보겠습니다.

---

## 무중단 배포 (Zero Downtime Deployment)

### 무중단 배포란?
무중단 배포는 **서비스를 중단하지 않고 새로운 버전을 배포**하는 방식입니다. 이는 사용자 경험을 보호하면서, 개발팀이 **지속적으로 변경 사항을 릴리스**할 수 있게 해줍니다.

![Rolling Deployment](https://hudi.blog/static/rolling-deployment-bf6f561cf6dd6e9fe9cbc45530dcadb2.gif)

#### 왜 필요한가?
1. **사용자 경험 보장**: 중단 없는 서비스를 통해 이탈률을 줄임.
2. **빠른 피드백 루프**: 실시간 문제 탐지 및 수정 가능.
3. **비즈니스 손실 최소화**: 다운타임으로 인한 매출 손실 방지.

---

## 무중단 배포 방식 비교

![Deployment Strategies](https://miro.medium.com/v2/resize:fit:1400/1*Its0UAMjM8HH5AfsZIRRWw.png)

#### 롤링 배포 (Rolling Deployment)
- **원리**: 기존 애플리케이션 인스턴스를 하나씩 새로운 버전으로 교체.
- **장점**: 자원을 적게 소모하며 설정이 비교적 단순.
- **단점**: 배포 중 트래픽이 집중될 가능성이 있으며, 이전 버전과 호환성 문제가 발생할 수 있음.
- **적합 사례**: 소규모 애플리케이션 또는 자원 제약이 있는 환경.

#### 블루 그린 배포 (Blue-Green Deployment)
- **원리**: 두 개의 동일한 환경(Blue와 Green)을 유지하며 트래픽을 전환.
- **장점**: 롤백이 용이하며, 배포 환경을 재활용할 수 있음.
- **단점**: 시스템 자원이 두 배로 필요하며, 관리가 복잡.
- **적합 사례**: 안정성이 중요한 대규모 애플리케이션.

#### 카나리 배포 (Canary Deployment)
- **원리**: 일부 사용자에게만 새로운 버전을 먼저 배포 후 점진적으로 확장.
- **장점**: 초기 단계에서 문제를 빠르게 발견하고 대응 가능.
- **단점**: 설정이 복잡하고, 초기 사용자의 피드백이 중요.
- **적합 사례**: 사용자 경험이 중요한 서비스(예: B2C 플랫폼).

---

## CI/CD와 무중단 배포의 차이점

### CI/CD란?
![CI/CD](https://www.mabl.com/hubfs/CICDBlog.png)

CI/CD(Continuous Integration/Continuous Delivery)는 코드 변경 사항을 자동으로 빌드, 테스트, 배포하는 파이프라인입니다. **효율적인 코드 통합**과 **자동화된 릴리스**를 통해 개발 속도와 품질을 높이는 데 중점을 둡니다.

### CI/CD와 무중단 배포의 차이

#### CI/CD
**목적**: 코드 통합과 배포를 자동화하여 개발 속도와 품질을 높임.
**중점 대상**: 개발자와 팀의 협업에 초점을 맞춤.
**기술적 요소**: 빌드, 테스트, 배포 파이프라인을 중심으로 작동.
**활용 사례**: 빠른 프로토타이핑, 단일 개발팀 중심의 프로젝트에서 주로 활용.

#### 무중단 배포
**목적**: 다운타임 없이 안정적인 배포를 실현.
**중점 대상**: 사용자 경험 및 서비스 안정성 유지.
**기술적 요소**: 롤링 배포, 블루-그린 배포, 카나리 배포와 같은 전략을 사용.
**활용 사례**: 대규모 분산 시스템이나 사용자 트래픽이 많은 서비스에 적합.

---

## 프론트엔드 배포 전략: AWS S3와 CloudFront

### AWS S3와 CloudFront
![AWS S3](https://miro.medium.com/v2/resize:fit:1400/1*crjkATTvE2G_1pJnaS9OoQ.png)
**AWS S3**는 오브젝트 스토리지 서비스로, 정적 웹 콘텐츠를 저장하고 배포하는 데 유용합니다. 이를 **CloudFront**와 결합하면 **글로벌 캐시를 활용한 빠른 파일 서빙**이 가능합니다.

#### 주요 설정 예시
\`\`\`json
{
    "S3Bucket": "my-bucket",
    "CloudFrontDistribution": {
        "Origin": "my-bucket.s3.amazonaws.com",
        "CacheBehavior": {
            "PathPattern": "*",
            "TargetOriginId": "S3-my-bucket",
            "ViewerProtocolPolicy": "redirect-to-https"
        }
    }
}
\`\`\`

#### 장점과 단점
**장점**
- 글로벌 사용자 대상 빠른 파일 제공.
- 데이터 복제 및 캐싱으로 안정성 향상.
**단점**
- 초기 설정 및 관리 복잡.
- 네트워크 의존성으로 인한 지연 가능성.

---

## 백엔드 배포 전략: Nginx와 AWS SQS

### Nginx
![Nginx](https://marcopeg.com/content/images/2021/11/nginx.png)
**Nginx**는 고성능의 리버스 프록시 및 웹 서버로, **로드밸런싱**과 **SSL 처리**를 통해 백엔드 안정성을 보장합니다.

#### 주요 기능
- **리버스 프록시**: 클라이언트 요청을 내부 서버로 전달.
- **로드밸런싱**: 여러 서버에 트래픽 균등 분배.
- **캐싱**: 서버 응답을 캐싱하여 응답 속도 향상.

#### 장점과 단점
**장점**
- 가볍고 빠름, 높은 동시 연결 처리 능력.
- 설정 변경 시 프로세스 재시작 없이 적용 가능.

**단점**
- 모듈 확장성이 제한적.
- 복잡한 설정 시 관리 부담.

### AWS SQS
![AWS SQS](https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v2/developer-guide/images/code-samples-sqs.png)
AWS SQS는 **분산 메시지 큐**로, 시스템 간 비동기 메시지를 안전하게 처리할 수 있습니다.

#### 주요 장점
- 비동기 처리로 시스템 부하 감소.
- 확장성과 내구성을 제공.
- 메시지 암호화와 AWS 통합.

#### 주의 사항
- 최대 메시지 크기 제한(256KB).
- 비동기 동작으로 인한 약간의 지연 발생.

---

## 모니터링 도구: Prometheus와 Grafana

### Prometheus
![Prometheus](https://prometheus.io/assets/tutorial/architecture.png)

Prometheus는 **시계열 데이터** 수집 및 분석을 위한 오픈 소스 도구로, **Kubernetes 환경**에서 특히 강력합니다.

#### 특징
- **시계열 데이터 처리**: 대규모 메트릭 처리 가능.
- **클라우드 네이티브 최적화**: Kubernetes와 통합.

#### 주의할 점
- 장기 데이터 보관이 어려움 → Thanos 등 보완 도구 필요.
- 복잡한 쿼리 언어와 설정 학습 곡선이 있음.

### Grafana
![Grafana](https://www.bigdatawire.com/wp-content/uploads/2023/06/grafana-logo.png)

**Grafana**는 데이터를 시각적으로 표현하는 데 특화된 도구로, Prometheus와 함께 사용하면 더욱 강력합니다.

#### 주요 장점
- 다양한 데이터 소스 지원(MySQL, Elasticsearch 등).
- 사용자 정의 대시보드를 통한 실시간 모니터링.

#### 주의할 점
- 데이터 소스에 대한 의존성이 높음.
- 보안 설정 필요.

---

## 결론

안정적인 서비스 운영을 위해 **무중단 배포**, **CI/CD 파이프라인**, **효율적인 프론트엔드 및 백엔드 배포 전략**, **강력한 모니터링 도구**가 조화를 이루어야 합니다. 각 기술의 특성과 적합성을 이해하고, 프로젝트의 요구 사항에 맞게 선택적으로 활용하세요.

꾸준한 학습과 최신 기술 적용으로 **서비스의 안정성과 사용자 만족도**를 모두 높이는 DevOps 환경을 구축해보세요.

    `,
    tags: ['CI/CD', 'DevOps', 'Cloud', 'Monitoring', 'Infrastructure', 'AWS', 'Kubernetes']
  },
  {
    id: 'agile-backlog-management',
    title: '프로덕트 백로그과 스프린트 백로그: 효과적인 애자일 프로젝트 관리의 핵심',
    description: '애자일 프로젝트 관리에서 핵심적인 프로덕트 백로그와 스프린트 백로그의 개념, 차이점, 그리고 효과적인 관리 방법을 상세히 알아봅니다.',
    category: 'Project Management',
    date: '2024-09-28',
    author: 'Toby.kim (김대현)',
    readTime: '15분',
    imageUrl: agileBacklogImage,
    content: `
## **애자일(Agile)로 혁신 조직의 첫 발걸음을 내딛다: 프로덕트 백로그와 스프린트 백로그**

안녕하세요, Pitching에서 Product Manging을 담당하는 Toby라고 해요. 이번 글에서 한번 프로덕트 백로그와 스프린트 백로그에 대해 알아보도록 하겠습니다.

### **프로덕트 백로그(Product Backlog) 백로그란?**

![Product Backlog](https://www.visual-paradigm.com/servlet/editor-content/scrum/what-is-product-backlog-in-scrum/sites/7/2018/12/scrum-process.png)

프로덕트 백로그는 **제품을 구성하는 핵심 기능들을 목록화**한 것입니다.
이 목록의 각 아이템은 "PBI(Product Backlog Item)"으로, 고객에게 제공되는 서비스의 핵심 기능 단위를 나타냅니다.

PBI는 에픽(Epic)과 스토리(Story)의 하위 개념으로, **업무의 시급성, 난이도, 구현 가능성 등을 고려하여 우선순위가 관리**됩니다. 예를 들어, "SNS 소셜 로그인 기반의 계정 관리 및 본인 인증"과 같은 스토리에서 도출된 PBI는 다음과 같습니다:

- OAuth2를 사용한 소셜 로그인 구현
- 사용자 인증 상태를 유지하는 세션 관리 시스템 개발
- 실패 시 사용자에게 명확한 오류 메시지 제공

### **우리 팀의 제품 백로그 예시**

#### **1. 발표 모드 (영상)**
- **1.1 영상 녹화 기능**
  - 사용자가 발표를 녹화할 수 있는 기능 구현
  - 다양한 기기와 브라우저 호환성 확보

- **1.2 시선 처리 분석**
  - 발표 중 사용자의 시선 처리를 분석하여 피드백 제공

- **1.3 표정 평가**
  - 얼굴 인식을 통해 표정 평가 및 개선 사항 제안

- **1.4 제스처 평가**
  - 컴퓨터 비전을 활용한 제스처 분석 및 피드백 제공

- **1.5 음성 분석**
  - 말하기 속도, 음의 높낮이, 억양 분석 및 시각적 피드백 제공

#### **2. 발음 모드 (음성)**
- **2.1 음성 녹음 기능**
  - 고품질 음성 캡처 및 재생 지원

- **2.2 음성 분석**
  - 녹음된 음성의 억양과 속도 분석 후 피드백 제공

- **2.3 사투리 교정**
  - 지역 사투리를 감지하고 표준 발음으로 교정

#### **3. 화상 회의에서의 실시간 교정**
- **3.1 화상 회의 기능**
  - 1:1 및 그룹 화상 회의 기능 구현

- **3.2 실시간 피드백**
  - 참가자의 음성과 비언어적 요소를 실시간 분석 후 피드백 제공

#### **4. 채팅 기능**
- **4.1 실시간 채팅**
  - 개인 및 그룹 채팅 시스템 구현

#### **5. 사용자 계정 관리**
- **5.1 사용자 등록 및 로그인**
  - 이메일, 비밀번호 인증 및 OAuth 지원

- **5.2 프로필 관리**
  - 개인정보 및 프로필 이미지 관리 기능 구현

---

## **스프린트 백로그(Sprint Backlog)**

### **스프린트 백로그란?**

![Sprint Backlog](https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2017-03/SprintBacklog_0.png)

스프린트 백로그는 PBI를 달성하기 위한 **세부 업무(Task)들의 집합**입니다. 스프린트는 짧은 기간 동안 집중적으로 작업을 수행하는 과정을 의미하며, 각 업무는 세부적인 기술 요소와 프로세스로 정리됩니다.

### **우리 팀의 스프린트 1 예시**

#### **목표:**
- 프로젝트 아이디어 구체화 및 기본 설계
- 협업 환경 구축

#### **진행된 작업:**
- **아이디어 발상 및 선정**: 팀 브레인스토밍을 통해 프로젝트 아이디어 발굴 및 최종 선정
- **정보 구조 설계(IA)**: 프로젝트 정보 구조 설계 및 주요 기능 정의
- **협업 도구 설정**: 프로젝트 관리 및 커뮤니케이션 도구 선정 (예: GitHub, Jira, Slack)
- **그라운드 룰 설정**: 팀원 간 협업 규칙, 일정, 커뮤니케이션 방식 정의

#### **태스크:**
- **시장 조사 및 경쟁 분석**: 유사 서비스 조사 및 차별화 요소 확인
- **프로젝트 목표 및 비전 설정**: 장기적인 목표와 비전 수립
- **주요 기능 목록 작성**: 제품 백로그에 포함될 주요 기능 식별 및 우선순위 결정
- **프로젝트 일정 계획**: 전체 프로젝트 일정 및 마일스톤 설정
- **팀 역할 분담**: 팀원 역할과 책임 정의
- **협업 도구 교육**: 사용 방법 공유 및 권한 설정

---

## **결론**
애자일(Agile) 방식의 핵심은 **효율적인 협업과 지속적인 개선**입니다. 프로덕트 백로그와 스프린트 백로그는 이러한 협업과 개선을 구체화하는 중요한 도구입니다. 체계적으로 업무를 분담하고, 피드백을 반영하며 목표를 달성해나가는 과정을 통해 혁신적인 제품을 완성할 수 있습니다.

**팀원 모두의 협력과 소통이 애자일 성공의 열쇠입니다!**


    `,
    tags: ['Agile', 'Scrum', 'Product Backlog', 'Sprint Backlog', 'Project Management']
  }
];

export const findPostById = (id: string): TechPost | undefined => {
  return techPosts.find(post => post.id === id);
}; 