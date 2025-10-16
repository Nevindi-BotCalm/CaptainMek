import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FAQ1 from '../assets/FAQ1.webp';
import FAQ2 from '../assets/FAQ2.webp';

function FAQSection() {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState<number | null>(null);

  // Add CSS animations
  const styles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  // Inject styles
  if (
    typeof document !== 'undefined' &&
    !document.getElementById('faq-animations')
  ) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'faq-animations';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const questions = [
    {
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer'),
    },
    {
      question: t('faq.questions.q2.question'),
      answer: t('faq.questions.q2.answer'),
    },
    {
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer'),
    },
    {
      question: t('faq.questions.q4.question'),
      answer: t('faq.questions.q4.answer'),
    },
  ];

  return (
    <section
      className="relative mx-auto w-full max-w-[1920px] overflow-x-hidden bg-cover bg-center bg-no-repeat sm:mt-10 px-4 py-6  md:py-20 lg:min-h-[1150px] lg:py-24"
      style={{ backgroundImage: `url(${FAQ1})` }}
    >
      <div
        className="absolute top-[34px] left-[807px] hidden h-[1084px] w-[1084px] bg-cover bg-center opacity-100 lg:block"
        style={{ backgroundImage: `url(${FAQ2})` }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center lg:items-start">
        <h2 className="font-halo mb-8 w-full text-center text-[36px] leading-tight font-normal text-white sm:mb-12 sm:text-[48px] md:mb-16 md:text-[56px] lg:mb-20 lg:text-left lg:text-[64px] xl:text-[74px]">
          {t('faq.title')}
        </h2>

        {/* FAQ Cards */}
        <div className="mx-auto w-full space-y-4 sm:space-y-5 lg:mx-0 lg:max-w-[794px] lg:space-y-6">
          {questions.map((item, index) => (
            <div
              key={index}
              className="w-full transform-gpu cursor-pointer rounded-2xl border-2 border-gray-200 bg-[#FEE5A9] p-5 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#506EFF] hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:rounded-[32px] scroll-animate"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onClick={() => toggleCard(index)}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className="flex-1 text-center text-sm font-medium transition-all duration-300 sm:text-base md:text-lg"
                  style={{
                    background:
                      'linear-gradient(180deg, #330051 0%, #506EFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 transform-gpu text-lg font-bold text-[#030049] transition-all duration-500 ease-out sm:text-xl md:text-2xl ${
                    openCard === index
                      ? 'scale-110 rotate-180'
                      : 'scale-100 rotate-0'
                  } hover:scale-125`}
                >
                  {openCard === index ? '−' : '+'}
                </span>
              </div>

              <div
                className={`transform-gpu overflow-hidden transition-all duration-500 ease-out ${
                  openCard === index
                    ? 'mt-4 max-h-[1000px] opacity-100 sm:mt-5'
                    : 'mt-0 max-h-0 opacity-0'
                }`}
              >
                <div
                  className={`transition-all delay-100 duration-300 ${
                    openCard === index ? 'translate-y-0' : '-translate-y-2'
                  }`}
                >
                  <p className="text-sm leading-relaxed text-gray-800 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only FAQ images */}
        <div className="relative mt-10 flex w-full flex-col items-center lg:hidden">
          <img
            src={FAQ1}
            alt="FAQ Background"
            className="h-auto w-full rounded-2xl object-cover"
          />
          <img
            src={FAQ2}
            alt="FAQ Overlay"
            className="absolute top-1/2 left-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-90 sm:w-[400px] md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
