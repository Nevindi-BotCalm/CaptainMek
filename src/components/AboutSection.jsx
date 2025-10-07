import React from "react";
import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";
import AboutSectionResponsive1 from "../assets/AboutSectionResponsive1.webp";
import AboutSectionResponsive2 from "../assets/AboutSectionResponsive2.webp";

function AboutSection() {
  return (
    <div className="relative w-full h-auto">
      {/* Desktop Images */}
      <img
        src={image8}
        alt="Full Image"
        className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[800px] sm:h-[1000px] md:h-[1200px] lg:h-[1441px] object-cover opacity-100"
      />

      <img
        src={image9}
        alt="Captain Mek Character"
        className="hidden md:block absolute left-[210px] top-[278px] w-[507px] h-[707px] object-contain opacity-100 rotate-0"
      />
      {/* Responsive Images */}
      <div className="block md:hidden relative">
        {/* Image 2 – goes behind & slightly lower */}
        <img
          src={AboutSectionResponsive2}
          alt="About Section Mobile 2"
          className="w-full h-auto object-cover absolute top-[450px] left-0 z-0"
        />

        {/* Image 1 – stays in front */}
        <img
          src={AboutSectionResponsive1}
          alt="About Section Mobile 1"
          className="w-full h-auto object-cover relative z-10"
        />
      </div>

      {/* Text Section */}
      <div className="about-section-para absolute left-[800px] top-[325px] w-[560px] h-[510px] p-3 font-inter font-medium text-black text-[25px] leading-[1.4] rotate-[-7.5deg] opacity-100 hidden md:block">
        <p>
          Captain Mek the First Avenger of meme coins wields $CMEK as a powerful
          shield, leading the crypto community to turn chaos into profit. More
          than just a meme, it combines internet culture and blockchain
          technology to empower everyday investors.
          <br />
          <br />
          The project is built on three key pillars: Mek’s Shield, an AI-driven
          defense against scams and MEV; Mek’s Vault, a staking fortress
          offering high APY; and Mek’s War Room, a precision meme coin signal
          hub to help investors stay ahead.
          <br />
          <br />
          No villains, no drama only heroes, loot, and glory. Grab your $CMEK
          and join the revolution to conquer the memecoin universe!k
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
