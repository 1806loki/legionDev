const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-black via-gray-500 to-black pt-[1px] z-50 relative">
        <div className="p-4 select-none flex flex-row items-center justify-between bg-black">
          <div className="gap-y-2 flex flex-col">
            <div className="text-sm text-gray-400 select-text">loki.dev</div>
            <div className="text-sm text-gray-400 select-text">
              Mail @ contact@loki.dev
            </div>
            <div className="text-sm text-[#525252]">
              ©Loki Dev. All rights reserved.
            </div>
          </div>
          <div>
            <a href="https://myaddys.net/bugatti">
              <div className="hover:bg-[#d1d1d1] flex flex-row gap-x-2 bg-white w-fit cursor-pointer text-black font-semibold py-[5px] px-[14px] rounded-[4px] text-[14px] select-none ">
                <div className="hidden sm:flex flex-row items-center">
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.25769 1.35248 6.86058 1.92336 7.50002 2.93545C8.13946 1.92336 8.74235 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
