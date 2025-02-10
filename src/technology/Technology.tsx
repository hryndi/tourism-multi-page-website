import { useEffect, useRef, useState } from "react";
import RocketImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import RocketImgMobi from "../assets/technology/image-launch-vehicle-landscape.jpg";
import SpacePortImg from "../assets/technology/image-spaceport-portrait.jpg";
import SpacePortImgMobi from "../assets/technology/image-spaceport-landscape.jpg";
import SpaceCapsuleImg from "../assets/technology/image-space-capsule-portrait.jpg";
import SpaceCapsuleImgMobi from "../assets/technology/image-space-capsule-landscape.jpg";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

interface Technology {
  nameTech: string;
  techDesc: string;
  techImg: string;
}

const defaultObject = {
  nameTech: "Launch vehicle",
  techDesc:
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  techImg: RocketImg,
};

const Technology = () => {
  const [currTechnology, setCurrTechnology] = useState("launch-vehicle");
  const [technologyInfo, setTechnologyInfo] =
    useState<Technology>(defaultObject);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBgImage = () => {
      const screenWidth = window.innerWidth;
      if (currTechnology === "launch-vehicle") {
        setBgImage(screenWidth < 768 ? RocketImgMobi : RocketImg);
      } else if (currTechnology === "spaceport") {
        setBgImage(screenWidth < 768 ? SpacePortImgMobi : SpacePortImg);
      } else if (currTechnology === "space-capsule") {
        setBgImage(screenWidth < 768 ? SpaceCapsuleImgMobi : SpaceCapsuleImg);
      }
    };
    updateBgImage();
    window.addEventListener("resize", updateBgImage);

    return () => window.removeEventListener("resize", updateBgImage);
  }, [currTechnology]);

  useEffect(() => {
    const crewHandler = () => {
      switch (currTechnology) {
        case "launch-vehicle":
          setTechnologyInfo((prev) => defaultObject);
          return;
        case "spaceport":
          setTechnologyInfo((prev) => ({
            nameTech: "Spaceport",
            techDesc:
              "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            techImg: SpacePortImg,
          }));

          return;
        case "space-capsule":
          setTechnologyInfo((prev) => ({
            nameTech: "Space capsule",
            techDesc:
              "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            techImg: SpaceCapsuleImg,
          }));
          return;
      }
    };
    crewHandler();
  }, [currTechnology]);

  return (
    <div
      className=" flex-1 gap-10 max-md:flex-col-reverse  2xl:gap-35 flex  max-md:text-center
       font-BarlowCondensed max-md:pb-16  md:px-10
       "
    >
      {/* md:px-72 */}

      <div className="flex-1 ">
        <div className="h-full flex items-center md:mb-auto justify-center  ">
          <div className="flex flex-col gap-10 max-md:w-10/12  lg:w-11/12 xl:w-10/12 2xl:w-10/12  mb-auto h-full">
            <h1 className="max-md:hidden flex-[0_0_10%] sections-header pt-12">
              <span>02</span> Meet your Crew
            </h1>
            <div className="flex flex-[0_0_90%] max-md:flex-col max-md:items-center gap-8">
              <div className="md:flex-col  gap-4 technology flex items-center font justify-start md:mt-10">
                <div
                  onClick={() => setCurrTechnology("launch-vehicle")}
                  className={`${
                    currTechnology === "launch-vehicle" && "active"
                  }  p-6  rounded-full border border-gray-300 h-10 w-10 flex justify-center items-center text-3xl`}
                >
                  1
                </div>
                <div
                  onClick={() => setCurrTechnology("spaceport")}
                  className={`${
                    currTechnology === "spaceport" && "active"
                  }  p-6  rounded-full border border-gray-300 h-10 w-10 flex justify-center items-center text-3xl`}
                >
                  2
                </div>
                <div
                  onClick={() => setCurrTechnology("space-capsule")}
                  className={`${
                    currTechnology === "space-capsule" && "active"
                  }  p-6  rounded-full border border-gray-300 h-10 w-10 flex justify-center items-center text-3xl`}
                >
                  3
                </div>
              </div>
              <AnimatePresence mode={"wait"}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  key={currTechnology}
                  className=""
                >
                  <span className="uppercase text-gray-400 font-medium">
                    The terminology...
                  </span>
                  <h2 className="text-5xl pb-5 pt-3 uppercase font-Bellefair">
                    {technologyInfo.nameTech}
                  </h2>
                  <p>{technologyInfo.techDesc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          key={currTechnology}
          className="flex-1 flex  items-center"
        >
          <img
            src={bgImage}
            className="   object-cover max-md:h-[300px] mr-auto"
            alt=""
          />
        </motion.div>
      </AnimatePresence>
      <h1 className="md:hidden  sections-header sm:text-start pl-10 pt-4 w-full">
        <span>02</span> Meet your Crew
      </h1>
    </div>
  );
};

export default Technology;
