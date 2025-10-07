// import React from "react";
// import image10 from "../assets/image10.webp";
// import image11 from "../assets/image11.webp";
// import image12 from "../assets/image12.webp";
// import image13 from "../assets/image13.webp";

// function EcoSystem() {
//   return (
//     <div className="relative w-full overflow-hidden mt-[-1300px]">
//       {/* Desktop & Laptop layout */}
//       <div className="hidden lg:block relative min-h-[4000px] -translate-y-[140px]">
//         {/* Container to center content and prevent overflow */}
//         <div className="relative w-full max-w-[1920px] mx-auto">
//           {/* Text */}

//           <div className="absolute flex items-center opacity-100 top-[2919px] left-[305px] w-[618px] h-[77px]">
//             <span className="text-left font-halo font-normal text-[74px] leading-[77px]">
//               ECOSYSTEM ARSENAL
//             </span>
//           </div>

//           {/* Cards Container - Centered */}
//           <div className="absolute top-[2919px] left-[50%] -translate-x-[50%] w-[1600px] max-w-[95vw]">
//             {/* Card 13 */}
//             <img
//               src={image13}
//               alt="Card 13"
//               className="absolute w-[723px] h-[773.045px] top-[103px] left-0 opacity-100 max-w-[40vw]"
//             />

//             {/* Card 10 */}
//             <img
//               src={image10}
//               alt="Card 10"
//               className="absolute w-[374.5px] h-[552.3875px] top-[290px] left-[573px] opacity-100 max-w-[20vw]"
//             />

//             {/* Card 11 */}
//             <img
//               src={image11}
//               alt="Card 11"
//               className="absolute w-[450px] h-[600.477px] top-0 left-[869.25px] opacity-100 max-w-[25vw]"
//             />

//             {/* Card 12 */}
//             <img
//               src={image12}
//               alt="Card 12"
//               className="absolute w-[374.5px] h-[552.3875px] top-[364px] left-[1226px] opacity-100 max-w-[20vw]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile & Tablet layout - Row Style */}
//       <div className="block lg:hidden w-full px-4 py-8 sm:py-12 md:py-16">
//         {/* Title */}
//         <h2
//           className="
//     font-halo
//     text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px]
//     font-normal
//     leading-tight

//     mb-8 sm:mb-10 md:mb-12
//     w-[618px] h-[77px]
//     absolute top-[2919px] left-[305px]
//     rotate-0
//     opacity-100
//   "
//         >
//           ECOSYSTEM ARSENAL
//         </h2>

//         {/* Cards Container - Row Style */}
//         <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-[600px] mx-auto">
//           {/* Card 13 */}
//           <div className="w-full flex justify-center">
//             <img
//               src={image13}
//               alt="Card 13"
//               className="w-full max-w-[500px] h-auto object-contain"
//             />
//           </div>

//           {/* Card 10 */}
//           <div className="w-full flex justify-center">
//             <img
//               src={image10}
//               alt="Card 10"
//               className="w-[90%] max-w-[420px] h-auto object-contain"
//             />
//           </div>

//           {/* Card 11 */}
//           <div className="w-full flex justify-center">
//             <img
//               src={image11}
//               alt="Card 11"
//               className="w-[90%] max-w-[420px] h-auto object-contain"
//             />
//           </div>

//           {/* Card 12 */}
//           <div className="w-full flex justify-center">
//             <img
//               src={image12}
//               alt="Card 12"
//               className="w-[90%] max-w-[420px] h-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EcoSystem;

import React from "react";
import image10 from "../assets/image10.webp";
import image11 from "../assets/image11.webp";
import image12 from "../assets/image12.webp";
import image13 from "../assets/image13.webp";

function EcoSystem() {
  return (
    <div className="relative w-full overflow-hidden mt-150 lg:mt-[-1300px]">

      {/* Desktop & Laptop layout */}
      <div className="hidden lg:block relative min-h-[4000px] -translate-y-[140px]">
        <div className="relative w-full max-w-[1920px] mx-auto">
          <div className="absolute flex items-center opacity-100 top-[2919px] left-[305px] w-[618px] h-[77px]">
            <span className="text-left font-halo font-normal text-[30px] lg:text-[74px] leading-[77px]">
              ECOSYSTEM ARSENAL
            </span>
          </div>

          {/* Cards Container - Centered */}
          <div className="absolute top-[2919px] left-[50%] -translate-x-[50%] w-[1600px] max-w-[95vw]">
            <img
              src={image13}
              alt="Card 13"
              className="absolute w-[723px] h-[773px] top-[103px] left-0 opacity-100 max-w-[40vw]"
            />
            <img
              src={image10}
              alt="Card 10"
              className="absolute w-[374.5px] h-[552.38px] top-[290px] left-[573px] opacity-100 max-w-[20vw]"
            />
            <img
              src={image11}
              alt="Card 11"
              className="absolute w-[450px] h-[600.48px] top-0 left-[869.25px] opacity-100 max-w-[25vw]"
            />
            <img
              src={image12}
              alt="Card 12"
              className="absolute w-[374.5px] h-[552.38px] top-[364px] left-[1226px] opacity-100 max-w-[20vw]"
            />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet layout */}
      <div className="block lg:hidden w-full px-4 py-8 sm:py-12 md:py-16">
        {/* Title */}
        <h2 className="font-halo text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-tight text-center mb-8 sm:mb-10 md:mb-12">
          ECOSYSTEM ARSENAL
        </h2>

        {/* Cards - stacked vertically */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-[600px] mx-auto">
          {[image13, image10, image11, image12].map((img, idx) => (
            <div key={idx} className="w-full flex justify-center">
              <img
                src={img}
                alt={`Card ${idx + 1}`}
                className="w-[90%] max-w-[420px] h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcoSystem;
