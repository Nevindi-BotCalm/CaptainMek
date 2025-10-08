import React from "react";
import BattleBackground from "../assets/Battle.webp";

function BattlePlan() {
  return (
    <div>
      <img
        src={BattleBackground}
        alt="FAQ Overlay"
        className="absolute w-[1920px] h-[1200px] top-[136px] object-cover opacity-1 "
      />


    </div>
  );
}

export default BattlePlan;
