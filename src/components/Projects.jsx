const Projects = () => {
  return (
    <div className="w-full justify-center flex mt-5 flex-col items-center">
      <span className="select-none h-[100px] w-[1px] bg-gradient-to-t from-[#7928ca] to-[#000000]" />
      <div className="select-none h-[40px] w-[40px] bg-gradient-to-r from-[#7928ca] to-[#ff0080] rounded-full flex items-center justify-center text-black text-md font-bold">
        2
      </div>
      <div
        id="projects"
        className="select-none bg-gradient-to-r from-[#7928ca] to-[#ff0080] mt-5 text-3xl font-[700] text-clip text-transparent bg-clip-text font-dancing"
      >
        My Projects
      </div>
      <div className="mt-6 font-[700] text-[2rem] sm:text-[3rem] tracking-[-0.1rem] leading-tight text-center">
        Showcasing my creative journey
      </div>
      <div className="mt-10 text-[#cccccc] text-2xl sm:text-4xl font-dancing">
        Cloned Projects
      </div>
      <div className="mt-10 w-full">
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1699545179/portfolio/hypedrop1_vqnkhv.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1699545179/portfolio/hypedrop2_ubeliz.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Clone Website of Hypedrop.com
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Hypedrop</div>
                    <a target="_blank" href="https://hypedrop.netlify.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1694378013/portfolio/stake1_hc6wdy.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1691695545/portfolio/stake2_yu8l51.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Clone Website of Stake.com
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Stake</div>
                    <a target="_blank" href="https://stake-website.vercel.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10  text-[#cccccc] text-2xl sm:text-4xl font-dancing">
        Full Stack Projects
      </div>
      <div className="mt-10 w-full">
        <div className="flex items-center   mx-20 justify-center gap-10 flex-wrap">
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1707057264/portfolio/joiner1_bfsnpi.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1707057264/portfolio/joiner2_hzkajo.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    E-Commerce Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Joiner.Bot</div>
                    <a target="_blank" href="https://joiner.bot">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1707057264/portfolio/termed1_alpau1.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1707057264/portfolio/termed2_pqhghr.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Bio Page Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Am i Termed?</div>
                    <a target="_blank" href="https://amitermed.com">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1696449568/portfolio/solarpanel1_oba1fq.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1696449566/portfolio/solarpanel2_msi7wu.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Shopify E-Commerce
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Sozens Panels</div>
                    <a target="_blank" href="https://sozens.netlify.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1691695543/portfolio/myaddy1_hkwkos.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1691695543/portfolio/myaddy2_uqiwda.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Crypto Bio Page
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">My Addys</div>
                    <a target="_blank" href="https://myaddys.net">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1704384010/portfolio/pulse1_iwulwi.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1704384008/portfolio/pulse2_fnc8ed.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Proxy Selling Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">PulseProxies</div>
                    <a target="_blank" href="https://pulseproxies.com">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1707057264/portfolio/physio1_qy3e1k.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1707057264/portfolio/physio2_h9ykm5.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Physiotherapist Education Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">PhysioHub</div>
                    <a target="_blank" href="https://physiohub.io">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1702589857/portfolio/spotify2_bn0zia.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1702589857/portfolio/spotify1_vkkwer.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    E-Commerce Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">SpotifyX</div>
                    <a target="_blank" href="https://spotifyshop.netlify.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1697142567/portfolio/jokal1_slrokr.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1701899236/portfolio/jokal2_f8g3qs.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Notes &amp; Calculator Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Jokal.App</div>
                    <a target="_blank" href="https://jokalnote.netlify.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-[#cccccc] text-2xl sm:text-4xl font-dancing">
        Landing Pages
      </div>
      <div className="mt-10 w-full">
        <div className="flex items-center  mx-20 justify-center gap-10 flex-wrap">
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1701032574/portfolio/valuegg1_zdrtjl.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1701032573/portfolio/valuegg2_buiqb9.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Gaming Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Value.gg</div>
                    <a target="_blank" href="https://valuegg.netlify.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1694378010/portfolio/lotus1_xkfepy.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1692910055/portfolio/lotus2_qukvdg.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    A Portfolio Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Lotus Studios</div>
                    <a target="_blank" href="https://lotusstudios.vercel.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1694378009/portfolio/xchanger1_oc7ysb.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1691695545/portfolio/xchanger2_qqznzv.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    A Exchanging Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">XChanger</div>
                    <a target="_blank" href="https://xchanger.vercel.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1694378015/portfolio/trendalgo1_appkwj.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1694292647/portfolio/trendalgo2_mkxaod.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    Trading Algorithm Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">TrendAlgo</div>
                    <a target="_blank" href="https://trendalgo.netlify.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1694378013/portfolio/talentempire1_kpxxsc.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1691695544/portfolio/talentempire2_eb3nga.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    A Service Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">Talent Empire</div>
                    <a target="_blank" href="https://talent-empire.vercel.app">
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden">
                  <img
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_one"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1694378010/portfolio/manage1_hbmon8.png"
                  />
                  <img
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width={300}
                    height={200}
                    decoding="async"
                    data-nimg={1}
                    className="image_two"
                    style={{ color: "transparent" }}
                    src="https://res.cloudinary.com/dw6k1ef9f/image/upload/v1693949931/portfolio/manage2_jwaic5.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg">
                  <div className="text-[10px] text-[#9a9a9b]">
                    A Marketing Website
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="text-1xl font-medium">MANAG3 Ads</div>
                    <a
                      target="_blank"
                      href="https://manage-marketing.vercel.app"
                    >
                      <div className="cursor-pointer hover:text-white duration-200 flex flex-row items-center gap-2 bg-[#23a7f2] group-hover:bg-[#1e97dd] text-black text-[12px] px-[10px] py-[4px] rounded-[4px] font-medium">
                        <svg
                          fill="currentColor"
                          width="10px"
                          height="10px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m12.922 16.587-3.671 3.671c-.693.645-1.626 1.041-2.651 1.041-2.152 0-3.896-1.744-3.896-3.896 0-1.025.396-1.958 1.043-2.654l-.002.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-3.671 3.671c-1.108 1.162-1.789 2.74-1.789 4.476 0 3.586 2.907 6.494 6.494 6.494 1.738 0 3.316-.683 4.482-1.795l-.003.002 3.671-3.671c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001z" />
                          <path d="m24.007 6.489c-.002-3.585-2.908-6.491-6.494-6.491-1.793 0-3.417.727-4.592 1.902l-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c.693-.645 1.626-1.041 2.651-1.041 2.152 0 3.896 1.744 3.896 3.896 0 1.025-.396 1.958-1.043 2.654l.002-.002-3.671 3.671c-.259.238-.421.579-.421.958 0 .717.582 1.299 1.299 1.299.379 0 .719-.162.957-.42l.001-.001 3.671-3.671c1.178-1.169 1.908-2.789 1.908-4.58 0-.003 0-.006 0-.009z" />
                          <path d="m7.412 16.592c.235.235.559.38.918.38s.683-.145.918-.38l7.342-7.342c.212-.23.341-.539.341-.878 0-.717-.582-1.299-1.299-1.299-.339 0-.647.13-.879.342l.001-.001-7.342 7.342c-.235.235-.38.559-.38.918s.145.683.38.918z" />
                        </svg>
                        <div>Link</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
