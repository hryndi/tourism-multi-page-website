import { useEffect, useState } from "react";
import DouglasHurleyImg from "../assets/crew/image-douglas-hurley.png";
import MarkShuttleworth from "../assets/crew/image-mark-shuttleworth.png";
import VictorGlover from "../assets/crew/image-victor-glover.png";
import AnoushehAnsari from "../assets/crew/image-anousheh-ansari.png";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface Crew {
  position: string;
  crewName: string;
  crewDesc: string;
  crewImg: string;
}

const defaultObject = {
  position: "Commander",
  crewName: "Douglas Hurley",
  crewDesc:
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  crewImg: DouglasHurleyImg,
};

const Crew = () => {
  const [currCrewMember, setCurrCrewMember] = useState("douglas-hurley");
  const [crewInfo, setCrewInfo] = useState<Crew>(defaultObject);
  useEffect(() => {
    const crewHandler = () => {
      switch (currCrewMember) {
        case "douglas-hurley":
          setCrewInfo(() => defaultObject);
          return;
        case "mark-shuttleworth":
          setCrewInfo(() => ({
            position: "Mission Specialist",
            crewName: "Mark Shuttleworth",
            crewDesc:
              "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            crewImg: MarkShuttleworth,
          }));

          return;
        case "victor-glover":
          setCrewInfo(() => ({
            position: "Pilot",
            crewName: "Victor Glover",
            crewDesc:
              "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            crewImg: VictorGlover,
          }));
          return;
        case "anousheh-ansari":
          setCrewInfo(() => ({
            position: "Flight Engineer",
            crewName: "Anousheh Ansari",
            crewDesc:
              "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            crewImg: AnoushehAnsari,
          }));
          return;
      }
    };
    crewHandler();
  }, [currCrewMember]);

  return (
    <div className="flex-1 flex max-md:flex-col  gap-20  md:px-12 xl:px-20 md:pb-20">
      <AnimatePresence>
        <div className="grow basis-1 max-md:p-6 flex justify-center ">
          <div className=" flex lg:w-10/12 2xl:w-10/12  justify-center items-start flex-col lg:pl-10  h-full">
            <h1 className="sections-header w-full max-sm:text-center">
              <span>02</span> Meet your Crew
            </h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              key={currCrewMember}
              className="flex-[0_0_70%] flex items-center "
            >
              <div className="flex flex-col md:gap-23 lg:gap-40    lg:pt-10 ">
                <div className="max-md:text-center max-md:mt-10">
                  <span className="uppercase text-xl  font-Bellefair text-gray-500 ">
                    {crewInfo.position}
                  </span>
                  <h2 className="uppercase py-3 text-4xl font-Bellefair">
                    {crewInfo.crewName}
                  </h2>
                  <p className="text-lg pt-10 max-md:text-center font-Barlow leading-8 text-gray-200">
                    {crewInfo.crewDesc}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="slider max-md:w-full flex-[0_0_20%]  flex  items-center gap-3 max-md:justify-center max-md:pt-10">
              <button
                onClick={() => setCurrCrewMember("douglas-hurley")}
                className={`${currCrewMember === "douglas-hurley" && "active"}`}
              ></button>
              <button
                onClick={() => setCurrCrewMember("mark-shuttleworth")}
                className={`${
                  currCrewMember === "mark-shuttleworth" && "active"
                }`}
              ></button>
              <button
                onClick={() => setCurrCrewMember("victor-glover")}
                className={`${currCrewMember === "victor-glover" && "active"}`}
              ></button>
              <button
                onClick={() => setCurrCrewMember("anousheh-ansari")}
                className={`${
                  currCrewMember === "anousheh-ansari" && "active"
                }`}
              ></button>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          key={currCrewMember}
          className="  grow basis-1 flex items-center  max-md:justify-center"
        >
          <div>
            <img
              src={crewInfo.crewImg}
              className=" crew-img max-h-[550px]"
              alt=""
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Crew;
