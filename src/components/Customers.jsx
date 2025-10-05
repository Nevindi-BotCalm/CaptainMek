import React from "react";
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
    <div className="py-10">
      <h2 className="font-halo font-normal text-[26px] leading-[100%] text-center lg:text-[54px] mb-8">
        Our Customers
      </h2>

      <Marquee gradient={false} speed={50}>
        <div className="flex gap-6 items-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Customer ${index + 1}`}
              className="h-15 lg:h-15 object-contain"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Customers;
