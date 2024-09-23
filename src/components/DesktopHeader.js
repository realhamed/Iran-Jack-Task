import React from "react";
import Avatar from "../assets/images/Avatar.svg";
import forwardIcon from "../assets/images/icon.svg";
import moreIcon from "../assets/images/moreIcon.svg";

const DesktopHeader = () => {
  return (
    <div className="hidden md:flex h-[60px] px-5 items-center justify-between w-full border-b border-b-borderColor1">
      {/* left section */}
      <div className="flex items-center gap-3 h-full">
        <div className="w-8 h-8 cursor-pointer transition hover:opacity-75">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="flex items-center justify-center gap-3 h-full">
          <div className="text-lg font-bold">Van Arsdel</div>
          <div className="text-sm font-semibold relative h-full flex items-center justify-center pointer-events-none">
            Home
            <div className="absolute flex items-start justify-center bottom-0 w-full h-[3px]">
              <span className="h-full bg-primary rounded-t-lg w-[35px]" />
            </div>
          </div>
          <div className="text-sm cursor-pointer transition hover:opacity-75">Timeline</div>
          <div className="text-sm cursor-pointer transition hover:opacity-75">Chat</div>
          <div className="text-sm cursor-pointer transition hover:opacity-75">Assigned to you</div>
        </div>
      </div>

      {/* right section */}
      <div className="flex items-center">
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer transition hover:opacity-75">
          <img src={forwardIcon} alt="forward" className="w-5 h-5" />
        </div>
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer transition hover:opacity-75">
          <img src={moreIcon} alt="forward" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
