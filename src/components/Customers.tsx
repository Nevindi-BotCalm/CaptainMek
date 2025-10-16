import { useTranslation } from 'react-i18next';
import a from "../assets/a.webp";
import b from "../assets/b.webp";
import c from "../assets/c.webp";
import d from "../assets/d.webp";
import e from "../assets/e.webp";
import f from "../assets/f.webp";
import g from "../assets/g.webp";
import Marquee from "react-fast-marquee";

function Customers() {
  const { t } = useTranslation();
  const images = [a, b, c, d, e, f, g];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0F172A]">
      <div className="max-w-[1920px] mx-auto px-4">
        <h2 className="font-halo font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-center mb-10 md:mb-12 lg:mb-16 animate-fadeInUp">
          {t('customers.title')}
        </h2>

        <div className="relative">
          {/* Left blur gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right blur gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none"></div>

          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="right"
            loop={0}
            autoFill={true}
          >
            <div className="flex gap-8 md:gap-12 lg:gap-16 items-center px-4">
              {[...images, ...images].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Customer ${index + 1}`}
                  className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 image-3d-float"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Customers;
