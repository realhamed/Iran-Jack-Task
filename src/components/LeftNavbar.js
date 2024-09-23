import React from "react";
import NavbarItem from "./NavbarItem";
import ChevronDownDark from "../assets/images/ChevronDowndark.svg";

const LeftNavbar = () => {
  const navbarItems = [
    {
      id: "1",
      name: "Group title",
      icon: ChevronDownDark,
      children: [
        {
          id: "11",
          name: "Option",
          icon: ChevronDownDark,
          children: [
            {
              id: "111",
              name: "Item",
              icon: ChevronDownDark,
            },
            {
              id: "112",
              name: "Item",
              icon: ChevronDownDark,
            },
            {
              id: "113",
              name: "Item",
              icon: ChevronDownDark,
            },
          ],
        },
        {
          id: "12",
          name: "Option",
          icon: ChevronDownDark,
          children: [
            {
              id: "121",
              name: "Item",
              icon: ChevronDownDark,
            },
            {
              id: "122",
              name: "Item",
              icon: ChevronDownDark,
            },
            {
              id: "123",
              name: "Item",
              icon: ChevronDownDark,
            },
            {
              id: "124",
              name: "Item",
              icon: ChevronDownDark,
            },
            {
              id: "125",
              name: "Item",
              icon: ChevronDownDark,
            },
          ],
        },
      ],
    },
  ];

  return (
    <section className="hidden fixed md:block left-[68px] top-[107px] bottom-0 w-[183px] py-5 border border-r-borderColor1 px-1">
      {navbarItems.map((item, index) => (
        <NavbarItem key={`${item.id}${index}`} id={item.id} name={item.name} icon={item.icon} child={item.children.length > 0 ? item.children : []} />
      ))}
    </section>
  );
};

export default LeftNavbar;
