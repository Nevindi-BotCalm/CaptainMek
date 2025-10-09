import React, { useState } from "react";
import FAQ1 from "../assets/FAQ1.webp";
import FAQ2 from "../assets/FAQ2.webp";

function FAQSection() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const questions = [
    {
      question: "1. What is Captain Mek?",
      answer:
        "Captain Mek is a meme-based entertainment and digital community project that blends humor, creativity, and web culture. It’s designed to spread good vibes through memes, content creation, and community-driven fun — while also exploring the world of digital engagement and future token utilities.",
    },
    {
      question: "2. What can I do with $CMEK?",
      answer:
        "$CMEK is the symbolic energy of the Captain Mek universe. It can be used to unlock community perks, participate in exclusive content drops, access NFT rewards, and vote in creative community decisions. Think of it as your digital ticket to the Mek multiverse!",
    },
    {
      question: "3. What are the benefits of holding $CMEK long-term?",
      answer:
        "Holding $CMEK means you’re part of the early crew. Long-term holders may get access to exclusive events, limited-edition meme NFTs, partnership giveaways, and priority in future ecosystem expansions — plus, you help shape the Captain Mek community as it grows.",
    },
    {
      question: "4. What makes Captain Mek different?",
      answer:
        "Captain Mek isn’t just another meme project — it’s a creative movement. While others chase trends, we build a universe around humor, art, and storytelling. Every meme, character, and interaction connects to the larger Captain Mek experience — made by the people, for the people.",
    },
  ];

  return (
    <div
      className="relative w-full max-w-[1920px] mx-auto bg-cover bg-center bg-no-repeat overflow-x-hidden py-12 px-4 sm:py-16 md:py-20 lg:py-20 lg:h-[1150px] mt-90"


      style={{ backgroundImage: `url(${FAQ1})` }}
    >
      {/* Desktop background image (FAQ2) */}
      <div
        className="absolute hidden lg:block w-[1084px] h-[1084px] top-[34px] left-[807px]
        bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${FAQ2})` }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center lg:items-start">
        {/* FAQ Title */}
        <h2
          className="font-[Halo_Dek] font-normal text-[36px] lg:text-[74px]
          leading-[100%] mb-8 sm:mb-12 md:mb-16 lg:mb-20
          text-center lg:text-left text-[#ffffff] w-full"
        >
          FAQ
        </h2>

        {/* FAQ Cards */}
        <div className="w-full lg:max-w-[794px] space-y-3 sm:space-y-4 lg:space-y-6 mx-auto lg:mx-[-0px]">
          {questions.map((item, index) => (
            <div
              key={index}
              className="w-full border border-gray-300 rounded-2xl sm:rounded-3xl lg:rounded-[32px] 
              cursor-pointer transition-all duration-300 hover:shadow-lg bg-[#FEE5A9] p-4 sm:p-5"
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
                <span className="text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0 text-[#030049]">
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

        {/* Mobile-only FAQ images */}
        <div className="mt-10 w-full flex flex-col items-center lg:hidden relative">
          {/* FAQ1 Image */}
          <img
            src={FAQ1}
            alt="FAQ Background"
            className="w-full h-auto object-cover rounded-2xl"
          />
          {/* FAQ2 Image overlay */}
          <img
            src={FAQ2}
            alt="FAQ Overlay"
            className="absolute w-[300px] sm:w-[400px] md:w-[500px] 
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"
          />
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
