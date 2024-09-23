import React from "react";
import profile from "../assets/images/Union.svg";
import bot from "../assets/images/Bot.svg";
import threeDots from "../assets/images/Shape.svg";

const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between w-full md:hidden">
      <div className="flex items-center gap-2">
        <div>
          <img src={profile} alt="" />
        </div>
        <h2 className="font-bold text-2xl">Van Arsdel</h2>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-6 h-6">
          <img src={bot} alt="" />
        </div>
        <div className="w-6 h-6 flex items-center justify-center">
          <img src={threeDots} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
