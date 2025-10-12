

import a from "../assets/a.webp";
import b from "../assets/b.webp";
import c from "../assets/c.webp";
import d from "../assets/d.webp";
import e from "../assets/e.webp";
import f from "../assets/f.webp";
import g from "../assets/g.webp";
import Marquee from "react-fast-marquee";

function Customers() {
  const images = [a, b, c, d, e, f, g];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0F172A]">
      <div className="max-w-[1920px] mx-auto px-4">
        <h2 className="font-halo font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-tight text-center mb-10 md:mb-12 lg:mb-16">
          Our Customers
        </h2>

        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          direction="right" // ← marquee right side scroll
          loop={0} // continuous infinite loop
          autoFill={true} // fill empty space for seamless effect
        >
          <div className="flex gap-8 md:gap-12 lg:gap-16 items-center px-4">
            {[...images, ...images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Customer ${index + 1}`}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Customers;
