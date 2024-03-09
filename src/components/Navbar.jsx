import { RxRocket } from "react-icons/rx";
import l from "../assets/fontbolt (4).png";
import o from "../assets/fontbolt (5).png";
import k from "../assets/fontbolt (7).png";
import i from "../assets/fontbolt (6).png";
import symbol from "../assets/612958f0a7c90ea7642e0cee5064a14a.jpg";

const Navbar = () => {
  return (
    <div className="w-screen mx-auto flex justify-between px-20 py-3  border-b border-gray-800">
      <div className="flex items-center">
        <img src={l} alt="l" className="h-8 " />
        <img src={o} alt="o" className="h-8" />
        <img src={k} alt="k" className="h-8" />
        <img src={i} alt="i" className="h-8" />
        <img src={symbol} alt="" className="h-12   " />
      </div>
      <button className="rounded bg-gray-100 text-gray-900 font-medium flex items-center cursor-pointer justify-between px-3 py-1 hover:bg-gray-300">
        <i className="mr-2">
          <RxRocket />
        </i>
        Hire me
      </button>
    </div>
  );
};

export default Navbar;
