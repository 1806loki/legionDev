import { RxRocket } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="w-screen mx-auto flex justify-between px-20 py-3  border-b border-gray-800">
      <h1 className="text-xl font-medium ">LOKI</h1>
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
