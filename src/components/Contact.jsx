import arrow from "../assets/arrowleft.gif";
import squarelines from "../assets/squarelines.99d1a709.svg";
import blueHair from "../assets/Blue Hair Boy.png";
import loki from "../assets/loki-removebg-preview.png"

const Contact = () => {
  return (
    <div className="w-full justify-center flex mt-5 flex-col items-center">
      <span className="select-none h-[100px] w-[1px] bg-gradient-to-t from-[#ff4d4d] to-[#000000]" />
      <div className="select-none h-[40px] w-[40px] bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] rounded-full flex items-center justify-center text-black text-md font-bold">
        3
      </div>
      <div
        id="contacts"
        className="select-none bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] mt-5 text-3xl font-[700] text-clip text-transparent bg-clip-text font-dancing"
      >
        My Contacts
      </div>
      <div className="mt-6 font-[700] text-[2rem] sm:text-[3rem] tracking-[-0.1rem] leading-tight text-center">
        We are all connected
      </div>
      <div className="mt-5 text-[#cccccc] text-2xl sm:text-4xl font-dancing">
        Let&apos;s Connect
      </div>
      <div className="mt-10 w-full">
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="absolute bottom-0 h-[600px] w-[1366px]">
            <img
              alt="square lines"
              draggable="false"
              loading="lazy"
              width={2202}
              height={1001}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src={squarelines}
            />
          </div>
          <div className="w-fit flex flex-col items-center justify-center relative">
            <div className="hidden sm:flex absolute z-30 top-0 -right-[160px]">
              <img
                alt="arrow left"
                loading="lazy"
                width={180}
                height={180}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src={arrow}
              />
            </div>
            <div className="hidden sm:flex absolute z-30 top-0 -left-[160px] flip-horizontal">
              <img
                alt="arrow left"
                loading="lazy"
                width={180}
                height={180}
                decoding="async"
                data-nimg={1}
                className="transform scale-x-[-1]"
                style={{ color: "transparent" }}
                src={arrow}
              />
            </div>
            <div className="mt-4 statusgg relative select-none">
              <a href="https://discordapp.com/users/972908003466555413">
                <div className="relative bg-white px-[1.5px] py-[1.5px] h-full w-full cursor-pointer duration-200 flex flex-row items-center justify-center font-[500] gap-x-3  text-black rounded-[50px]">
                  <div className="orange-animated-border-btn h-full w-full rounded-[50px]" />
                  <div className="animated-shadow-border-orange" />
                  <div className="flex w-full flex-row justify-center items-center font-[400] z-20 duration-200 hover:text-black rounded-[50px] text-white bg-[#212121]">
                    <img
                      draggable="false rounded-[50px] relative z-50"
                      alt="image"
                      loading="lazy"
                      width={350}
                      height={100}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      srcSet="/_next/image?url=https%3A%2F%2Fapi.status.gg%2Fdiscord%2F972908003466555413&w=384&q=75&dpl=dpl_6xWdhbFT2uAwkMjJ5XQjFJRxMyCJ 1x, /_next/image?url=https%3A%2F%2Fapi.status.gg%2Fdiscord%2F972908003466555413&w=750&q=75&dpl=dpl_6xWdhbFT2uAwkMjJ5XQjFJRxMyCJ 2x"
                      src="/_next/image?url=https%3A%2F%2Fapi.status.gg%2Fdiscord%2F972908003466555413&w=750&q=75&dpl=dpl_6xWdhbFT2uAwkMjJ5XQjFJRxMyCJ"
                    />
                  </div>
                </div>
              </a>
            </div>
            <a className="mt-14" href="https://t.me/legiondev">
              <div className="relative bg-white p-[1px] h-full w-full cursor-pointer duration-200 flex flex-row items-center justify-center font-[500] gap-x-3  text-black rounded-[50px]">
                <div className="telegram-border h-full w-full rounded-[50px]" />
                <div className="telegram-shadow-border" />
                <div className="flex w-full flex-row justify-center items-center font-[400] z-20 duration-200 hover:text-black rounded-[50px] text-white bg-[#212121]">
                  <div className="bg-[#000000] h-[50px] w-[200px] rounded-full flex flex-row items-center">
                    <div className="ml-1 h-10 w-10">
                      <svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx={16}
                          cy={16}
                          r={14}
                          fill="url(#paint0_linear_87_7225)"
                        />
                        <path
                          d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_87_7225"
                            x1={16}
                            y1={2}
                            x2={16}
                            y2={30}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#37BBFE" />
                            <stop offset={1} stopColor="#007DBB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="mx-auto text-[#00d3ff] font-semibold">
                      @legiondev
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="select-none relative z-20 mt-10">
            <img
              draggable="false"
              alt="Blue hair image"
              loading="lazy"
              width={390}
              height={390}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src={loki}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
