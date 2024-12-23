import React, { useEffect } from 'react';

const Terms = () => {
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
          { id: 'section1', title: '1. 약관의 목적 및 적용 범위' },
          { id: 'section2', title: '2. 용어의 정의' },
          { id: 'section3', title: '3. 서비스 이용 계약의 체결' },
          { id: 'section4', title: '4. 회원 가입 및 관리' },
          { id: 'section5', title: '5. 서비스 제공 및 변경' },
          { id: 'section6', title: '6. 서비스 이용료 및 결제' },
          { id: 'section7', title: '7. 이용자의 의무' },
          { id: 'section8', title: '8. 게시물의 관리' },
          { id: 'section9', title: '9. 저작권 및 지식재산권' },
          { id: 'section10', title: '10. 개인정보 보호' },
          { id: 'section11', title: '11. 서비스 이용의 제한 및 계약 해지' },
          { id: 'section12', title: '12. 손해배상' },
          { id: 'section13', title: '13. 면책 조항' },
          { id: 'section14', title: '14. 분쟁 해결' },
          { id: 'section15', title: '15. 약관의 개정' },
          { id: 'section16', title: '16. 기타' },
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
            Pitching 서비스 이용약관
          </h1>

          <div className="bg-white dark:bg-[#2b2d31] rounded-lg shadow-lg p-6 mb-8">
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
              <p>공고일자: 2024년 12월 19일</p>
              <p>적용일자: 2024년 12월 23일</p>
            </div>

            {/* 환영 메시지 */}
            <div className="text-gray-700 dark:text-gray-300 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                여러분을 환영합니다.
              </h2>
              <p className="leading-relaxed">
                Pitching 서비스를 이용해 주셔서 감사합니다. Pitching은 여러분이 발표에 대한 
                두려움을 극복하고, 발표 행동, 자세, 발음 교정 등 전반적인 발표 능력을 향상시키기 
                위해 다양한 기능을 제공하는 서비스 플랫폼입니다. 본 약관은 Pitching 서비스의 
                이용과 관련하여 Pitching과 이를 이용하는 회원 및 비회원 간의 관계를 설명하며, 
                여러분의 Pitching 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
              </p>
            </div>

            {/* 목차 */}
            <TableOfContents />

            {/* 각 섹션 내용 */}
            <div className="space-y-12">
              {/* 섹션 1: 약관의 목적 및 적용 범위 */}
              <section id="section1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. 약관의 목적 및 적용 범위
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    본 약관은 Pitching(이하 '회사' 또는 '서비스')이 제공하는 Pitching 서비스의 
                    이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 
                    합니다. 본 약관은 Pitching 서비스의 모든 회원 및 비회원에게 적용됩니다.
                  </p>
                </div>
              </section>

              {/* 섹션 2: 용어의 정의 */}
              <section id="section2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. 용어의 정의
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>서비스</strong>: 회사가 제공하는 모든 온라인 플랫폼 및 관련 서비스를 의미합니다.</li>
                    <li><strong>회원</strong>: 본 약관에 동의하고 회원가입을 완료한 자를 말합니다.</li>
                    <li><strong>비회원</strong>: 회원가입을 하지 않고 서비스를 이용하는 자를 말합니다.</li>
                    <li><strong>게시물</strong>: 회원이 서비스 내에 게시한 모든 콘텐츠를 의미합니다.</li>
                  </ul>
                </div>
              </section>

              {/* 섹션 3: 서비스 이용 계약의 체결 */}
              <section id="section3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. 서비스 이용 계약의 체결
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    이용계약은 회원이 되고자 하는 자가 본 약관에 동의하고 회원가입을 신청한 후, 
                    회사가 이를 승낙함으로써 성립됩니다. 회사는 다음 각 호에 해당하는 신청에 
                    대하여는 승낙을 하지 않을 수 있습니다.
                  </p>
                  <ul className="list-decimal pl-6 space-y-2">
                    <li>실명이 아니거나 타인의 명의를 이용하여 신청한 경우</li>
                    <li>이용 신청 시 필요 내용을 허위로 기재한 경우</li>
                    <li>타인 회원으로 등록하는 것이 회사의 서비스 운영에 현저히 지장이 있다고 판단되는 경우</li>
                  </ul>
                </div>
              </section>

              {/* 섹션 4-6 추가 */}
              <section id="section4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. 회원 가입 및 관리
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회원 가입은 서비스 이용을 희망하는 자가 본 약관에 동의하고 회원정보를 기입하여 
                    가입을 신청한 후, 회사의 승낙을 받아 성립됩니다.
                  </p>
                  <ul className="list-decimal pl-6 space-y-2">
                    <li>가입 신청자가 만 14세 미만인 경우 (법정 대리인의 동의가 있는 경우 제외)</li>
                    <li>실명이 아니거나 타인의 명의를 이용하여 신청한 경우</li>
                    <li>이용 신청 시 필요 내용을 허위로 기재한 경우</li>
                    <li>기타 회원으로 등록하는 것이 회사의 서비스 운영에 현저히 지장이 있다고 판단되는 경우</li>
                  </ul>
                </div>
              </section>

              <section id="section5">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. 서비스 제공 및 변경
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">회사는 회원에게 다음과 같은 서비스를 제공합니다:</p>
                  <ul className="list-decimal pl-6 space-y-2">
                    <li>발표 행동, 자세, 발음 교정 등 발표 능력 향상을 위한 피드백 제공</li>
                    <li>발표 모드, 발음 모드, 화상 회의, 채팅, 발표 관련 칼럼 제공</li>
                    <li>기타 회사가 정하는 서비스</li>
                  </ul>
                </div>
              </section>

              <section id="section6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. 서비스 이용료 및 결제
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    현재 서비스는 무료로 제공되지만 나중에 기능이 추가되면서 유료화 될 수 있으며, 이에 대한 이용료는 서비스 내에 명시된 
                    바에 따릅니다. 유료화 시점부터 이용자는 이용료를 결제함으로써 서비스를 이용할 수 있으며, 
                    결제 방식은 회사가 정하는 바에 따릅니다.
                  </p>
                </div>
              </section>

              <section id="section7">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. 이용자의 의무
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">이용자는 다음 행위를 하여서는 안 됩니다:</p>
                  <ul className="list-decimal pl-6 space-y-2">
                    <li>신청 또는 변경 시 허위 내용의 등록</li>
                    <li>타인의 정보 도용</li>
                    <li>회사가 게시한 정보의 변경</li>
                    <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                    <li>회사 및 기타 제3자의 저작권 등 지식재산권에 대한 침해</li>
                    <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                    <li>외설적이거나 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                    <li>기타 불법적이거나 부당한 행위</li>
                  </ul>
                </div>
              </section>

              <section id="section8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. 게시물의 관리
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 회원이 게시한 게시물이 본 약관 및 관련 법령을 위반하거나 공공질서 및 
                    미풍양속에 반한다고 판단되는 경우, 사전 통지 없이 게시물을 삭제하거나 게시물의 
                    게시를 제한할 수 있습니다.
                  </p>
                  <p className="leading-relaxed">
                    회원은 자신의 게시물이 타인의 권리를 침해하거나 법령에 위반된다고 판단될 경우, 
                    사전 동의 없이 해당 게시물을 삭제하거나 비공개로 전환할 수 있습니다. 
                    단, 회사는 이를 강제할 수 없습니다.
                  </p>
                </div>
              </section>

              <section id="section9">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. 저작권 및 지식재산권
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사의 서비스에 포함된 모든 콘텐츠의 저작권 및 지식재산권은 회사에 귀속됩니다. 
                    이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 동의 없이 복제, 전송, 
                    출판, 배포, 방송 기타 방법으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                  </p>
                  <p className="leading-relaxed">
                    회원이 게시한 게시물의 저작권은 게시자에게 귀속되며, 회사는 서비스의 제공을 
                    위하여 필요한 범위 내에서 이를 이용할 수 있는 권리를 가집니다.
                  </p>
                </div>
              </section>

              <section id="section10">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. 개인정보 보호
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 이용자의 개인정보를 보호하기 위하여 개인정보 보호법 등 관련 법령을 
                    준수하며, 개인정보 처리방침에 따라 안전하게 관리합니다. 이용자는 자신의 
                    개인정보에 대해 언제든지 열람, 수정, 삭제를 요청할 수 있으며, 개인정보 
                    보호책임자에게 문의할 수 있습니다.
                  </p>
                </div>
              </section>

              <section id="section11">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  11. 서비스 이용의 제한 및 계약 해지
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 다음 각 호에 해당하는 경우 이용자의 서비스 이용을 제한하거나 계약을 
                    해지할 수 있습니다:
                  </p>
                  <ul className="list-decimal pl-6 space-y-2">
                    <li>본 약관을 위반한 경우</li>
                    <li>서비스의 원활한 운영을 방해한 경우</li>
                    <li>타인의 권리를 침해하거나 공공질서 및 미풍양속에 반하는 게시물을 게시한 경우</li>
                    <li>기타 회사가 서비스 이용을 제한할 필요가 있다고 판단되는 경우</li>
                  </ul>
                </div>
              </section>

              <section id="section12">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  12. 손해배상
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 회사의 고의 또는 중과실로 인해 이용자에게 손해를 입힌 경우 이를 배상할 
                    책임을 집니다. 다만, 천재지변 또는 불가항력적인 사유로 인한 손해, 이용자의 
                    고의 또는 과실로 인한 손해에 대해서는 책임을 지지 않습니다.
                  </p>
                </div>
              </section>

              <section id="section13">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  13. 면책 조항
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 서비스의 제공과 관련하여 이용자에게 발생한 손해에 대해 책임을 지지 
                    않습니다. 또한, 회사는 서비스의 안정적인 운영을 위해 최선을 다하고 있으나, 
                    시스템의 오류, 해킹, 바이러스 등으로 인한 손해에 대해서는 책임을 지지 않습니다.
                  </p>
                </div>
              </section>

              <section id="section14">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  14. 분쟁 해결
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    본 약관과 서비스 이용에 관련하여 발생한 분쟁에 대하여는 대한민국의 법률을 
                    준거법으로 하며, 분쟁의 해결은 대한민국 서울중앙지방법원을 전속관할 법원으로 합니다.
                  </p>
                </div>
              </section>

              <section id="section15">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  15. 약관의 개정
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    회사는 본 약관을 변경할 수 있으며, 변경 시 최소 7일 전에 서비스 내 공지사항을 
                    통해 공지합니다. 다만, 이용자의 권리나 의무에 중대한 영향을 미치는 변경의 경우 
                    최소 30일 전에 공지하고, 필요한 경우 별도의 동의를 받습니다.
                  </p>
                  <p className="leading-relaxed">
                    변경된 약관은 공지한 날로부터 효력이 발생합니다. 이용자가 변경된 약관에 
                    동의하지 않을 경우, 서비스 이용 계약을 해지할 수 있습니다.
                  </p>
                </div>
              </section>

              <section id="section16">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  16. 기타
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    본 약관에서 정하지 않은 사항에 대하여는 전자상거래 등에서의 소비자보호에 관한 법률, 
                    정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령에 따릅니다.
                  </p>
                </div>
              </section>
            </div>

            {/* 문의하기 정보 */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  문의하기: support@pitching.com | 전화: 1588-1234
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pitching은(는) 여러분의 신뢰를 바탕으로 안전하고 신뢰할 수 있는 서비스를 
                  제공하기 위해 최선을 다하고 있습니다. 이용약관에 대한 문의사항이나 의견이 
                  있으시면 언제든지 고객센터로 연락 주시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Terms; 