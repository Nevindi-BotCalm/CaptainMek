// import React from "react";
// import image10 from "../assets/image10.webp";
// import image11 from "../assets/image11.webp";
// import image12 from "../assets/image12.webp";
// import image13 from "../assets/image13.webp";

// function EcoSystem() {
//   return (
//     <div className="relative w-full overflow-hidden mt-150 lg:mt-[-2599px]">

//     {/* Desktop / Laptop */}
//       <div className="hidden lg:block relative min-h-[4000px] -translate-y-[140px]">
//         <div className="relative w-full max-w-[1920px] mx-auto">
//           <div className="absolute flex items-center opacity-100 top-[2919px] left-[305px] w-[618px] h-[77px]">
//             <span className="text-left font-halo font-normal text-[30px] lg:text-[74px] leading-[77px]">
//               ECOSYSTEM ARSENAL
//             </span>
//           </div>

//           <div className="absolute top-[2919px] left-[50%] -translate-x-[50%] w-[1600px] xl:w-[1800px]">
//             <img
//               src={image13}
//               alt="Card 13"
//               className="absolute w-[723px] xl:w-[800px] h-[773px] xl:h-[850px] top-[103px] left-0 opacity-100 max-w-[40vw] animate-[jump_0.8s_ease-in-out_infinite]"
//             />

//             <img
//               src={image10}
//               alt="Card 10"
//               className="absolute w-[374.5px] xl:w-[420px] h-[552.38px] xl:h-[620px] top-100 md:top-[290px] left-[573px] xl:left-[650px] opacity-100 max-w-[20vw]"
//             />
//             <img
//               src={image11}
//               alt="Card 11"
//               className="absolute w-[450px] xl:w-[500px] h-[600.48px] xl:h-[670px] top-0 left-[869.25px] xl:left-[980px] opacity-100 max-w-[25vw]"
//             />
//             <img
//               src={image12}
//               alt="Card 12"
//               className="absolute w-[374.5px] xl:w-[420px] h-[552.38px] xl:h-[620px] top-[364px] left-[1226px] xl:left-[1380px] opacity-100 max-w-[20vw]"
//             />
//           </div>
//         </div>
//       </div>

// {/* Mobile / Tablet */}
//       <div className="block lg:hidden w-full px-4 py-8 sm:py-12 md:py-16">
//         {/* Title */}
//         <h2 className="font-halo text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-tight text-center mb-8 sm:mb-10 md:mb-12">
//           ECOSYSTEM ARSENAL
//         </h2>

//         {/* Cards - stacked vertically */}
//         <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-[600px] mx-auto">
//           {[image13, image10, image11, image12].map((img, idx) => (
//             <div key={idx} className="w-full flex justify-center">
//               <img
//                 src={img}
//                 alt={`Card ${idx + 1}`}
//                 className="w-[90%] max-w-[420px] h-auto object-contain rounded-lg"
//               />
//             </div>
//           ))}
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
    <div className="relative w-full overflow-hidden mt-[150px] lg:mt-[-2400px] md:mt-[300px]">
      {/* Desktop / Laptop */}
      <div className="hidden lg:block relative min-h-[4000px] -translate-y-[140px]">
        <div className="relative w-full max-w-[1920px] mx-auto">
          {/* Title */}
          <div className="absolute flex items-center top-[2920px] left-[8vw]">
            <span className="text-left font-halo font-normal text-[2vw] lg:text-[70px] leading-[1.2] ">
              ECOSYSTEM ARSENAL
            </span>
          </div>

          {/* Image group */}
          <div className="absolute top-[2919px] lg:top-[3000px] left-[50%]  -translate-x-1/2 w-[85vw] max-w-[1600px]">
            <img
              src={image13}
              alt="Card 13"
              className="absolute w-[40vw] max-w-[720px] h-auto top-[6vw] left-0 opacity-100 animate-[jump_0.8s_ease-in-out_infinite]"
            />

            <img
              src={image10}
              alt="Card 10"
              className="absolute w-[20vw] max-w-[400px] h-auto top-[15vw] left-[36vw] opacity-100"
            />

            <img
              src={image11}
              alt="Card 11"
              className="absolute w-[23vw] max-w-[470px] h-auto top-[2vw] left-[53vw] opacity-100"
            />

            <img
              src={image12}
              alt="Card 12"
              className="absolute w-[20vw] max-w-[400px] h-auto top-[18vw] left-[70vw] opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="block lg:hidden w-full px-4 py-8 sm:py-12 md:py-16">
        <h2 className="font-halo text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-tight text-center mb-8 sm:mb-10 md:mb-12">
          ECOSYSTEM ARSENAL
        </h2>

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

// import React, { useState } from "react";
// import image10 from "../assets/image10.webp";
// import image11 from "../assets/image11.webp";
// import image12 from "../assets/image12.webp";
// import image13 from "../assets/image13.webp";

