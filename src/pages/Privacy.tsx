import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const TableOfContents = () => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">목차</h2>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {[
          { id: 'section1', title: '1. 개인정보처리방침의 의의' },
          { id: 'section2', title: '2. 수집하는 개인정보' },
          { id: 'section3', title: '3. 수집한 개인정보의 이용' },
          { id: 'section4', title: '4. 개인정보의 제공 및 위탁' },
          { id: 'section5', title: '5. 개인정보의 파기' },
          { id: 'section6', title: '6. 이용자 및 법정대리인의 권리와 행사 방법' },
          { id: 'section7', title: '7. 개인정보보호를 위한 회사의 노력' },
          { id: 'section8', title: '8. 개인정보 보호책임자 및 담당자 안내' },
          { id: 'section9', title: '9. 개인위치정보의 처리' },
          { id: 'section10', title: '10. 본 개인정보처리방침의 적용 범위' },
          { id: 'section11', title: '11. 개정 전 고지 의무' },
        ].map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#fee500] dark:hover:text-[#fee500] text-left w-full"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#1e1f22]">
        <main className="flex-grow max-w-4xl mx-auto px-4 pt-24 pb-12 w-full">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Pitching 개인정보처리방침
          </h1>

          <div className="bg-white dark:bg-[#2b2d31] rounded-lg shadow-lg p-6 mb-8">
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              <p>공고일자: 2024년 12월 19일</p>
              <p>시행일자: 2024년 12월 23일</p>
            </div>

            {/* 서비스 소개 */}
            <div className="text-gray-700 dark:text-gray-300 mb-8">
              <p className="leading-relaxed">
                Pitching(이하 '회사' 또는 '서비스')는 사용자들의 발표 능력 향상과 관련된 다양한 기능을 제공하며, 
                이 과정에서 사용자 개인정보를 안전하게 보호하기 위해 개인정보 보호법 및 관련 국내외 규정을 준수합니다. 
                본 방침은 회사가 수집하는 개인정보, 이를 사용하는 방법, 그리고 사용자의 권리와 의무에 대해 명확히 설명합니다.
              </p>
            </div>

            {/* 목차 */}
            <TableOfContents />

            {/* 각 섹션 내용 */}
            <div className="space-y-12">
              {/* 섹션 1: 개인정보처리방침의 의의 */}
              <section id="section1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. 개인정보처리방침의 의의
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 본 개인정보처리방침을 <strong>개인정보 보호법</strong>을 기준으로 작성하되, 
                    서비스 내에서의 이용자 개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 
                    노력하였습니다.
                  </p>
                  <p className="leading-relaxed">
                    개인정보처리방침은 다음과 같은 중요한 의미를 가지고 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>개인정보의 수집, 이용, 제공</strong>: 회사가 어떤 정보를 수집하고, 
                      이를 어떻게 사용하며, 필요 시 누구와 공유하는지를 투명하게 제공합니다.
                    </li>
                    <li>
                      <strong>정보주체의 권리</strong>: 이용자는 자신의 개인정보에 대해 어떤 권리를 
                      가지고 있으며, 이를 어떤 방법과 절차로 행사할 수 있는지를 안내합니다.
                    </li>
                    <li>
                      <strong>침해사고 대응</strong>: 개인정보 침해사고 발생 시 추가적인 피해 예방 및 
                      피해 복구를 위한 연락처와 도움을 받을 수 있는 방법을 제공합니다.
                    </li>
                    <li>
                      <strong>개인정보자기결정권 보장</strong>: 이용자의 개인정보와 관련된 권리 및 
                      의무 관계를 규정하여 이용자의 개인정보자기결정권을 보장합니다.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 섹션 2: 수집하는 개인정보 */}
              <section id="section2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. 수집하는 개인정보
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    <strong>Pitching</strong> 서비스는 이용자가 회원가입을 하지 않아도 기본적인 
                    서비스(발표 검색, 칼럼 보기 등)를 이용할 수 있습니다. 회원가입을 통해 개인화된 
                    서비스(발표 피드백, 발표 모드 등)를 이용할 경우, 회사는 서비스 제공을 위해 필요한 
                    최소한의 개인정보를 수집합니다.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      회원가입 시 수집하는 개인정보
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>필수항목</strong>: 아이디, 비밀번호, 이름, 이메일 주소, 휴대전화번호</li>
                      <li><strong>선택항목</strong>: 프로필 사진, 별명</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      서비스 이용 과정에서 수집되는 개인정보
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>프로필 정보</strong>: 별명, 프로필 사진</li>
                      <li>
                        <strong>발표 관련 데이터</strong>: 발음 정확도, 표정, 제스처, 목소리 떨림 및 
                        크기, 억양, 시선 처리 등 발표와 관련된 피드백 데이터
                      </li>
                      <li>
                        <strong>기술적 정보</strong>: IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 
                        위치정보
                      </li>
                      <li><strong>통신 기록</strong>: 화상 회의, 채팅 기록 등</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 섹션 3: 수집한 개인정보의 이용 */}
              <section id="section3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. 수집한 개인정보의 이용
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 수집한 개인정보를 다음과 같은 목적으로만 이용합니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>회원 관리</strong>: 회원 가입 의사 확인, 연령 확인 및 법정대리인 동의 
                      진행, 본인 확인, 이용자 식별, 회원 탈퇴 의사 확인 등
                    </li>
                    <li>
                      <strong>서비스 제공 및 개선</strong>: 발표 피드백 제공, 발표 모드 및 발음 모드 
                      운영, 사용자 발표 능력 향상을 위한 데이터 분석 및 서비스 개선
                    </li>
                    <li>
                      <strong>마케팅 및 홍보</strong>: 이벤트 정보 제공, 광고성 정보 제공, 맞춤형 
                      서비스 제공
                    </li>
                    <li>
                      <strong>보안 및 안전</strong>: 서비스 이용환경 구축, 계정 도용 및 부정거래 방지, 
                      보안 사고 대응
                    </li>
                    <li><strong>유료 서비스</strong>: 결제 처리, 상품 및 서비스 배송</li>
                    <li>
                      <strong>법령 준수</strong>: 법률 및 이용약관 위반 시 조치, 분쟁 해결을 위한 
                      기록 보존
                    </li>
                  </ul>
                </div>
              </section>

              {/* 섹션 4: 개인정보의 제공 및 위탁 */}
              <section id="section4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. 개인정보의 제공 및 위탁
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 원칙적으로 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 
                    다만, 다음과 같은 경우에는 예외적으로 개인정보를 제공할 수 있습니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>이용자 동의 시</strong>: 외부 제휴사의 서비스를 이용하기 위해 이용자가 직접 동의한 경우</li>
                    <li><strong>법령에 의한 경우</strong>: 관련 법령에 따라 개인정보 제출 의무가 발생한 경우</li>
                    <li><strong>긴급 상황</strong>: 이용자의 생명이나 안전에 급박한 위험이 확인되어 이를 해소하기 위한 경우</li>
                  </ul>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">개인정보의 위탁</h3>
                    <p className="leading-relaxed">
                      회사는 서비스 제공을 위하여 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 
                      위탁받은 업체가 <strong>개인정보 보호법</strong>을 준수하도록 관리 및 감독하고 있습니다.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-gray-800">
                            <th className="px-4 py-2 text-left">수탁업체</th>
                            <th className="px-4 py-2 text-left">위탁업무 내용</th>
                            <th className="px-4 py-2 text-left">보유 및 이용기간</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr>
                            <td className="px-4 py-2">클라우드 서비스 제공업체</td>
                            <td className="px-4 py-2">시스템 개발 및 운영, 데이터 보관</td>
                            <td className="px-4 py-2">회원 탈퇴 시 또는 위탁 계약 종료 시까지</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">CRM 서비스 제공업체</td>
                            <td className="px-4 py-2">고객관계관리 서비스 제공</td>
                            <td className="px-4 py-2">회원 탈퇴 또는 위탁 계약 종료 시까지</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* 섹션 5: 개인정보의 파기 */}
              <section id="section5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. 개인정보의 파기
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 또는 이용목적 달성 시 지체 없이 
                    파기합니다. 다만, 다음과 같은 경우에는 개인정보를 안전하게 보관합니다:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>법령에 의한 정보보관 의무</strong>: 계약 또는 청약철회 기록, 
                      대금결제 기록 등 법령에서 정한 보관기간 동안 보관
                    </li>
                    <li>
                      <strong>이용자 동의</strong>: 이용자가 별도로 동의한 보관기간 동안 개인정보를 보관
                    </li>
                  </ul>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      파기 절차 및 방법
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>전자적 파일 형태</strong>: 복구 및 재생이 불가능하도록 기술적인 방법으로 삭제</li>
                      <li><strong>출력물</strong>: 분쇄 또는 소각 방식으로 파기</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 섹션 6: 이용자 및 법정대리인의 권리와 행사 방법 */}
              <section id="section6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. 이용자 및 법정대리인의 권리와 행사 방법
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있으며, 개인정보 처리의 
                    정지를 요청할 수 있습니다. 또한, 회원 탈퇴를 통해 개인정보 수집 및 이용 동의를 
                    철회할 수 있습니다.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>권리 행사 방법</strong>: '내 정보, 회원정보' 페이지 또는 
                      '문의하기'를 통해 요청
                    </li>
                    <li>
                      <strong>법정대리인 권리</strong>: 만 14세 미만 아동의 경우, 법정대리인이 
                      아동의 개인정보를 조회, 수정, 삭제, 처리정지, 동의 철회할 권리가 있습니다.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 섹션 7: 개인정보보호를 위한 회사의 노력 */}
              <section id="section7">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. 개인정보보호를 위한 회사의 노력
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 이용자의 개인정보를 안전하게 관리하기 위하여 최선을 다하며, 
                    <strong>개인정보 보호법</strong>에서 요구하는 수준 이상으로 개인정보를 보호하고 있습니다.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>내부 관리계획 수립 및 시행</strong>: 개인정보 보호 조직 구성, 
                      내부관리계획 수립 및 정기 점검
                    </li>
                    <li>
                      <strong>접근 통제</strong>: 개인정보 처리시스템에 대한 접근 권한 제한, 
                      침입차단시스템 및 침입탐지시스템 운영
                    </li>
                    <li>
                      <strong>암호화 조치</strong>: 개인정보 저장 및 전송 시 암호화, 
                      암호화 통신을 통한 안전한 송수신
                    </li>
                    <li>
                      <strong>접속기록 관리</strong>: 개인정보취급자의 접속기록 보관 및 위조·변조 방지
                    </li>
                    <li>
                      <strong>보안프로그램 설치 및 갱신</strong>: 최신 백신프로그램을 이용한 보안 강화
                    </li>
                    <li>
                      <strong>물리적 보안 조치</strong>: 외부 접근 통제, 출입통제 절차 운영
                    </li>
                  </ul>
                </div>
              </section>

              {/* 섹션 8: 개인정보 보호책임자 및 담당자 안내 */}
              <section id="section8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. 개인정보 보호책임자 및 담당자 안내
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      개인정보 보호책임자
                    </h3>
                    <ul className="list-none space-y-2">
                      <li>이름: 이소민</li>
                      <li>소속: Cloud Engineering & Security</li>
                      <li>직위: Cloud Engineer</li>
                      <li>전화: 1588-1234</li>
                      <li>이메일: selina@pitching.com</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      기타 개인정보 침해에 대한 신고 및 상담 기관
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>개인정보분쟁조정위원회: www.kopico.go.kr (1833-6972)</li>
                      <li>개인정보침해신고센터: privacy.kisa.or.kr (118)</li>
                      <li>대검찰청: www.spo.go.kr (1301)</li>
                      <li>경찰청: ecrm.police.go.kr (182)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 섹션 9: 개인위치정보의 처리 */}
              <section id="section9">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. 개인위치정보의 처리
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 <strong>위치정보의 보호 및 이용 등에 관한 법률</strong>에 따라 
                    이용자의 개인위치정보를 안전하게 관리합니다.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      개인위치정보의 처리목적 및 보유기간
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>처리목적</strong>: 발표 모드, 화상 회의 등 위치기반 서비스 제공</li>
                      <li><strong>보유기간</strong>: 서비스 이용 기간 동안 또는 이용자가 동의 철회 시까지</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 섹션 10: 본 개인정보처리방침의 적용 범위 */}
              <section id="section10">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. 본 개인정보처리방침의 적용 범위
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    본 개인정보처리방침은 <strong>Pitching (www.pitching.com)</strong> 및 
                    관련 제반 서비스(모바일 웹/앱 포함)에 적용되며, 다른 브랜드로 제공되는 
                    서비스에 대해서는 별개의 개인정보처리방침이 적용될 수 있습니다.
                  </p>
                  <p className="leading-relaxed">
                    Pitching에 링크되어 있는 다른 회사의 웹사이트에서 개인정보를 수집하는 경우, 
                    이용자 동의 하에 개인정보가 제공된 이후에는 본 개인정보처리방침이 적용되지 않습니다.
                  </p>
                </div>
              </section>

              {/* 섹션 11: 개정 전 고지 의무 */}
              <section id="section11">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  11. 개정 전 고지 의무
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 
                    '공지사항'을 통해 사전 공지를 할 것입니다.
                  </p>
                  <p className="leading-relaxed">
                    다만, 수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 이용자 권리의 중대한 
                    변경이 발생할 때에는 최소 30일 전에 공지하며, 필요 시 이용자 동의를 다시 받을 
                    수도 있습니다.
                  </p>
                </div>
              </section>
            </div>

            {/* 문의하기 정보 */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  문의하기: privacy@pitching.com | 전화: 1588-1234
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pitching은(는) 이용자의 개인정보 보호를 최우선으로 생각하며, 
                  이용자의 신뢰를 바탕으로 안전하고 신뢰할 수 있는 서비스를 제공하기 위해 
                  최선을 다하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Privacy; 