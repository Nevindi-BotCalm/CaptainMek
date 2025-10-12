import image8 from "../assets/image8.webp";
import image9 from "../assets/image9.webp";
import AboutSectionResponsive1 from "../assets/AboutSectionResponsive1.webp";
import AboutSectionResponsive2 from "../assets/AboutSectionResponsive2.webp";

function AboutSection() {
  return (
    <div id="about" className="relative w-full">
      {/* Background Image (Desktop) */}
      <img
        src={image8}
        alt="Background"
        className="hidden sm:hidden md:block w-full max-w-[1920px] mx-auto lg:h-[1440px] object-cover"
      />

      {/* Main Content (Desktop & Laptop) */}
      <div className="hidden md:flex relative justify-between items-start max-w-[1600px] mx-auto px-8 xl:px-20 -mt-[900px] xl:-mt-[1100px] ">
        {/* Captain Mek Image */}

        <div className="flex-1 flex justify-center items-start">
          <img
            src={image9}
            alt="Captain Mek Character"
            className="w-[300px] sm:w-[350px]  xl:w-[487px] h-auto object-contain mt-[-60px] -ml-4 sm:-ml-6 lg:-ml-20 xl:ml-20 2xl:ml-35 animate-captainmek md:mt-110 xl:mt-[-30px] md:w-[200px] lg:mt-[-230px] lg:w-[500px]
          md:ml-30"
          />
        </div>

        {/* About Text Section */}
        <div className="flex-1 relative lg:mt-[-200px] xl:mt-[1px] md:mt-[500px] ">
          <div
            className="font-halo text-black font-normal bg-[#d9d9d9] bg-cover bg-center bg-no-repeat
  inline-block px-8 py-2 text-[48px] lg:text-[64px] mb-6 rotate-[-5deg] shadow-lg 
  relative left-1000 lg:left-[-600px] xl:left-[-600px] lg:ml-[200px]  "
          >
            ABOUT
          </div>

          <div
            className="font-inter font-medium text-black text-[18px] lg:text-[20px] xl:text-[23px] leading-[1.5] max-w-[550px] 
                       rotate-[-6deg] lg:ml-15 mt-[-90px] md:mt-[-150px] md:ml-5 "
          >
            <p className="md:text-[10px] md:max-w-60 lg:text-[20px] lg:max-w-700 lg:mt-10 xl:text-[23px]" >
              Captain Mek, the First Avenger of meme coins, wields $CMEK as a
              powerful shield, leading the crypto community to turn chaos into
              profit. More than just a meme, it combines internet culture and
              blockchain technology to empower everyday investors.
            </p>
            <br />
            <p className="md:text-[10px] md:max-w-60 md:mt-[-20px] lg:text-[20px] lg:max-w-700 xl:text-[23px] ">
              The project is built on three key pillars: Mek’s Shield, an
              AI-driven defense against scams and MEV; Mek’s Vault, a staking
              fortress offering high APY; and Mek’s War Room, a precision meme
              coin signal hub to help investors stay ahead.
            </p>
            <br />
            <p className="md:text-[10px] md:max-w-60 md:mt-[-20px] lg:text-[20px] lg:max-w-700 xl:text-[23px]">
              No villains, no drama — only heroes, loot, and glory. Grab your
              $CMEK and join the revolution to conquer the memecoin universe!
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout
      <div className="block md:hidden">
        <img
          src={AboutSectionResponsive1}
          alt="About Section Mobile 1"
          className="w-full h-auto object-cover"
        />
        <img
          src={AboutSectionResponsive2}
          alt="About Section Mobile 2"
          className="w-full h-auto object-cover mt-[-120px]"
        />
      </div> */}

      {/* Mobile Layout */}
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
          className="w-full h-auto object-cover mt-[-170px] z-0"
        />
      </div>
    </div>
  );
}

export default AboutSection;
