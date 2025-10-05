import React from "react";
import Marquee from "react-fast-marquee";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.webp";

function HeroSection() {
  const stripeStyle = {
    position: "absolute",
    width: "200%",
    height: "88px",
    top: "862.46px",
    left: "-50%",
    paddingTop: "30px",
    paddingBottom: "30px",
    gap: "40px",
    transform: "rotate(-0.9deg)",
    opacity: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    fontFamily: "Exo",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "28px",
    textTransform: "uppercase",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    whiteSpace: "nowrap",
  };

  const stripeLgStyle = {
    ...stripeStyle,
    top: "80vh",
    fontSize: "2rem",
    height: "100px",
  };
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-local overflow-x-hidden overflow-y-hidden lg:mt-10"
      style={{ backgroundImage: `url(${image2})` }}
    >
      <img
        src={image3}
        alt="Captain Mek hero"
        className="absolute w-[227px] h-[233px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[588px] lg:h-[604px] rotate-180 mix-blend-luminosity neonRainbow"
      />

      <img
        src={image4}
        alt="Captain Mek hero"
        className="absolute w-[515px] h-[281px] top-[457px] left-[-181px] rotate-0 opacity-100 lg:w-[700px] lg:h-[382px] lg:top-[40%] lg:left-[8%]"
      />

      <img
        src={image6}
        alt="Captain Mek hero"
        className="absolute w-[181px] h-[120px] top-[266px] left-[-57px] -rotate-[9deg] opacity-100 lg:w-[350px] lg:h-[232px] lg:top-[12%] lg:left-[12%] fly"
      />

      <img
        src={image5}
        alt="Captain Mek hero"
        className="absolute w-[240px] h-[315px] top-[414px] left-[188px] rotate-0 opacity-100 lg:w-[350px] lg:h-[418px] lg:top-[30%] lg:right-[5%] lg:left-auto walking"
      />

      <div
        className="absolute w-full"
        style={{
          top: "90%", // moved a bit down from 70%
          transform: "rotate(-0.9deg)",
        }}
      >
        <Marquee className="bg-black py-4 px-2 sm:py-4 sm:bg-black/50">
          {Array.from({ length: 100 }).map((_, index) => (
            <span
              key={index}
              className="flex items-center text-white text-base sm:text-xl font-['Exo'] font-normal uppercase mr-8"
            >
              <img src={image7} alt="" className="inline w-5 h-5 mr-2" />
              BECOME A MEME LEGEND BEFORE LIFTOFF!
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default HeroSection;
