import React, { useState } from "react";
import battle from "../assets/Battle.webp";
import vector1 from "../assets/Vector 1.webp";
import vector2 from "../assets/Vector 2.webp";
import phace1 from "../assets/phace1.webp";
import phace2 from "../assets/phace2.webp";
import phace3 from "../assets/phace3.webp";
import phace4 from "../assets/phace4.webp";
import phace5 from "../assets/phace5.webp";

function BattlePlan() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const phases = [
    { text: "Phase 1: Unite the Legends", image: phace1 },
    { text: "Phase 2: Rise of the Mek Crew", image: phace2 },
    { text: "Phase 3: First Offensive", image: phace3 },
    { text: "Phase 4: Mek’s War Command", image: phace4 },
    { text: "Phase 5: Cosmic Domination", image: phace5 },
  ];

  const nextPhase = () => setCurrentPhase((prev) => (prev + 1) % phases.length);
  const prevPhase = () =>
    setCurrentPhase((prev) => (prev - 1 + phases.length) % phases.length);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextPhase();
    if (isRightSwipe) prevPhase();
  };

  return (
      <div
        className="
      relative w-full max-w-[1920px] mx-auto
      bg-cover bg-center bg-no-repeat
      overflow-hidden opacity-100
      px-4 py-10
      h-[750px] sm:h-[850px] md:min-h-screen
      md:mt-[150px]   xl:mt-[100px] xl:h-[1200px]
    "
        style={{ backgroundImage: `url(${battle})` }}
      >

  
      <div className="relative w-full mx-auto h-[1200px] opacity-100 py-10 px-4">
        <div
          className="flex flex-col items-center justify-center mt-6 md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Title */}
          <h2 className="text-white font-[Halo_Dek] text-[20px] text-center tracking-wide mb-5">
            BATTLE PLAN
          </h2>

          {/* Phase Image */}
          <img
            src={phases[currentPhase].image}
            alt="Phase"
            className="w-[180px] h-[200px] object-contain mb-4"
          />

          {/* Phase Text */}
          <div
            className="bg-[#FEE5A9] border border-gray-300 rounded-[20px] 
                       flex items-center justify-center font-medium px-5 py-3 
                       w-[220px] shadow-md"
            style={{
              filter: "blur(0.5px)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            <span className="bg-gradient-to-b from-[#330051] to-[#506EFF] bg-clip-text text-transparent text-[12px] text-center">
              {phases[currentPhase].text}
            </span>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center space-x-2 mt-3">
            {phases.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentPhase ? "bg-[#506EFF]" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

          {/* Copy Button */}
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "0x71257312753EA7A2570a5a327bE4EA7A2570a5a32"
              )
            }
            className="mt-5 w-[349px] h-[66px] bg-[#1E1E4F] border-[4px] border-[#506EFF] text-white 
                       text-[12px] rounded-[14px] font-[Exo] font-bold flex items-center justify-center gap-2"
          >
            0x71257312753EA7A2570a5a327bE4EA7A2570a5a32
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
          </button>
        </div>

        <div className="hidden md:block">
          <h2
            className="absolute text-white font-[Halo_Dek] text-[36px] lg:text-[74px] leading-[100%]
                       text-center w-[394px] h-[77px] top-[221px] left-[50%] -translate-x-1/2"
          >
            BATTLE PLAN
          </h2>

          {/* Left Vector */}
          <img
            src={vector1}
            alt="Vector 1"
            className="absolute w-[72.94px] h-[87.75px] top-[648px] left-[117px] cursor-pointer"
            onClick={prevPhase}
          />

          {/* Right Vector */}
          <img
            src={vector2}
            alt="Vector 2"
            className="absolute w-[72.94px] h-[87.75px] top-[648px] right-[117px] cursor-pointer"
            onClick={nextPhase}
          />

          {/* Left Phase Card */}
          <div
            className="absolute w-[453px] h-[72px] top-[464px] left-[315px] bg-[#FEE5A9] 
                       border border-gray-300 rounded-[32px] flex items-center justify-center 
                       font-medium px-7 py-5"
            style={{
              filter: "blur(0.5px)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            <span className="bg-gradient-to-b from-[#330051] to-[#506EFF] bg-clip-text text-transparent">
              {phases[currentPhase].text}
            </span>
          </div>

          {/* Right Phase Card */}
          <div
            className="absolute w-[300px] h-[50px] top-[250px] right-[264px] bg-[#FEE5A9] 
                       border border-gray-300 rounded-[32px] flex items-center justify-center 
                       font-medium px-5 py-4"
            style={{
              filter: "blur(0.5px)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            <span className="bg-gradient-to-b from-[#330051] to-[#506EFF] bg-clip-text text-transparent">
              {phases[(currentPhase + 1) % phases.length].text}
            </span>
          </div>

          {/* Left Phase Image */}
          <img
            src={phases[currentPhase].image}
            alt={`Phase ${currentPhase + 1}`}
            className="absolute opacity-100 w-[417px] h-[449px] top-[590px] left-[261px]"
          />

          {/* Right Phase Image */}
          <img
            src={phases[(currentPhase + 1) % phases.length].image}
            alt={`Phase ${((currentPhase + 1) % phases.length) + 1}`}
            className="absolute opacity-100 w-[341px] h-[624px] top-[350px] right-[253px]"
          />

          {/* Desktop Copy Button */}
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "0x71257312753EA7A2570a5a327bE4EA7A2570a5a32"
              )
            }
            className="absolute hidden md:flex w-[1079px] h-[96px] bottom-20 left-1/2 transform -translate-x-1/2 bg-[#1E1E4F] border-[10px] border-[#506EFF] text-white 
                       text-[36px] rounded-[14px] font-[Exo] font-bold leading-[100%] text-center items-center justify-center"
            style={{
              paddingTop: "20px",
              paddingRight: "96px",
              paddingBottom: "20px",
              paddingLeft: "96px",
              gap: "10px",
            }}
          >
            0x71257312753EA7A2570a5a327bE4EA7A2570a5a32
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BattlePlan;
