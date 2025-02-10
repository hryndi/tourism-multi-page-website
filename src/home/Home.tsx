const Home = () => {
  return (
    <div
      className=" flex-1 flex items-center h-full max-md:flex-col max-md:text-center
       font-BarlowCondensed  max-md:gap-16"
    >
      <div className="flex-1  flex   md:justify-end 2xl:items-center  items-center md:items-end flex-col ">
        <div className=" max-sm:w-11/12 max-sm:px-1  sm:w-9/12  md:w-10/12 lg:w-9/12 xl:w-8/12  flex flex-col max-sm:gap-3 md:gap-8 ">
          <h1 className="  font-BarlowCondensed max-md:pt-5 text-2xl uppercase  text-gray-300">
            So, you want to travel to
          </h1>
          <span className="xl:text-9xl max-[350px]:text-6xl min-[351px]:text-[7rem] font-Bellefair ">
            SPACE
          </span>
          <p className="font-Barlow  text-lg text-gray-300">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!{" "}
          </p>
        </div>
      </div>
      <div className="basis-0 grow flex items-end justify-center">
        <div>
          <button className="max-md:mb-8 hover:shadow-ExploreBtn transition-all duration-500 cursor-pointer text-4xl font-Bellefair p-10  bg-white text-gray-700 rounded-full aspect-[1]">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
