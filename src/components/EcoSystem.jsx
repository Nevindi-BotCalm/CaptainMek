import { useTranslation } from "react-i18next";
import image10 from "../assets/image10.webp";
import image11 from "../assets/image11.webp";
import image12 from "../assets/image12.webp";
import image13 from "../assets/image13.webp";

function EcoSystem() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full overflow-visible select-none  xl:mt-150 lg:mt-100 md:mt-60  ">
      {/* Desktop Layout */}
      <div className="hidden md:block relative w-full max-w-7xl mx-auto px-4 xl:max-w-none xl:overflow-visible">
        <div className="mb-2 text-center md:text-left">
          <h2 className="font-halo font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight select-none whitespace-pre-line " >
            {t("ecosystem.title")}
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-auto min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:max-w-none xl:w-screen xl:min-h-[800px] xl:overflow-visible xl:left-1/2 xl:-translate-x-1/2">
          <div className="relative">
            {/* Character Image */}
            <img
              src={image13}
              alt="Card 13"
              className="absolute w-1/2 md:w-2/5 lg:w-1/3 max-w-md h-auto top-4 md:top-8 left-0 animate-recoil xl:left-20"
            />

            <div className="absolute top-1/4 left-2/5 w-8 md:w-12 lg:w-20 h-8 md:h-12 lg:h-20 bg-yellow animate-starblast"></div>

            <div className="absolute top-1/4 left-2/5 w-1 md:w-2 h-1 md:h-2 bg-orange-500 rounded-full animate-sparks"></div>

            <div className="absolute top-1/4 left-2/5 w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12 bg-gradient-to-t from-gray-400/70 to-transparent rounded-full blur-2xl opacity-70 animate-realSmoke"></div>
          </div>

          <div className="absolute w-1/5 md:w-1/4 lg:w-1/5 top-1/4 left-2/5 group cursor-pointer xl:w-[374.5px] xl:h-[552px] xl:top-[200px] xl:left-[500px] hover:z-10">
            <img
              src={image10}
              alt="Card 10"
              className="w-full h-auto transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm md:text-base lg:text-lg xl:text-xl opacity-100 group-hover:opacity-0 transition-all duration-300">
              <div className="text-center px-2">
                {t("ecosystem.warRoom.title")
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
              </div>
            </div>
            <div className="absolute inset-0 rotate-[5.64deg] navitems font-normal text-[10px] md:text-xs xl:text-sm leading-3 md:leading-4 flex items-center justify-center p-1 md:p-2 text-left text-black opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-full">
                <strong>{t("ecosystem.warRoom.threatRadar")}</strong>{" "}
                {t("ecosystem.warRoom.threatRadarDesc")}
                <br />
                <strong>{t("ecosystem.warRoom.swapStrike")}</strong>{" "}
                {t("ecosystem.warRoom.swapStrikeDesc")}
                <br />
                <strong>{t("ecosystem.warRoom.antiMev")}</strong>{" "}
                {t("ecosystem.warRoom.antiMevDesc")}
              </div>
            </div>
          </div>

          <div className="absolute w-1/4 md:w-1/3 lg:w-1/4 top-4 md:top-8 left-1/2 md:left-3/5 group cursor-pointer xl:w-[450px] xl:h-[600px] xl:top-[120px] xl:left-[800px] hover:z-10">
            <img
              src={image11}
              alt="Card 11"
              className="w-full h-auto transition-all duration-300 group-hover:scale-110 mt-[-90px]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm md:text-base lg:text-lg xl:text-xl opacity-100 group-hover:opacity-0 transition-all duration-300">
              <div className="text-center px-2">
                {t("ecosystem.starksVault.title")
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
              </div>
            </div>
            <div className="absolute inset-0 -rotate-[3.07deg] navitems font-normal text-[10px] md:text-xs xl:text-sm leading-3 md:leading-4 flex items-center justify-center p-1 md:p-2 text-left text-black opacity-0 group-hover:opacity-100 transition-all duration-300 left-10">
              <div className="max-w-full">
                <strong>{t("ecosystem.starksVault.thePower")}</strong>{" "}
                {t("ecosystem.starksVault.thePowerDesc")}
                <br />
                <strong>{t("ecosystem.starksVault.superMoves")}</strong>{" "}
                {t("ecosystem.starksVault.superMovesDesc")}
                <br />
                <strong>{t("ecosystem.starksVault.whyEpic")}</strong>{" "}
                {t("ecosystem.starksVault.whyEpicDesc")}
              </div>
            </div>
          </div>

          <div className="absolute w-1/5 md:w-1/4 lg:w-1/5 top-1/3 left-3/4 group cursor-pointer xl:w-[374.5px] xl:h-[552px] xl:top-[240px] xl:left-[1100px] hover:z-10">
            <img
              src={image12}
              alt="Card 12"
              className="w-full h-auto transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-sm md:text-base lg:text-lg xl:text-xl opacity-100 group-hover:opacity-0 transition-all duration-300">
              <div className="text-center px-2">
                {t("ecosystem.meksShield.title")
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
              </div>
            </div>
            <div className="absolute inset-0 rotate-[5.14deg] navitems font-normal text-[10px] md:text-xs xl:text-sm leading-3 md:leading-4 flex items-center justify-center p-1 md:p-2 text-left text-black opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="max-w-full">
                <strong>{t("ecosystem.meksShield.signalSniper")}</strong>{" "}
                {t("ecosystem.meksShield.signalSniperDesc")}
                <br />
                <strong>{t("ecosystem.meksShield.crewSignal")}</strong>{" "}
                {t("ecosystem.meksShield.crewSignalDesc")}
                <br />
                <strong>{t("ecosystem.meksShield.whaleSlayer")}</strong>{" "}
                {t("ecosystem.meksShield.whaleSlayerDesc")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden px-4 space-y-6">
        {/* Heading */}
        <div className="flex justify-center">
          <h2 className="font-halo text-2xl sm:text-3xl font-normal leading-tight text-center select-none whitespace-pre-line">
            {t("ecosystem.title")}
          </h2>
        </div>

        {/* Image 13 */}
        <div className="flex justify-center">
          <img
            src={image13}
            alt="Card 13"
            className="w-4/5 max-w-xs h-auto object-contain"
          />
        </div>

        {/* Images Container */}
        <div className="relative w-full h-auto space-y-6">
          {/* Image 10 */}
          <div className="relative w-full flex justify-center group cursor-pointer">
            <img
              src={image10}
              alt="Card 10"
              className="w-4/5 max-w-sm h-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-base opacity-100 group-hover:opacity-0 transition-all duration-300">
              {t("ecosystem.warRoom.title")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-black font-normal text-xs p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div>
                <strong>{t("ecosystem.warRoom.threatRadar")}</strong>{" "}
                {t("ecosystem.mobile.warRoomShort")}
                <br />
                <strong>{t("ecosystem.warRoom.swapStrike")}</strong>{" "}
                {t("ecosystem.mobile.swapStrikeShort")}
                <br />
                <strong>{t("ecosystem.warRoom.antiMev")}</strong>{" "}
                {t("ecosystem.mobile.antiMevShort")}
              </div>
            </div>
          </div>

          {/* Image 11 */}
          <div className="relative w-full flex justify-center group cursor-pointer">
            <img
              src={image11}
              alt="Card 11"
              className="w-4/5 max-w-sm h-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-base opacity-100 group-hover:opacity-0 transition-all duration-300 xl:mt-[10px]">
              {t("ecosystem.starksVault.title")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-black font-normal text-xs p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div>
                <strong>{t("ecosystem.starksVault.thePower")}</strong>{" "}
                {t("ecosystem.mobile.vaultShort")}
                <br />
                <strong>{t("ecosystem.starksVault.superMoves")}</strong>{" "}
                {t("ecosystem.mobile.superMovesShort")}
                <br />
                <strong>{t("ecosystem.starksVault.whyEpic")}</strong>{" "}
                {t("ecosystem.mobile.whyEpicShort")}
              </div>
            </div>
          </div>

          {/* Image 12 */}
          <div className="relative w-full flex justify-center group cursor-pointer">
            <img
              src={image12}
              alt="Card 12"
              className="w-4/5 max-w-sm h-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center text-black font-bold text-base opacity-100 group-hover:opacity-0 transition-all duration-300">
              {t("ecosystem.meksShield.title")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    {index === 0 && <br />}
                  </span>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-black font-normal text-xs p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div>
                <strong>{t("ecosystem.meksShield.signalSniper")}</strong>{" "}
                {t("ecosystem.mobile.signalSniperShort")}
                <br />
                <strong>{t("ecosystem.meksShield.crewSignal")}</strong>{" "}
                {t("ecosystem.mobile.crewSignalShort")}
                <br />
                <strong>{t("ecosystem.meksShield.whaleSlayer")}</strong>{" "}
                {t("ecosystem.mobile.whaleSlayerShort")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoSystem;
