import { useState } from "react";

const NavbarItem = ({ name, child, icon }) => {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(0);

  return (
    <div className="flex flex-col">
      <div
        className={`hover:bg-hover1 transition flex items-center rounded select-none cursor-pointer`}
        onClick={() => {
          setOpen((last) => !last);
          setLevel((last) => (open ? --last : ++last));
        }}>
        <div className="w-6 h-8 flex items-center justify-center">
          <img src={icon} className="" />
        </div>
        <div className="text-sm text-text1">{name}</div>
      </div>

      {child?.length > 0 && open == true && (
        <div className="flex flex-col" style={{ paddingLeft: `${level * 24}px` }}>
          {child.map((item, index) => (
            <NavbarItem
              id={item.id}
              key={`${item.id}${index}`}
              name={item.name}
              icon={item.icon}
              child={item.children?.length > 0 ? item.children : []}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
