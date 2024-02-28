import { SiLegacygames } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="max-w-screen max-h-screen h-auto py-20 flex flex-col items-center justify-between gap-10">
      <div className="title-container select-none flex flex-col items-center text-center md:flex-row text-[70px]  sm:text-[75px] lg:text-[110px] font-extrabold justify-center w-full">
        <span className="develop w-fit">
          <span className="animated-develop">Contact.</span>
          <div className="develop-shadow" />
        </span>
        <span className="ship w-fit">
          <span className="animated-ship">Deliver.</span>
          <div className="ship-shadow" />
        </span> 
        <span className="preview w-fit">
          <span className="animated-preview">Build.</span>
          <div className="preview-shadow" />
        </span>
      </div>

      <p className="text-center text-gray-400 text-xl mb-8 w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
        consectetur ab facere porro, qui, odit dolore labore harum obcaecati
        suscipit quis veniam in cupiditate rem esse, dolores mollitia unde
        incidunt?
      </p>
      <div className="flex space-x-4 gap-10">
        <button className="px-4 py-3 bg-blue-500 text-white rounded flex items-center justify-center w-[200px]  hover:bg-blue-600">
          <i className="mr-5 h-5">
            <SiLegacygames />
          </i>
          Projects
        </button>
        <button className="px-4 py-3 bg-blue-500 text-white rounded flex items-center justify-center w-[200px]  hover:bg-blue-600">
          <i className="mr-5 h-5">
            <BsDiscord />
          </i>
          Contact me
        </button>
      </div>
      <p className="text-2xl font-medium">
        Bringing ideas to life, one project at a time.
      </p>
    </div>
  );
};

export default Hero;



