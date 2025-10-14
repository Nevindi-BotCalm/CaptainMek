import { useState } from "react";
import { useTranslation } from 'react-i18next';
import FAQ1 from "../assets/FAQ1.webp";
import FAQ2 from "../assets/FAQ2.webp";

function FAQSection() {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
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
      className="relative w-full max-w-[1920px] mx-auto bg-cover bg-center bg-no-repeat overflow-x-hidden py-12 px-4 sm:py-16 md:py-20 lg:py-24 lg:min-h-[1150px] mt-20"
      style={{ backgroundImage: `url(${FAQ1})` }}
    >
      <div
        className="absolute hidden lg:block w-[1084px] h-[1084px] top-[34px] left-[807px]
        bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${FAQ2})` }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center lg:items-start">
        <h2
          className="font-halo font-normal text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[74px]
          leading-tight mb-8 sm:mb-12 md:mb-16 lg:mb-20
          text-center lg:text-left text-white w-full"
        >
          {t('faq.title')}
        </h2>

        {/* FAQ Cards */}
        <div className="w-full lg:max-w-[794px] space-y-4 sm:space-y-5 lg:space-y-6 mx-auto lg:mx-0">
          {questions.map((item, index) => (
            <div
              key={index}
              className="w-full border-2 border-gray-200 rounded-2xl sm:rounded-3xl lg:rounded-[32px] 
              cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-[1.02] bg-[#FEE5A9] p-5 sm:p-6"
              onClick={() => toggleCard(index)}
            >
              <div className="flex justify-between items-center gap-4">
                <span
                  className="font-medium text-sm sm:text-base md:text-lg flex-1 text-center"
                  style={{
                    background:
                      "linear-gradient(180deg, #330051 0%, #506EFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.question}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0 text-[#030049] transition-transform duration-300 hover:rotate-[360deg]">
                  {openCard === index ? "−" : "+"}
                </span>
              </div>

              <div
                className={`overflow-hidden ${
                  openCard === index
                    ? "max-h-[1000px] mt-4 sm:mt-5 transition-all duration-300 ease-out"
                    : "max-h-0 transition-all duration-700 ease-in"
                }`}
              >
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only FAQ images */}
        <div className="mt-10 w-full flex flex-col items-center lg:hidden relative">
          <img
            src={FAQ1}
            alt="FAQ Background"
            className="w-full h-auto object-cover rounded-2xl"
          />
          <img
            src={FAQ2}
            alt="FAQ Overlay"
            className="absolute w-[300px] sm:w-[400px] md:w-[500px] 
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

export default FAQSection;