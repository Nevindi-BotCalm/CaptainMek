import { useTranslation } from "react-i18next";
import imageh from "../assets/h.webp";
import imagei from "../assets/i.webp";
import imagej from "../assets/j.png";
import imagek from "../assets/k.webp";
import crypto from "../assets/crypto.webp";
import gradient from "../assets/gradient.webp";

function HowToBuySection() {
  const { t } = useTranslation();

  interface Step {
    id: number;
    image: string;
    title: string;
    description: string;
    highlight?: string;
  }

  const steps: Step[] = [
    {
      id: 1,
      image: imageh,
      title: t("1. Grab Your Shield (Wallet)"),
      description: t(`- Get a wallet (MetaMask, Trust Wallet, etc.)

- Install it, secure your seed phrase. Don’t self-rug.`),
    },
    {
      id: 2,
      image: imagei,
      title: t("2. Load Up on ETH (Your Power Core)"),
      description:
        t(`- Buy some ETH from Binance, Coinbase, or your preferred exchange.
- Send it to your wallet (Ethereum network only!).`),
    },
    {
      id: 3,
      image: imagej,
      title: t("3. Connect, Ape & Stake"),
      description: t(`- Go to captainmek.io, connect your wallet, and buy $CMEK.
- Stake for cosmic APYs (up to 300%) if you want extra loot.`),
      highlight: "Up to 300% APY!",
    },
    {
      id: 4,
      image: imagek,
      title: t("4. Stake $CMEK Like a Boss"),
      description:
        t(`- After holding, stake $CMEK instantly — no vesting, no BS.
- Welcome to the Mek Crew!!!`),
    },
  ];

  return (
    <section className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto overflow-x-hidden px-4 mt-[100px] md:mt-[150px] lg:mt-[10px] xl:mt-[150px]">
      <h2 className="text-4xl md:text-6xl xl:text-7xl font-halo font-normal text-white text-center mb-12 md:mb-16  xl:mb-20 animate-fadeInUp">
        {t("howToBuy.title")}
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12 2xl:gap-16 pb-12">
        {/* Left Side - Steps */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8 2xl:gap-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative ${step} rounded-2xl p-6 ${step} hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg scroll-animate`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="absolute inset-0 w-[395px] h-[277px] object-cover depth-layer-2"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-black mb-3 mt-18">
                  {step.title}
                </h3>
                <p className="text-black text-sm leading-relaxed mb-2">
                  {step.description}
                </p>
                {step.highlight && (
                  <div className=" text-black text-center p-3 rounded-lg">
                    <p className="text-sm font-bold">{step.highlight}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Floating Image */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center relative">
          <img
            src={gradient}
            alt="Gradient Background"
            className="absolute inset-0 w-full h-full object-contain z-0 rounded-full lg:animate-swirlPulse"
          />
          {/* <img
            src={crypto}
            alt="Crypto"
            className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl h-auto object-contain -rotate-[5deg] animate-flyZoom"
          /> */}

          <img
            src={crypto}
            alt="Crypto"
            className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl h-auto object-contain -rotate-[5deg] animate-flyAnimate image-3d-float"
          />
        </div>
      </div>
    </section>
  );
}

export default HowToBuySection;
