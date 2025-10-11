import React from "react";
import Marquee from "react-fast-marquee";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";

function HeroSection() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <img
        src={image2}
        alt="Captain Mek background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      />

      <img
        src={image3}
        alt="Captain Mek hero"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[350px] md:h-[350px] 
                   lg:w-[588px] lg:h-[604px] rotate-180 mix-blend-luminosity neonRainbow"
      />

      <img
        src={image4}
        alt="Captain Mek wave"
        className="absolute 
                   w-[240px] h-[140px] top-[65%] left-[-60px]
                   sm:w-[300px] sm:h-[180px] sm:left-[-80px]
                   md:w-[400px] md:h-[220px] md:left-[-120px]
                   lg:w-[700px] lg:h-[382px] lg:top-[40%] lg:left-[8%]"
      />

      <img
        src={image6}
        alt="Captain Mek fly"
        className="absolute 
                   w-[100px] h-[70px] top-[15%] left-[-20px] -rotate-[8deg]
                   sm:w-[150px] sm:h-[100px] sm:left-[0]
                   md:w-[220px] md:h-[150px] md:left-[5%]
                   lg:w-[350px] lg:h-[232px] lg:top-[12%] lg:left-[12%] fly"
      />

      <img
        src={image5}
        alt="Captain Mek walking"
        className="absolute  w-[140px] h-[180px] top-[65%] left-[55%] sm:w-[180px] sm:h-[230px] md:w-[250px] md:h-[300px md:left-[70%]
                   lg:w-[350px] lg:h-[418px] lg:top-[30%] lg:right-[5%] lg:left-auto walking"
      />

      <div className="absolute w-full rotate-[-1deg] bottom-0">
        <Marquee className="bg-black/60 py-3 sm:py-4">
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="flex items-center text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-xl font-['Exo'] font-normal uppercase mr-6 sm:mr-8"
            >
              <img
                src={image7}
                alt=""
                className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2"
              />
              BECOME A MEME LEGEND BEFORE LIFTOFF!
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default HeroSection;
