import { useState } from "react";

// Assets
import { close, logo, menu } from "../assets";
// Data
import { navLinks } from "../constants";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      {/* Desktop menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
        {navLinks.map((link, index) => (
          <li
            key={link.id + index}
            className={`font-poppins font-extralight text-base text-white`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col items-end flex-1 gap-3">
            {navLinks.map((link, index) => (
              <li
                key={link.id + index}
                className={`font-poppins font-extralight text-base text-white`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
