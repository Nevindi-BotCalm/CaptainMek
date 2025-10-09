import React from "react";
import imageh from "../assets/h.webp";
import imagei from "../assets/i.webp";
import imagej from "../assets/j.webp";
import imagek from "../assets/k.webp";
import crypto from "../assets/crypto.webp";
import gradient from "../assets/gradient.webp";

function HowToBuySection() {
  return (
    <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
      <h2 className="text-4xl md:text-6xl xl:text-7xl font-halo font-bold text-white text-center mb-12 md:mb-16 xl:mb-20">
        HOW TO BUY
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12 2xl:gap-16">
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 2xl:gap-8">
          <img
            src={imageh}
            alt="Step 1"
            className="w-full h-auto object-contain"
          />
          <img
            src={imagei}
            alt="Step 2"
            className="w-full h-auto object-contain"
          />
          <img
            src={imagej}
            alt="Step 3"
            className="w-full h-auto object-contain"
          />
          <img
            src={imagek}
            alt="Step 4"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Mobile crypto image without animation */}
        <div className="w-full lg:hidden flex items-center justify-center mt-8">
          <img
            src={crypto}
            alt="Crypto"
            className="w-full max-w-xs sm:max-w-md h-auto object-contain -rotate-[5deg]"
          />
        </div>

        {/* Large screen crypto image with animation */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center robot-container relative">
          <img
            src={gradient}
            alt="Gradient Background"
            className="absolute inset-0 w-full h-full object-contain z-0 rounded-full lg:animate-swirlPulse"
          />

          <img
            src={crypto}
            alt="Crypto"
            className="relative z-10 w-[705px] max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl h-auto object-contain -rotate-[5deg] lg:animate-fly"
          />
        </div>
      </div>
    </div>
  );
}

export default HowToBuySection;
