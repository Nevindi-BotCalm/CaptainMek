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

  const phases = [
    { text: "Phase 1: Unite the Legends", image: phace1 },
    { text: "Phase 2: Rise of the Mek Crew", image: phace2 },
    { text: "Phase 3: First Offensive", image: phace3 },
    { text: "Phase 4: Mek’s War Command", image: phace4 },
    { text: "Phase 5: Cosmic Domination", image: phace5 },
  ];

  const nextPhase = () => {
    setCurrentPhase((prev) => (prev + 1) % phases.length);
  };

  const prevPhase = () => {
    setCurrentPhase((prev) => (prev - 1 + phases.length) % phases.length);
  };

  return (
    <div
      className="relative w-full max-w-[1920px] mx-auto min-h-screen bg-cover bg-center bg-no-repeat 
                 py-10 px-4 overflow-x-hidden opacity-100 mt-[-100px] md:mt-[-200px] xl:top-[300px] xl:h-[1200px]"
      style={{ backgroundImage: `url(${battle})` }}
    >
      {/* Title */}
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
        className="absolute w-[72.94px] h-[87.75px] top-[648px] left-[117px] opacity-100 
                   border-[9px] border-transparent cursor-pointer"
        onClick={prevPhase}
      />

      {/* Right Vector */}
      <img
        src={vector2}
        alt="Vector 2"
        className="absolute w-[72.94px] h-[87.75px] top-[648px] right-[117px] opacity-100 
                   border-[9px] border-transparent cursor-pointer"
        onClick={nextPhase}
      />

      {/* Left Phase Card */}
      <div
        className="absolute w-[453px] h-[72px] top-[464px] left-[315px] bg-[#FEE5A9] 
                   border border-gray-300 rounded-[32px] flex items-center justify-center 
                   font-medium px-7 py-5"
        style={{ filter: "blur(0.5px)", boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
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
        style={{ filter: "blur(0.5px)", boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
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
    </div>
  );
}

export default BattlePlan;