// function EcoSystem() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const cards = [
//     {
//       id: 10,
//       src: image10,
//       alt: "Card 10",
//       description: `Threat Radar: Captain Mek’s AI shield scans the blockchain to detect scams, spot pumps, predict dips, and uncover hidden gems — no villain escapes.

// Swap Strike: Zero-fee trades on Uniswap, swift as Black Widow’s kicks.

// Anti-MEV Armor: Blocks bot attacks, keeps your $CMEK safe from the shadows.`,
//       top: "290px",
//       left: "573px",
//       width: "18vw",
//       maxWidth: "374px",
//     },
//     {
//       id: 11,
//       src: image11,
//       alt: "Card 11",
//       description: `The Power: Lock $CMEK in the Iron Man-grade vault, earn Hulk-sized APY, and grow your stash while the battle rages on.

// Super Moves: Up to 300% APY at launch (scales down), daily loot drops, Thor-strong stability.

// Why It’s Epic: Stake like a Titan, stack like a god - $CMEK holders are the Avengers’ backbone.`,
//       top: "0px",
//       left: "869px",
//       width: "22vw",
//       maxWidth: "450px",
//     },
//     {
//       id: 12,
//       src: image12,
//       alt: "Card 12",
//       description: `Signal Sniper: AI-curated real-time meme coin signals that hit pumps and dodge whale dumps with pinpoint precision.

// Crew Signal: An exclusive Telegram channel for $CMEK holders, where alpha drops faster than others and is meticulously filtered by AI.

// Whale Slayer: Coordinated tactics powered by AI analytics to crush whale manipulation and help the Mek Crew dominate the market.`,
//       top: "364px",
//       left: "1226px",
//       width: "18vw",
//       maxWidth: "374px",
//     },
//   ];

//   return (
//     <div className="relative w-full overflow-hidden mt-[15px] lg:mt-[-2300px]">
//       {/* Desktop / Laptop */}
//       <div className="hidden lg:block relative min-h-[4000px] -translate-y-[140px]">
//         <div className="relative w-full max-w-[1920px] mx-auto">
//           {/* Title */}
//           <div className="absolute flex items-center opacity-100 top-[2919px] left-[305px] w-[618px] h-[77px]">
//             <span className="text-left font-halo font-normal text-[2vw] xl:text-[74px] leading-[1.1]">
//               ECOSYSTEM ARSENAL
//             </span>
//           </div>

//           {/* Card Container */}
//           <div className="absolute top-[2919px] left-[50%] -translate-x-[50%] w-[1600px] max-w-[95vw]">
//             {/* Card 13 */}
//             <img
//               src={image13}
//               alt="Card 13"
//               className="absolute top-[103px] left-0 opacity-100 w-[35vw] max-w-[723px] h-auto animate-[jump_0.8s_ease-in-out_infinite]"
//             />

//             {cards.map((card) => (
//               <div
//                 key={card.id}
//                 className="absolute cursor-pointer"
//                 style={{
//                   top: card.top,
//                   left: card.left,
//                   width: card.width,
//                   maxWidth: card.maxWidth,
//                 }}
//                 onMouseEnter={() => setHoveredCard(card.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 onTouchStart={() => setHoveredCard(card.id)}
//                 onTouchEnd={() => setHoveredCard(null)}
//               >
//                 <img
//                   src={card.src}
//                   alt={card.alt}
//                   className="w-full h-auto rounded-lg"
//                 />

//                 {/* Overlay Description */}
//                 <div
//                   className={`
//         absolute inset-0 bg-black bg-opacity-70 text-white p-4 rounded-lg
//         flex items-center justify-center text-center text-sm
//         transition-opacity duration-300 opacity-0
//         ${hoveredCard === card.id ? "opacity-100" : ""}
//       `}
//                 >
//                   {card.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Mobile / Tablet */}
//       <div className="block lg:hidden w-full px-4 py-8 sm:py-12 md:py-16">
//         {/* Title */}
//         <h2 className="font-halo text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-tight text-center mb-8 sm:mb-10 md:mb-12">
//           ECOSYSTEM ARSENAL
//         </h2>

//         {/* Cards - stacked vertically */}
//         <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-[600px] mx-auto">
//           {[image13, image10, image11, image12].map((img, idx) => (
//             <div key={idx} className="w-full flex justify-center relative">
//               <img
//                 src={img}
//                 alt={`Card ${idx + 1}`}
//                 className="w-[90%] max-w-[420px] h-auto object-contain rounded-lg cursor-pointer"
//               />
//               {/* Optional mobile description (appear on tap) */}
//               {hoveredCard === idx + 10 && (
//                 <div
//                   className="absolute bottom-[-60px] left-1/2 -translate-x-1/2
//                                 bg-black text-white text-center text-sm
//                                 px-2 py-1 rounded shadow-lg z-10"
//                 >
//                   Description for Card {idx + 1}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       s
//     </div>
//   );
// }

// export default EcoSystem;
