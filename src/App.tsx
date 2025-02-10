import Navbar from "./shared/Navbar";
import Home from "./home/Home";

import Destination from "./destination/Destination";

import Crew from "./crew/Crew";
import Technology from "./technology/Technology";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

import HomeBgDesktop from "./assets/home/background-home-desktop.jpg";
import HomeBgMobile from "./assets/home/background-home-mobile.jpg";
import HomeBgTablet from "./assets/home/background-home-tablet.jpg";

import DestinationBgDesktop from "./assets/destination/background-destination-desktop.jpg";
import DestinationBgMobile from "./assets/destination/background-destination-mobile.jpg";
import DestinationBgTablet from "./assets/destination/background-destination-tablet.jpg";

import CrewBgDesktop from "./assets/crew/background-crew-desktop.jpg";
import CrewBgMobile from "./assets/crew/background-crew-mobile.jpg";
import CrewBgTablet from "./assets/crew/background-crew-tablet.jpg";

import TechBgDesktop from "./assets/technology/background-technology-desktop.jpg";
import TechBgMobile from "./assets/technology/background-technology-mobile.jpg";
import TechBgTablet from "./assets/technology/background-technology-tablet.jpg";
import { AnimatePresence } from "motion/react";

function App() {
  const [currPage, setCurrPage] = useState("home");
  const bgHomeDesk = `bg-[url(./assets/home/background-home-desktop.jpg)]`;
  const [bgImage, setBgImage] = useState(bgHomeDesk);

  useEffect(() => {
    const updateBgImage = () => {
      const screenWidth = window.innerWidth;
      if (currPage === "home") {
        setBgImage(
          screenWidth < 640
            ? HomeBgMobile
            : screenWidth < 768
            ? HomeBgTablet
            : HomeBgDesktop
        );
      } else if (currPage === "destinations") {
        setBgImage(
          screenWidth < 640
            ? DestinationBgMobile
            : screenWidth < 768
            ? DestinationBgTablet
            : DestinationBgDesktop
        );
      } else if (currPage === "crew") {
        setBgImage(
          screenWidth < 640
            ? CrewBgMobile
            : screenWidth < 768
            ? CrewBgTablet
            : CrewBgDesktop
        );
      } else if (currPage === "technology") {
        setBgImage(
          screenWidth < 640
            ? TechBgMobile
            : screenWidth < 768
            ? TechBgTablet
            : TechBgDesktop
        );
      }
    };
    updateBgImage();
    window.addEventListener("resize", updateBgImage);

    return () => window.removeEventListener("resize", updateBgImage);
  }, [currPage]);
  const displayPageHandler = () => {
    switch (currPage) {
      case "home":
        return <Home />;

      case "destinations":
        return <Destination />;

      case "crew":
        return <Crew />;

      case "technology":
        return <Technology />;
    }
    return;
  };

  return (
    <div
      className={`min-h-screen  flex overflow-x-hidden  flex-col  text-white  `}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Navbar pageSetter={setCurrPage} currPage={currPage} />
      <AnimatePresence mode="wait">
        <motion.div
          className="flex-1 min-h-full  flex flex-col justify-center items-center"
          key={currPage}
          initial={{ x: -100, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {displayPageHandler()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
