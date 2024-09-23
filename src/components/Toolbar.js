import React from "react";
import hamburgerIcon from "../assets/images/hamburgerIcon.svg";
import chevronDown from "../assets/images/chevronDown.svg";
import searchIcon from "../assets/images/search.svg";

const Toolbar = () => {
  const buttonComponentNumbers = [2, 3, 2];
  const buttonComponentsArray = [];
  for (let i = 0; i < buttonComponentNumbers.length; i++) {
    const item = [];
    for (let j = 0; j < buttonComponentNumbers[i]; j++) {
      item.push([]);
    }
    buttonComponentsArray.push(item);
  }

  const ButtonComponent = () => {
    return (
      <div className="flex items-center px-2 lg:px-3 gap-1 h-8 w-16 lg:w-[76px]">
        <div className="w-5 h-5 flex items-center justify-center">
          <input type="radio" className="w-4 h-4 appearance-none rounded-full border-1.5 border-text1" />
        </div>
        <div className="font-semibold text-sm text-text1 w-7">Text</div>
      </div>
    );
  };

  return (
    <section className="fixed w-full top-[60px] bg-white z-50 hidden md:flex h-12 pr-5 py-2 items-center justify-between md:pl-[88px] border-b border-borderColor1 truncate">
      {/* left section */}
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src={hamburgerIcon} alt="hamburger menu" className="w-5 h-5" />
          </div>
          <div className="bg-primary flex items-center gap-1 h-8 w-[92px] px-3 rounded">
            <div className="flex items-center justify-center w-5 h-5">
              <div className="rounded-full border-[1.5px] border-white w-4 h-4" />
            </div>
            <div className="font-semibold text-sm text-white">Text</div>
            <div className="w-3 h-3 flex items-center justify-center pt-1">
              <img src={chevronDown} alt="hamburger menu" />
            </div>
          </div>
        </div>

        {buttonComponentsArray.map((item, index) => {
          return item.map((_, index2) => {
            return (
              <div className="flex items-center" key={`${index}-${index2}`}>
                <ButtonComponent />
                {index2 + 1 == item.length && index + 1 < buttonComponentsArray.length && (
                  <div className="h-5 w-3 lg:w-[20px] flex items-center justify-center">
                    <div className="h-full w-[1px] bg-neutralGray"></div>
                  </div>
                )}
              </div>
            );
          });
        })}
      </div>

      {/* right section */}
      <div className="flex items-center justify-end gap-2 w-[266px] py-2">
        <div className="hidden lg:flex items-center justify-center font-semibold text-sm text-text1 w-[58px]">
          <span>Filter</span>
        </div>
        <div className="relative h-8 flex-1 max-w-[200px]">
          <input
            type="text"
            placeholder="Find"
            className="w-full text-sm pl-[30px] h-full border border-neutralGray rounded placeholder:text-text3"
          />
          <div className="absolute left-[10px] top-[6px] w-5 h-5 flex items-center justify-center">
            <img src={searchIcon} alt="search" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolbar;
