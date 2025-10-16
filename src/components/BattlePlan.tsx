import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import battle from '../assets/Battle.webp';
import vector1 from '../assets/Vector 1.webp';
import vector2 from '../assets/Vector 2.webp';
import phace1 from '../assets/phace1.webp';
import phace2 from '../assets/phace2.webp';
import phace3 from '../assets/phace3.webp';
import phace4 from '../assets/phace4.webp';
import phace5 from '../assets/phace5.webp';

function BattlePlan() {
  const { t } = useTranslation();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const phases = [
    { text: t('battlePlan.phases.phase1'), image: phace1 },
    { text: t('battlePlan.phases.phase2'), image: phace2 },
    { text: t('battlePlan.phases.phase3'), image: phace3 },
    { text: t('battlePlan.phases.phase4'), image: phace4 },
    { text: t('battlePlan.phases.phase5'), image: phace5 },
  ];

  const nextPhase = () => setCurrentPhase((prev) => (prev + 1) % phases.length);
  const prevPhase = () =>
    setCurrentPhase((prev) => (prev - 1 + phases.length) % phases.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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

  const handleCopy = () => {
    navigator.clipboard.writeText(
      '0x71257312753EA7A2570a5a327bE4EA7A2570a5a32'
    );
    setShowCopyMessage(true);
    setTimeout(() => setShowCopyMessage(false), 2000);
  };

  return (
    <section
      className="relative mx-auto min-h-[750px] w-full max-w-[1920px] overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-10 sm:min-h-[850px] md:mt-[150px] md:h-[450px] xl:mt-[100px] xl:min-h-[1200px]"
      style={{ backgroundImage: `url(${battle})` }}
    >
      <div className="relative mx-auto min-h-[1200px] w-full px-4 py-10">
        {/*  Mobile + Tablet Layout */}
        <div
          className="mt-6 flex flex-col items-center justify-center md:flex xl:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Title */}
          <h2 className="font-halo mt-[40px] mb-6 text-center text-[24px] tracking-wide text-white sm:text-[28px] md:text-[36px] animate-fadeInUp">
            {t('battlePlan.title')}
          </h2>

          {/* Phase Image */}
          <img
            src={phases[currentPhase].image}
            alt={phases[currentPhase].text}
            className="mb-6 h-auto w-[220px] object-contain md:h-[280px] md:w-[260px] scroll-animate-scale"
          />

          {/* Phase Text */}
          <div
            className="flex w-[240px] items-center justify-center rounded-[20px] border border-gray-300 bg-[#FEE5A9] px-6 py-4 font-medium shadow-lg md:w-[280px] scroll-animate"
            style={{ boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}
          >
            <span className="bg-gradient-to-b from-[#330051] to-[#506EFF] bg-clip-text text-center text-[13px] font-semibold text-transparent sm:text-[14px] md:text-[16px]">
              {phases[currentPhase].text}
            </span>
          </div>

          {/* Dots */}
          <div className="mt-3 flex items-center justify-center space-x-2">
            {phases.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentPhase ? 'bg-[#506EFF]' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>

          {/* Copy Button */}
          <div className="relative scroll-animate">
            <button
              onClick={handleCopy}
              className="mt-6 flex h-[66px] w-[400px] max-w-[1079px] items-center justify-center gap-2 overflow-hidden rounded-[14px] border-[3px] border-[#506EFF] bg-[#1E1E4F] px-4 text-[11px] font-bold whitespace-nowrap text-white transition-colors duration-300 hover:bg-[#2A2A6F] sm:text-[12px] md:text-[14px]"
            >
              0x71257312753EA7A2570a5a327bE4EA7A2570a5a32
              <svg
                className="mx-w-[702px] h-3 w-3 flex-shrink-0 text-white sm:h-4 sm:w-4 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>

            {showCopyMessage && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform flex items-center gap-2 rounded bg-green-500 px-3 py-1 text-sm font-medium text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
                Copied!
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:flex">
          <h2 className="font-halo absolute top-[211px] left-[40%] -translate-x-1/2 text-center text-[36px] leading-tight text-white lg:text-[64px] xl:text-[74px] animate-fadeInUp">
            {t('battlePlan.title')}
          </h2>

          {/* Left Vector */}
          <img
            src={vector1}
            alt="Vector 1"
            className="absolute top-[648px] left-[117px] h-[87.75px] w-[72.94px] cursor-pointer"
            onClick={prevPhase}
          />

          {/* Right Vector */}
          <img
            src={vector2}
            alt="Vector 2"
            className="absolute top-[648px] right-[117px] h-[87.75px] w-[72.94px] cursor-pointer"
            onClick={nextPhase}
          />

          {/* Left Phase Card */}
          <div
            className="absolute top-[400px] left-[315px] flex h-[65px] w-[390px] items-center justify-center rounded-[32px] border border-gray-300 bg-[#FEE5A9] px-7 py-5 font-medium"
            style={{
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            }}
          >
            <span className="bg-gradient-to-b from-[#330051] to-[#506EFF] bg-clip-text text-transparent">
              {phases[currentPhase].text}
            </span>
          </div>

          {/* Right Phase Cvard */}
          <div
            className="absolute top-[300px] right-[264px] flex h-[65px] w-[390px] items-center justify-center rounded-[32px] border border-gray-300 bg-[#FEE5A9] px-7 py-5 font-medium"
            style={{
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            }}
          >
            <span className="bg-gradient-to-b from-[#330051] to-[#506EFF] bg-clip-text text-transparent">
              {phases[(currentPhase + 1) % phases.length].text}
            </span>
          </div>

          {/* Left Phase Image Container */}
          <div className="absolute top-[590px] left-[261px] w-[417px] h-[449px] flex items-center justify-center">
            <img
              src={phases[currentPhase].image}
              alt={`Phase ${currentPhase + 1}`}
              className="max-w-full max-h-full w-auto h-auto opacity-100 object-contain"
            />
          </div>

          {/* Right Phase Image Container */}
          <div className="absolute top-[350px] right-[253px] w-[341px] h-[624px] flex items-center justify-center">
            <img
              src={phases[(currentPhase + 1) % phases.length].image}
              alt={`Phase ${((currentPhase + 1) % phases.length) + 1}`}
              className="max-w-full max-h-full w-auto h-auto opacity-100 object-contain"
            />
          </div>

          {/* Desktop Copy Button */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 transform">
            <button
              onClick={handleCopy}
              className="hidden h-[96px] w-[100%] max-w-[1079px] items-center justify-center gap-3 rounded-[14px] border-[8px] border-[#506EFF] bg-[#1E1E4F] px-8 text-center text-[24px] leading-tight font-bold text-white transition-colors duration-300 hover:bg-[#2A2A6F] md:flex lg:border-[7px] lg:text-[32px] xl:text-[26px]"
            >
              0x71257312753EA7A2570a5a327bE4EA7A2570a5a32
              <svg
                className="h-6 w-6 flex-shrink-0 text-white lg:h-7 lg:w-7 xl:h-8 xl:w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
            {showCopyMessage && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 transform flex items-center gap-2 rounded bg-green-500 px-4 py-2 text-lg font-medium text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
                Copied!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BattlePlan;
