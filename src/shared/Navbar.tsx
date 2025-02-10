/// <reference types="vite-plugin-svgr/client" />
// import Logo from "../assets/shared/logo.svg?react";
import Logo from "../assets/shared/logo.svg";
import CloseIcon from "../assets/shared/icon-hamburger.svg";
import { useState } from "react";
import Destination from "../destination/Destination";

const Navbar = ({
  pageSetter,
  currPage,
}: {
  pageSetter: React.Dispatch<React.SetStateAction<string>>;
  currPage: string;
}) => {
  const [navToggle, setNavtoggle] = useState("false");
  const currNavIcon =
    navToggle === "false"
      ? `bg-[url("assets/shared/icon-hamburger.svg")]`
      : `bg-[url("assets/shared/icon-close.svg")]`;
  const translateXNav =
    navToggle === "false"
      ? "max-sm:translate-x-[100%]"
      : "max-sm:translate-x-[0%]";

  const isCurrPageActive = (
    page: "home" | "destinations" | "crew" | "technology"
  ) => {
    console.log(currPage + " " + page);
    if (currPage === page) {
      return "active";
    }
  };
  return (
    <header className="flex items-center justify-between  w-full">
      <div>
        <img src={Logo} className="m-8 mr-4 max-[660px]:mr-1 " alt="" />
      </div>
      <button
        data-visible={navToggle}
        onClick={() => {
          setNavtoggle((prev) => (prev === "false" ? "true" : "false"));
          console.log(navToggle);
        }}
        aria-controls="primary-nav"
        className={`absolute cursor-pointer ${currNavIcon} w-5 sm:hidden aspect-[1] top-8 right-8 z-[9999]  bg-no-repeat  `}

        // style={{ backgroundImage: `url("../assets/shared/icon-close.svg")` }}
      >
        <span className="sr-only">Menu</span>
      </button>
      <div className="hidden sm:block flex-1 h-[1px] z-[999999] bg-gray-500 -mr-6" />
      <nav className="">
        <ul
          id="primary-nav"
          className={` z-[1000] ${translateXNav} navbar  max-sm:p-8   sm:w-full  transition  transform  backdrop-blur-sm flex gap-2 max-sm:inset-y-0 max-sm:right-0 w-[70%] max-sm:flex-col max-sm:pt-[29vh] max-sm:pl-8  max-sm:fixed`}
          style={{
            backgroundColor: "hsl(0 0% 100% / 0.055)",
            paddingInline: "clamp(3rem, 7vw, 10em)",
          }}
        >
          <li className={`${isCurrPageActive("home")} `}>
            <a onClick={() => pageSetter("home")} className=" ">
              <span>
                00 <span>HOME</span>
              </span>
            </a>
          </li>
          <li className={`${isCurrPageActive("destinations")}`}>
            <a onClick={() => pageSetter("destinations")}>
              <span>
                01 <span>DESTINATIONS</span>
              </span>
            </a>
          </li>
          <li className={`${isCurrPageActive("crew")}`}>
            <a onClick={() => pageSetter("crew")}>
              <span>
                02 <span>CREW</span>
              </span>
            </a>
          </li>
          <li className={isCurrPageActive("technology")}>
            <a onClick={() => pageSetter("technology")}>
              <span>
                03 <span>TECHNOLOGY</span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
