import React, { useState } from "react";

import Alert from "../assets/images/tabs/Alert.svg";
import Chat from "../assets/images/tabs/Chat.svg";
import People from "../assets/images/tabs/People Team.svg";
import Calendar from "../assets/images/tabs/Calendar.svg";
import MoreDots from "../assets/images/tabs/More Horizontal.svg";
import Calls from "../assets/images/tabs/Calls.svg";
import Files from "../assets/images/tabs/Files.svg";
import Plus from "../assets/images/tabs/Plus.svg";
import Button from "../assets/images/tabs/Button.svg";
import threeDots from "../assets/images/Shape.svg";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(7);

  const tabs = [
    {
      id: 0,
      name: "Activity",
      icon: Alert,
    },
    {
      id: 1,
      name: "Chat",
      icon: Chat,
    },
    {
      id: 2,
      name: "Teams",
      icon: People,
    },
    {
      id: 3,
      name: "Calendar",
      icon: Calendar,
    },
    {
      id: 4,
      name: "More",
      icon: MoreDots,
    },
    {
      id: 5,
      name: "Calls",
      icon: Calls,
    },
    {
      id: 6,
      name: "Files",
      icon: Files,
    },
    {
      id: 7,
      name: "Van Ardsel",
      icon: Button,
    },

    {
      id: 8,
      icon: threeDots,
    },

    {
      id: 9,
      name: "Apps",
      icon: Plus,
    },
  ];

  return (
    <section className="fixed flex flex-col w-full bottom-0 md:w-fit md:left-0 md:top-0 pb-2 z-50 bg-white border-t-0.5 border-t-neutralGray md:border-t-0 md:bg-background1">
      <div className="flex md:flex-col items-center w-full py-2 md:py-0">
        {tabs.map((item, index) => (
          <div
            key={`${item.id}${index}`}
            className={`${index > 4 ? "hidden md:flex" : "flex"} ${item.name == "More" && "md:hidden"} ${
              item.id != activeTab && "transition hover:opacity-60"
            } cursor-pointer flex-1 md:flex-auto flex-col gap-2 md:gap-0 items-center justify-center md:w-[68px] md:!h-[56px] relative`}>
            <div
              className={`${
                (activeTab > 4 && item.name == "More") || activeTab == item.id ? "text-primary" : ""
              } w-6 h-6 flex items-center justify-center`}>
              <img src={item.icon} alt={`${item.name}`} className="w-5 h-5" />
            </div>
            <div className={`${(activeTab > 4 && item.name == "More") || activeTab == item.id ? "text-primary" : ""} text-[10px] font-medium`}>
              {item.name}
            </div>

            {activeTab == item.id && (
              <div className="flex items-center justify-center h-full w-[2px] absolute left-0 my-2">
                <div className="bg-primary rounded-[20px] h-12 w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
