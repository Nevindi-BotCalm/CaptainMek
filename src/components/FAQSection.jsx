import { useState } from "react";
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
        "Captain Mek is a revolutionary token designed to bring innovation and excitement to the crypto ecosystem. It combines the power of meme culture with real-world utility, making it an essential token in the growing world of decentralized finance (DeFi). Captain Mek is built on a solid foundation of community-driven growth, strategic partnerships, and exciting features that provide real value for its holders.",
    },
    {
      question: "2. What can I do with $CMEK?",
      answer:
        "$CMEK can be used for a variety of purposes within the Captain Mek ecosystem. You can hold it as a long-term investment, trade it on decentralized exchanges (DEX) and centralized exchanges (CEX), or use it to participate in community-driven events and token-driven incentives. Additionally, $CMEK holders will have access to exclusive rewards, contests, and governance opportunities within the Captain Mek platform.",
    },
    {
      question: "3. What are the benefits of holding $CMEK long-term?",
      answer:
        "Holding $CMEK long-term offers multiple benefits. As the token grows in value and utility, long-term holders can enjoy capital appreciation. Additionally, $CMEK holders will gain early access to exclusive features, product releases, and events within the ecosystem. By holding $CMEK, you’ll also become an integral part of the community, helping to shape the future of the Captain Mek project through governance and voting opportunities.",
    },
    {
      question: "4. What makes Captain Mek different?",
      answer:
        "What sets Captain Mek apart is its unique blend of meme culture, community-driven growth, and tangible utility within the DeFi space. While other tokens may focus solely on hype, Captain Mek is committed to providing real value to its holders. The project prioritizes strategic partnerships, innovative tokenomics, and an inclusive ecosystem that rewards users for being part of its growth. Captain Mek is more than just a meme token; it’s a movement that’s built to last.",
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
          FAQ
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
