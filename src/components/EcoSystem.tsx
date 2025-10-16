import { useTranslation } from 'react-i18next';
import image10 from '../assets/image10.webp';
import image11 from '../assets/image11.webp';
import image12 from '../assets/image12.webp';
import image13 from '../assets/image13.webp';

function EcoSystem() {
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto mt-12 w-full max-w-[1920px] px-4 select-none sm:mt-[0px] md:mt-32 xl:mt-48 2xl:mt-56">
      {/* Title */}
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h2 className="font-halo mt-120 text-center text-3xl leading-tight font-normal whitespace-pre-line md:text-left md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          {t('ecosystem.title')}
        </h2>
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:block">
        <div className="relative w-full" style={{ minHeight: '500px' }}>
          {/* Left: Frog Character with Effects */}
          <div className="absolute top-0 left-0 w-[42%] max-w-[350px] lg:w-[20%] xl:left-0 xl:w-[707px]">
           
           <img
  src={image13}
  alt="Captain Mek"
  className="animate-recoil  w-[500px] h-auto sm:max-w-[600px] md:w-[200px] lg:w-[800px] xl:w-170"
/>

            {/* Blast Effects positioned relative to frog */}
            <div className="absolute top-[50%] left-[65%]">
              <div className="bg-yellow animate-starblast h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"></div>
              <div className="animate-sparks absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500"></div>
              <div className="animate-realSmoke absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-gray-400/70 to-transparent opacity-70 blur-2xl lg:h-10 lg:w-10"></div>
            </div>
          </div>

          {/* Right: Cards in Flexbox */}
          <div className="ml-[29%] flex items-start justify-start gap-3 lg:ml-[22%] lg:gap-4 xl:ml-[40%] xl:gap-1">
            {/* Card 10 - War Room */}
            <div className="group relative mt-8 w-[40%] max-w-[280px] cursor-pointer lg:mt-12">
              <img
                src={image10}
                alt="War Room"
                className="h-auto w-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center px-3 text-center text-sm font-bold text-black opacity-100 transition-all duration-300 group-hover:opacity-0 lg:text-base xl:text-lg 2xl:text-xl">
                <div className="mt-6 leading-6 lg:mt-8">
                  {t('ecosystem.warRoom.title')
                    .split('\n')
                    .map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                </div>
              </div>
              <div className="navitems absolute inset-0 flex rotate-[5.64deg] items-center justify-center overflow-hidden p-2 text-left text-[10px] leading-tight font-normal text-black opacity-0 transition-all duration-300 group-hover:opacity-100 lg:p-3 lg:text-xs xl:text-[15px] 2xl:text-base">
                <div className="w-full max-w-full overflow-hidden xl:mt-5 xl:w-70 xl:text-[15px]">
                  <strong>{t('ecosystem.warRoom.threatRadar')}</strong>{' '}
                  {t('ecosystem.warRoom.threatRadarDesc')}
                  <br />
                  <strong>{t('ecosystem.warRoom.swapStrike')}</strong>{' '}
                  {t('ecosystem.warRoom.swapStrikeDesc')}
                  <br />
                  <strong>{t('ecosystem.warRoom.antiMev')}</strong>{' '}
                  {t('ecosystem.warRoom.antiMevDesc')}
                </div>
              </div>
            </div>

            {/* Card 11 - Starks Vault */}
            <div className="group -xl:mt-4 relative -mt-4 w-[40%] max-w-[320px] cursor-pointer lg:-mt-6">
              <img
                src={image11}
                alt="Starks Vault"
                className="h-auto w-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center px-3 text-center text-sm font-bold text-black opacity-100 transition-all duration-300 group-hover:opacity-0 lg:text-base xl:text-lg 2xl:text-xl">
                <div className="-mt-12 leading-6 lg:-mt-16 xl:-mt-20">
                  {t('ecosystem.starksVault.title')
                    .split('\n')
                    .map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                </div>
              </div>
              <div className="navitems absolute inset-0 flex -rotate-[3.07deg] items-center justify-center overflow-hidden p-2 text-left text-[10px] leading-tight font-normal text-black opacity-0 transition-all duration-300 group-hover:opacity-100 lg:p-3 lg:text-xs xl:text-sm 2xl:text-base">
                <div className="-mt-16 w-full max-w-full overflow-hidden lg:-mt-20 xl:mt-10 xl:w-65 xl:text-[15px]">
                  <strong>{t('ecosystem.starksVault.thePower')}</strong>{' '}
                  {t('ecosystem.starksVault.thePowerDesc')}
                  <br />
                  <strong>{t('ecosystem.starksVault.superMoves')}</strong>{' '}
                  {t('ecosystem.starksVault.superMovesDesc')}
                  <br />
                  <strong>{t('ecosystem.starksVault.whyEpic')}</strong>{' '}
                  {t('ecosystem.starksVault.whyEpicDesc')}
                </div>
              </div>
            </div>

            {/* Card 12 - Meks Shield */}
            <div className="group relative mt-12 w-[40%] max-w-[280px] cursor-pointer lg:mt-16">
              <img
                src={image12}
                alt="Meks Shield"
                className="h-auto w-full transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center px-3 text-center text-sm font-bold text-black opacity-100 transition-all duration-300 group-hover:opacity-0 lg:text-base xl:text-lg 2xl:text-xl">
                <div className="mt-6 leading-6 lg:mt-8">
                  {t('ecosystem.meksShield.title')
                    .split('\n')
                    .map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                </div>
              </div>
              <div className="navitems absolute inset-0 flex rotate-[5.14deg] items-center justify-center overflow-hidden p-2 text-left text-[10px] leading-tight font-normal text-black opacity-0 transition-all duration-300 group-hover:opacity-100 lg:p-3 lg:text-xs xl:text-sm 2xl:text-base">
                <div className="w-full max-w-full overflow-hidden xl:mt-10 xl:w-70 xl:text-[15px]">
                  <strong>{t('ecosystem.meksShield.signalSniper')}</strong>{' '}
                  {t('ecosystem.meksShield.signalSniperDesc')}
                  <br />
                  <strong>{t('ecosystem.meksShield.crewSignal')}</strong>{' '}
                  {t('ecosystem.meksShield.crewSignalDesc')}
                  <br />
                  <strong>{t('ecosystem.meksShield.whaleSlayer')}</strong>{' '}
                  {t('ecosystem.meksShield.whaleSlayerDesc')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block space-y-6 md:hidden">
        {/* Frog Image */}
        <div className="flex justify-center">
          <img
            src={image13}
            alt="Captain Mek"
            className="h-auto w-4/5 max-w-xs object-contain"
          />
        </div>

        {/* Card 10 */}
        <div className="group relative flex w-full cursor-pointer justify-center">
          <img
            src={image10}
            alt="War Room"
            className="h-auto w-4/5 max-w-sm object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center text-base font-bold text-black opacity-100 transition-all duration-300 group-hover:opacity-0">
            {t('ecosystem.warRoom.title')
              .split('\n')
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-3 text-xs font-normal text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div>
              <strong>{t('ecosystem.warRoom.threatRadar')}</strong>{' '}
              {t('ecosystem.mobile.warRoomShort')}
              <br />
              <strong>{t('ecosystem.warRoom.swapStrike')}</strong>{' '}
              {t('ecosystem.mobile.swapStrikeShort')}
              <br />
              <strong>{t('ecosystem.warRoom.antiMev')}</strong>{' '}
              {t('ecosystem.mobile.antiMevShort')}
            </div>
          </div>
        </div>

        {/* Card 11 */}
        <div className="group relative flex w-full cursor-pointer justify-center">
          <img
            src={image11}
            alt="Starks Vault"
            className="h-auto w-4/5 max-w-sm object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center text-base font-bold text-black opacity-100 transition-all duration-300 group-hover:opacity-0">
            {t('ecosystem.starksVault.title')
              .split('\n')
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-3 text-xs font-normal text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div>
              <strong>{t('ecosystem.starksVault.thePower')}</strong>{' '}
              {t('ecosystem.mobile.vaultShort')}
              <br />
              <strong>{t('ecosystem.starksVault.superMoves')}</strong>{' '}
              {t('ecosystem.mobile.superMovesShort')}
              <br />
              <strong>{t('ecosystem.starksVault.whyEpic')}</strong>{' '}
              {t('ecosystem.mobile.whyEpicShort')}
            </div>
          </div>
        </div>

        {/* Card 12 */}
        <div className="group relative flex w-full cursor-pointer justify-center">
          <img
            src={image12}
            alt="Meks Shield"
            className="h-auto w-4/5 max-w-sm object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center text-base font-bold text-black opacity-100 transition-all duration-300 group-hover:opacity-0">
            {t('ecosystem.meksShield.title')
              .split('\n')
              .map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-3 text-xs font-normal text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div>
              <strong>{t('ecosystem.meksShield.signalSniper')}</strong>{' '}
              {t('ecosystem.mobile.signalSniperShort')}
              <br />
              <strong>{t('ecosystem.meksShield.crewSignal')}</strong>{' '}
              {t('ecosystem.mobile.crewSignalShort')}
              <br />
              <strong>{t('ecosystem.meksShield.whaleSlayer')}</strong>{' '}
              {t('ecosystem.mobile.whaleSlayerShort')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoSystem;
