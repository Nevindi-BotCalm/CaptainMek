import React from "react";
import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";
import AboutSectionResponsive1 from "../assets/AboutSectionResponsive1.webp";
import AboutSectionResponsive2 from "../assets/AboutSectionResponsive2.webp";

function AboutSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image (Desktop) */}
      <img
        src={image8}
        alt="Background"
        className="hidden md:block w-full max-w-[1920px] mx-auto h-[1200px] lg:h-[1440px] object-cover"
      />

      {/* Main Content (Desktop & Laptop) */}
      <div className="hidden md:flex relative justify-between items-start max-w-[1600px] mx-auto px-8 xl:px-20 -mt-[900px] xl:-mt-[1100px]">
        {/* Captain Mek Image */}

        <div className="flex-1 flex justify-center">
          <img
            src={image9}
            alt="Captain Mek Character"
            className="w-[300px]  lg:w-[400px] xl:w-[507px] h-auto object-contain lg:ml-18 mt-[-60px]"
          />
        </div>

        {/* About Text Section */}
        <div className="flex-1 relative">
          <div
            className="font-halo text-black font-normal bg-[url('../assets/bgTexture.webp')] bg-[#D9D9D9] bg-cover bg-center bg-no-repeat 
             inline-block px-2 py-1 text-[48px] lg:text-[64px] mb-6 rotate-[-5deg] -ml-6 lg:-ml-100"
          >
            ABOUT
          </div>

          <div
            className="font-inter font-medium text-black text-[18px] lg:text-[20px] xl:text-[23px] leading-[1.5] max-w-[550px] 
                       rotate-[-6deg] lg:ml-15 mt-[-90px]"
          >
            <p>
              Captain Mek, the First Avenger of meme coins, wields $CMEK as a
              powerful shield, leading the crypto community to turn chaos into
              profit. More than just a meme, it combines internet culture and
              blockchain technology to empower everyday investors.
            </p>
            <br />
            <p>
              The project is built on three key pillars: Mek’s Shield, an
              AI-driven defense against scams and MEV; Mek’s Vault, a staking
              fortress offering high APY; and Mek’s War Room, a precision meme
              coin signal hub to help investors stay ahead.
            </p>
            <br />
            <p>
              No villains, no drama — only heroes, loot, and glory. Grab your
              $CMEK and join the revolution to conquer the memecoin universe!
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden relative">
        <img
          src={AboutSectionResponsive1}
          alt="About Section Mobile 1"
          className="w-full h-auto object-cover relative z-10"
        />
        <img
          src={AboutSectionResponsive2}
          alt="About Section Mobile 2"
          className="w-full h-auto object-cover absolute top-[450px] left-0 z-0"
        />

        <div className="relative z-20 px-4 py-6">
          <h2
            className="font-halo text-[40px] text-black bg-[url('../assets/bgTexture.webp')] bg-[#D9D9D9] bg-cover bg-center 
                       inline-block px-2 py-1 rotate-[-3deg]"
          >
            ABOUT
          </h2>

          <p className="mt-4 font-inter font-medium text-black text-[16px] leading-[1.5] rotate-[-2deg]">
            Captain Mek, the First Avenger of meme coins, wields $CMEK as a
            powerful shield, leading the crypto community to turn chaos into
            profit. The project empowers everyday investors through innovation
            and strategy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
