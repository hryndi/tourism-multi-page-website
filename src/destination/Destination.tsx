import MoonImg from "../assets/destination/image-moon.png";
import MarsImg from "../assets/destination/image-mars.png";
import EuropaImg from "../assets/destination/image-europa.png";
import TitanImg from "../assets/destination/image-titan.png";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
interface PlanetInfo {
  planetName: string;
  planetDescription: string;
  avgDistance: string;
  estTravelTime: string;
  planetImg: string;
}

const defaultObject = {
  planetName: "moon",
  planetDescription:
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  avgDistance: "384,400 KM",
  estTravelTime: "3 DAYS",
  planetImg: MoonImg,
};

const Destination = () => {
  const [currPlanet, setCurrPlanet] = useState("moon");
  const [planetInfo, setPlanetInfo] = useState<PlanetInfo>(defaultObject);

  useEffect(() => {
    const planetsHandler = () => {
      switch (currPlanet) {
        case "moon":
          setPlanetInfo((prev) => defaultObject);
          return;
        case "mars":
          setPlanetInfo((prev) => ({
            planetName: "mars",
            planetDescription:
              "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            avgDistance: "225 mil. km",
            estTravelTime: "9 months",
            planetImg: MarsImg,
          }));

          return;
        case "europa":
          setPlanetInfo((prev) => ({
            planetName: "europa",
            planetDescription:
              "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            avgDistance: "384,400 KM",
            estTravelTime: "3 years",
            planetImg: EuropaImg,
          }));
          return;
        case "titan":
          setPlanetInfo((prev) => ({
            planetName: "Titan",
            planetDescription:
              "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            avgDistance: "1.6 bil. km",
            estTravelTime: "7 years",
            planetImg: TitanImg,
          }));
          return;
      }
    };
    planetsHandler();
  }, [currPlanet]);

  return (
    <div className="flex-1 flex max-md:flex-col gap-10 max-md:px-5 md:px-12 xl:px-32 pb-20">
      <AnimatePresence mode="wait">
        {/* Left Section */}
        <div className="grow basis-0">
          <h1 className="sections-header mt-8">
            <span>01</span> Pick your destination
          </h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={currPlanet}
            className="max-md:flex max-md:justify-center "
          >
            <img
              src={planetInfo.planetImg}
              className="pt-10 max-md:max-w-[300px]"
              alt=""
            />
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="grow basis-0 max-md:flex max-md:justify-center">
          <div className="max-md:w-9/12 max-sm:w-full max-md:text-center flex h-full flex-col gap-8 lg:w-11/12 xl:w-10/12">
            <div className="flex-[0_0_20%] flex items-end">
              {/* Static UL at the top */}
              <ul className="planets-nav max-md:mx-auto flex uppercase gap-4 text-xl font-BarlowCondensed tracking-wider">
                <li className={`${currPlanet === "moon" && "active"}`}>
                  <a onClick={() => setCurrPlanet("moon")}>
                    <span>Moon</span>
                  </a>
                </li>
                <li className={`${currPlanet === "mars" && "active"}`}>
                  <a onClick={() => setCurrPlanet("mars")}>
                    <span>Mars</span>
                  </a>
                </li>
                <li className={`${currPlanet === "europa" && "active"}`}>
                  <a onClick={() => setCurrPlanet("europa")}>
                    <span>Europa</span>
                  </a>
                </li>
                <li className={`${currPlanet === "titan" && "active"}`}>
                  <a onClick={() => setCurrPlanet("titan")}>
                    <span>Titan</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Dynamic Content - Grows from the bottom */}
            <div className="flex-[0_0_80%]">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                key={currPlanet}
                className="flex  flex-col flex-1 max-md:mb-10  justify-end gap-8"
              >
                <h2 className="text-8xl font-Bellefair max-sm:text-6xl uppercase">
                  {planetInfo.planetName}
                </h2>
                <p className="text-lg max-sm:px-2 max-md:text-center leading-8 text-gray-300">
                  {planetInfo.planetDescription}
                </p>
                <div className="h-[1px] w-full bg-gray-700"></div>

                <div className="flex whitespace-nowrap uppercase gap-5 max-md:justify-center max-sm:flex-col">
                  <div>
                    <h2 className="text-gray-300 text-sm">Avg. Distance</h2>
                    <span className="text-2xl font-Bellefair font-medium">
                      {planetInfo.avgDistance}
                    </span>
                  </div>
                  <div className="sm:ml-28 ">
                    <h2 className="text-gray-300 text-sm">Est. Travel time</h2>
                    <span className="text-2xl font-Bellefair font-medium">
                      {planetInfo.estTravelTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Destination;
