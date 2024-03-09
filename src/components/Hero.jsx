import drop from "../assets/drop.355b3101.svg";
import lines from "../assets/Lines.png"

const Hero = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center scroll-smooth">
        <div className="container flex flex-col items-center">
          <div>
            <div className="mt-[2em] sm:mt-[6em]">
              <div className="title-container select-none flex flex-col items-center text-center md:flex-row text-[70px]  sm:text-[75px] lg:text-[110px] font-extrabold justify-center w-full">
                <span className="develop w-fit">
                  <span className="animated-develop">Dream.</span>
                  <div className="develop-shadow" />
                </span>
                <span className="preview w-fit">
                  <span className="animated-preview">Develop.</span>
                  <div className="preview-shadow" />
                </span>
                <span className="ship w-fit">
                  <span className="animated-ship">Deliver.</span>
                  <div className="ship-shadow" />
                </span>
              </div>
            </div>
          </div>
          <div className="absolute w-full flex justify-center top-10">
            <img
              draggable="false"
              alt="lines"
              loading="lazy"
              width={897}
              height={599}
              decoding="async"
              data-nimg={1}
               style={{ color: "transparent" }}
              src={lines}
            />
          </div>
          <div className="mt-5 sm:mt-10 text-center flex justify-center w-full sm:text-xl text-[#9b9b9b]">
            <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
              Hey, I&apos;m LEGION, an experienced web developer with a
              portfolio showcasing visually appealing and user-friendly
              websites. Let&apos;s bring your ideas to life!
            </div>
          </div>
          <div className="w-full flex justify-center flex-row items-center mt-10">
            <div className="select-none flex flex-col w-full sm:w-fit px-[10%] sm:px-0 sm:flex-row gap-x-10 gap-y-6">
              <a href="/#projects">
                <div>
                  <div>
                    <div className="z-[20] relative dripping-btn group cursor-pointer duration-200 flex flex-row items-center justify-center font-[500] gap-x-3 px-[30px] py-[10px] bg-white text-black rounded-[5px]">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:rotate-90 duration-200"
                      >
                        <path
                          d="M4.67129 3.14634C4.47603 3.34161 4.47603 3.65819 4.67129 3.85345L7.14616 6.32833C7.34142 6.52359 7.65801 6.52359 7.85327 6.32833L10.3281 3.85345C10.5234 3.65819 10.5234 3.34161 10.3281 3.14634L7.85327 0.671471C7.65801 0.476209 7.34142 0.476209 7.14616 0.671471L4.67129 3.14634ZM7.49971 5.26766L5.73195 3.4999L7.49971 1.73213L9.26748 3.4999L7.49971 5.26766ZM8.67129 7.14634C8.47603 7.34161 8.47603 7.65819 8.67129 7.85345L11.1462 10.3283C11.3414 10.5236 11.658 10.5236 11.8533 10.3283L14.3281 7.85345C14.5234 7.65819 14.5234 7.34161 14.3281 7.14634L11.8533 4.67147C11.658 4.47621 11.3414 4.47621 11.1462 4.67147L8.67129 7.14634ZM11.4997 9.26766L9.73195 7.4999L11.4997 5.73213L13.2675 7.4999L11.4997 9.26766ZM4.67129 11.8535C4.47603 11.6582 4.47603 11.3416 4.67129 11.1463L7.14616 8.67147C7.34142 8.47621 7.65801 8.47621 7.85327 8.67147L10.3281 11.1463C10.5234 11.3416 10.5234 11.6582 10.3281 11.8535L7.85327 14.3283C7.65801 14.5236 7.34142 14.5236 7.14616 14.3283L4.67129 11.8535ZM5.73195 11.4999L7.49971 13.2677L9.26748 11.4999L7.49971 9.73213L5.73195 11.4999ZM0.671288 7.14649C0.476026 7.34175 0.476026 7.65834 0.671288 7.8536L3.14616 10.3285C3.34142 10.5237 3.65801 10.5237 3.85327 10.3285L6.32814 7.8536C6.5234 7.65834 6.5234 7.34175 6.32814 7.14649L3.85327 4.67162C3.65801 4.47636 3.34142 4.47636 3.14616 4.67162L0.671288 7.14649ZM3.49972 9.26781L1.73195 7.50005L3.49972 5.73228L5.26748 7.50005L3.49972 9.26781Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>Projects</div>
                      <div className="hidden sm:flex">
                        <div>
                          <div className="z-[5] absolute left-[10px] -bottom-5 rounded-full h-6 w-[6px] bg-white" />
                          <div className="w-4 h-4 bg-white absolute bottom-[-16.2px] -left-[5px] overflow-hidden">
                            <div className="h-[25px] w-[25px] absolute bg-black rounded-full left-[-8px] bottom-[-8px]" />
                          </div>
                          <div className="w-4 h-4 bg-white absolute bottom-[-16.2px] left-4 overflow-hidden">
                            <div className="h-[25px] w-[25px] absolute bg-black rounded-full right-[-8px] bottom-[-8px]" />
                          </div>
                        </div>
                        <div className="absolute bottom-[0px] right-[60px]">
                          <div className="z-[5] absolute left-[10px] -bottom-3 rounded-full h-6 w-[6px] bg-white" />
                          <div className="w-4 h-4 bg-white absolute bottom-[-16.2px] -left-[4px] overflow-hidden">
                            <div className="h-[25px] w-[25px] absolute bg-black rounded-full left-[-8px] bottom-[-8px]" />
                          </div>
                          <div className="w-4 h-4 bg-white absolute bottom-[-16.2px] left-[14px] overflow-hidden">
                            <div className="h-[25px] w-[25px] absolute bg-black rounded-full right-[-8px] bottom-[-8px]" />
                          </div>
                        </div>
                        <div className="absolute right-[25px] bottom-0">
                          <div className="z-[5] absolute left-[10px] -bottom-8 rounded-full h-10 w-[6px] bg-white" />
                          <div className="w-4 h-4 bg-white absolute bottom-[-16.2px] -left-[5px] overflow-hidden">
                            <div className="h-[25px] w-[25px] absolute bg-black rounded-full left-[-8px] bottom-[-8px]" />
                          </div>
                          <div className="w-4 h-4 bg-white absolute bottom-[-15px] left-4 overflow-hidden">
                            <div className="h-[25px] w-[25px] absolute bg-black rounded-full right-[-8px] bottom-[-8px]" />
                          </div>
                        </div>
                        <div className="z-[10] h-3 w-3 absolute first-drop-animation">
                          <img
                            alt="drop"
                            loading="lazy"
                            width={800}
                            height={800}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src={drop}
                          />
                        </div>
                        <div className="z-[10] h-3 w-3 absolute second-drop-animation">
                          <img
                            alt="drop"
                            loading="lazy"
                            width={800}
                            height={800}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src={drop}
                          />
                        </div>
                        <div className="z-[10] h-3 w-3 absolute third-drop-animation">
                          <img
                            alt="drop"
                            loading="lazy"
                            width={800}
                            height={800}
                            decoding="async"
                            data-nimg={1}
                            style={{ color: "transparent" }}
                            src={drop}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/#contacts">
                <div className="h-full w-full">
                  <div className="relative bg-white px-[1px] py-[1px] h-full w-full cursor-pointer duration-200 flex flex-row items-center justify-center font-[500] gap-x-3  text-black rounded-[5px]">
                    <div className="develop-animated-border-btn h-full w-full rounded-[5px]" />
                    <div className="preview-animated-border-btn h-full w-full rounded-[5px]" />
                    <div className="ship-animated-border-btn h-full w-full rounded-[5px]" />
                    <div className="animated-shadow-border-develop" />
                    <div className="animated-shadow-border-preview" />
                    <div className="animated-shadow-border-ship" />
                    <div className="flex w-full flex-row justify-center items-center gap-x-4 font-[400] z-20 duration-200 hover:bg-transparent hover:text-black px-[29px] py-[9px] rounded-[5px] text-white bg-black">
                      <div>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div>Contact Me</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full justify-center flex mt-24">
            <div className="text-[16px] font-bold text-[#ffffff] text-center px-4 sm:px-0">
              WINNER OF THE NEXT.JS CONF COMPETITION, WON OUT OF 100 PEOPLE IN
              THE WORLD.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
