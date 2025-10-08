// import React, { useState } from "react";
// import FAQ1 from "../assets/FAQ1.webp";
// import FAQ2 from "../assets/FAQ2.webp";

// function FAQSection() {
//   const [openCard, setOpenCard] = useState(null);

//   const toggleCard = (index) => {
//     setOpenCard(openCard === index ? null : index);
//   };

//   const questions = [
//     { question: "1.What is Captain Mek?", answer: "Captain Mek is..." },
//     { question: "2. What can I do with $CMEK?", answer: "It works by..." },
//     {
//       question: "3. What are the benefits of holding $CMEK long-term?",
//       answer: "Yes, it is...",
//     },
//     {
//       question: "4. What makes Captain Mek different?",
//       answer: "You can start by...",
//     },
//   ];

//   return (
//     <div
//       className="relative w-[1920px] h-[1150px] bg-cover bg-center bg-no-repeat opacity-100
//       max-md:w-[1434px] max-md:h-[859px] max-md:relative max-md:top-[6884px] max-md:left-[-596px]"
//       style={{ backgroundImage: `url(${FAQ1})` }}
//     >
//       <div
//         className="absolute bg-cover opacity-100 w-[1084px] h-[1084px] top-[34px] left-[807px]
//         max-md:w-[852px] max-md:h-[852px] max-md:top-[7566px] max-md:left-[-231px]"
//         style={{ backgroundImage: `url(${FAQ2})` }}
//       ></div>

//       <div
//         className="absolute top-[50px] left-[190px] w-[113px] h-[77px] flex items-center justify-center text-center
//   font-[Halo_Dek] font-normal text-[74px] leading-[100%] tracking-[0%] opacity-100"
//       >
//         FAQ
//       </div>

//       <div className="absolute top-[200px] left-[100px] space-y-4">
//         {questions.map((item, index) => (
//           <div
//             key={index}
//             className="w-[794px] border border-gray-300 rounded-[32px] cursor-pointer"
//             style={{
//               backgroundColor: "#FEE5A9",
//               minHeight: "72px",
//               padding: "20px 28px",
//             }}
//             onClick={() => toggleCard(index)}
//           >
//             <div className="flex justify-between items-center">
//               <span
//                 className="font-medium text-transparent bg-clip-text"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, #330051 0%, #506EFF 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {item.question}
//               </span>
//               <span className="text-xl">{openCard === index ? "-" : "+"}</span>
//             </div>
//             {openCard === index && (
//               <div className="mt-4 text-gray-700">{item.answer}</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FAQSection;

import React, { useState } from "react";
import FAQ1 from "../assets/FAQ1.webp";
import FAQ2 from "../assets/FAQ2.webp";

function FAQSection() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const questions = [
    { question: "1. What is Captain Mek?", answer: "Captain Mek is..." },
    { question: "2. What can I do with $CMEK?", answer: "It works by..." },
    {
      question: "3. What are the benefits of holding $CMEK long-term?",
      answer: "Yes, it is...",
    },
    {
      question: "4. What makes Captain Mek different?",
      answer: "You can start by...",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundImage: `url(${FAQ1})` }}
    >
      {/* Decorative background image */}
      <div
        className="absolute w-[1084px] h-[1084px] top-[34px] left-[807px]
        max-md:w-[852px] max-md:h-[852px] max-md:top-[682px] max-md:left-[-231px]
        bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${FAQ2})` }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* FAQ Title */}
        <h2
          className="font-[Halo_Dek] font-normal text-[36px] lg:text-[74px] 
          leading-[100%] mb-8 sm:mb-12 md:mb-16 lg:mb-20
          text-center lg:text-left px-2 sm:px-4"
        >
          FAQ
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-3 sm:space-y-4 px-2 sm:px-4 max-w-full lg:max-w-[794px]">
          {questions.map((item, index) => (
            <div
              key={index}
              className="w-full border border-gray-300 rounded-2xl sm:rounded-3xl lg:rounded-[32px] cursor-pointer transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "#FEE5A9",
                minHeight: "60px",
                padding: "16px 20px",
              }}
              onClick={() => toggleCard(index)}
            >
              <div className="flex justify-between items-center gap-4">
                <span
                  className="font-medium text-sm sm:text-base md:text-lg bg-clip-text flex-1"
                  style={{
                    background:
                      "linear-gradient(180deg, #330051 0%, #506EFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.question}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
                  {openCard === index ? "−" : "+"}
                </span>
              </div>
              {openCard === index && (
                <div className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base transition-all duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
