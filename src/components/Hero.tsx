import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#E2E2E2]">
      {/* section1 */}
      <div className="bg-[#7C4EE4]">
        <div className="max-w-[1440px] h-auto bg-[#7C4EE4] mx-auto">
          <div className="container mx-auto">
            <div className="lg:w-4/5 mx-auto p-8 flex flex-wrap">
              <div className="lg:w-1/2 mt-3 w-full  lg:h-auto h-64 object-cover object-center rounded-xl">
                <Image
                  src="/images/img1.png"
                  alt="Image 1"
                  width={300}
                  height={300}
                  className="rounded-xl"
                />
              </div>
              <div className="lg:w-1/2 w-full mt-4 md:mt-4 lg:mt-3 lg:py-6">
                <h1 className="text-[33px] font-bold  md:text-[25px] text-white mt-2">
                  How AI will Change the Future
                </h1>
                <p className="leading-relaxed text-[15px] mt-2 text-white">
                  Artificial Intelligence (AI) is no longer a concept of the
                  distant future—it here and rapidly transforming the way we
                  live, work, and interact with the world. From smart assistants
                  to autonomous vehicles, AI is driving innovation across
                  industries and reshaping our society.
                </p>
                <p className="border hover:underline md:text-[15px] xl:text-[18px] border-[#7C4EE4] text-[#7C4EE4] bg-[#E2E2E2] p-2 rounded-xl mt-4 text-center w-1/4 cursor-pointer hover:bg-[#7C4EE4] hover:border-white hover:text-white transition-all">
                  <Link href="/hero/how-ai-will-change-the-future">
                    <button className="hover:underline" type="submit">
                      Read More
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1440px] mx-auto h-auto bg-[#E2E2E2] p-8">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center relative">
              <div className="bg-[#E2E2E2] p-6 lg:p-6 rounded-3xl shadow-lg lg:w-[50%] w-full lg:absolute lg:top-[80%] lg:left-[40%] transform lg:-translate-y-1/2">
                <div className="flex flex-wrap gap-4 justify-start">
                  <h2 className="text-[18px] text-[#7C4EE4] font-medium">
                    Development
                  </h2>
                  <h2 className="text-[18px] text-gray-400">16 March 2024</h2>
                </div>
                <div className="leading-relaxed text-[15px] mt-3">
                  <h1 className="text-[20px] font-bold text-black">
                    How to make a Game look more attractive with New VR & AI
                    Technology
                  </h1>
                  <p>
                    Virtual Reality (VR) and Artificial Intelligence (AI) are
                    revolutionizing the gaming industry by creating immersive,
                    visually stunning experiences. VR lets players explore
                    realistic virtual worlds with lifelike lighting, textures,
                    and controllers, making every moment feel like an authentic
                    adventure.
                  </p>
                  <p className="border hover:underline border-[#7C4EE4] text-[#7C4EE4] bg-[#E2E2E2] p-2 rounded-xl mt-5 text-center w-1/4 cursor-pointer hover:bg-[#7C4EE4] hover:text-white transition-all">
                    <Link href="/hero2/How-to-make-a-Game-look-more-attractive-with-New-VR-&-AI-Technology">
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
              <Image
                src="/images/container.png"
                className="w-full lg:w-[80%] bg-[#7C4EE4] border-[1px] border-[#7C4EE4] rounded-t-3xl rounded-3xl"
                alt="container"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1440px] mx-auto h-auto bg-[#E2E2E2]">
          <div className="container mx-auto">
            <div className="lg:w-4/5 mt-8 mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
              <div className="text-[30px] font-extrabold flex title-font items-center text-gray-900 mb-4 md:mb-0 ">
                <h1 className="text-[30px] font-bold md:ml-auto ">
                  Our Recent Post
                </h1>
              </div>
              <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <p className="border hover:underline border-[#7C4EE4] text-[#fff] bg-[#7C4EE4] py-2 rounded-xl   text-center px-6 cursor-pointer hover:text-[#7C4EE4] hover:border-[#7C4EE4] hover:bg-[#E2E2E2] transition-all">
                  <Link href={`/Blogs/`}>View All</Link>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap w-4/5 mx-auto">
              <div className="lg:w-1/2 w-full  lg:pl-5 lg:mt-0 lg:py-6">
                <h1 className="text-[30px] font-bold text-black">
                  How to make a Game look more attractive with New VR & AI
                  Technology
                </h1>
                <p className="leading-relaxed text-[15px] mt-3 text-black">
                  Google has been investing in AI for many years and bringing
                  its benefits to individuals, businesses and communities.
                  Whether it publishing state-of-the-art research, building
                  helpful products or developing tools and resources that enable
                  others, we are committed to making AI accessible to everyone.
                </p>
                <p className="border hover:underline border-[#7C4EE4] text-[#7C4EE4] bg-[#E2E2E2] p-2 rounded-xl mt-5 text-center w-1/4 cursor-pointer hover:bg-[#7C4EE4] hover:border-white hover:text-white transition-all">
                  <Link href="/hero2/How-to-make-a-Game-look-more-attractive-with-New-VR-&-AI-Technology">
                    Read More
                  </Link>
                </p>
              </div>
              <div className="lg:w-1/2 sm:w-full md:w-full mt-8 w-full object-center rounded lg:h-auto object-cover ">
                <Image
                  src="/images/container.png"
                  width={550}
                  height={500}
                  alt="container"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1440px] mx-auto h-auto bg-[#E2E2E2]">
          <div className="container mx-auto p-10">
            <div className="flex flex-wrap gap-10 justify-center">
              <div className="lg:w-1/4 md:w-1/3 sm:w-1/2  rounded-lg shadow-xl">
                <div className="w-full">
                  <Image
                    src="/images/tree.png"
                    className="w-full object-cover"
                    width={400}
                    height={400}
                    alt=""
                  />
                  <div className="px-3 py-4 w-full ">
                    <div className="flex mt-6 gap-5">
                      <p className="text-[12px] text-blue-700">Travel</p>
                      <p className="text-[12px] text-gray-500">13 March 2023</p>
                    </div>
                    <h1 className="text-[20px] mt-3 leading-7 text-black font-bold">
                      8 Rules of Travelling In Sea You Need To Know
                    </h1>
                    <p className="text-[12px] mt-2 text-gray-600">
                      Break free from procrastination and take charge of your
                      time! Discover practical tips to build focus, overcome
                      delays, and achieve your goals with greater efficiency.
                    </p>
                    <p className="text-[14px] p-1 mt-2  text-blue-800 hover:underline">
                      <Link href="/Blogs/8-Rules-of-Travelling-In-Sea-You-Need-To-Know">
                        Read More...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/3 sm:w-1/2  rounded-lg shadow-xl">
                <div className="w-full">
                  <Image
                    src="/images/pc.png"
                    className="w-full object-cover"
                    height={400}
                    width={400}
                    alt="pc"
                  />
                  <div className="px-3 py-4 w-full ">
                    <div className="flex mt-6 gap-5">
                      <p className="text-[12px] text-blue-700">Development</p>
                      <p className="text-[12px] text-gray-500">13 March 2023</p>
                    </div>
                    <h1 className="text-[20px] mt-3 leading-7 text-black font-bold">
                      How to build portfolio and get a Job in UI/UX
                    </h1>
                    <p className="text-[12px] mt-2 text-gray-600">
                      Capitalize on low hanging fruit to identify a ballpark
                      value added activity to beta test. Override the digital
                      divide with additional clickthroughs from{" "}
                    </p>
                    <p className="text-[14px] p-1 mt-2  text-blue-800 hover:underline">
                      <Link href="/Blogs/How-to-build-portfolio-and-get-a-Job-in-ui-ux">
                        Read More...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/3 sm:w-1/2  rounded-lg shadow-xl ">
                <div className="w-full">
                  <Image
                    src="/images/ball.png"
                    className="w-full object-cover"
                    height={400}
                    width={400}
                    alt="ball"
                  />
                  <div className="px-3 py-4 w-full ">
                    <div className="flex mt-6 gap-5">
                      <p className="text-[12px] text-blue-700">Sports</p>
                      <p className="text-[12px] text-gray-500">13 March 2023</p>
                    </div>
                    <h1 className="text-[20px] mt-3 leading-7 text-black font-bold">
                      How to Be a Best Footballer in 2023
                    </h1>
                    <p className="text-[12px] mt-2 text-gray-600">
                      Organically grow the holistic world view of disruptive
                      innovation via workplace diversity and empowerment.
                      survival strategies to ensure proactive
                    </p>
                    <p className="text-[14px] p-1 mt-2  text-blue-800 hover:underline">
                      <Link href="/Blogs/How-to-Be-a-Professional-Footballer-in-2023">
                        Read More...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5*/}
      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1440px] mx-auto h-auto bg-[#E2E2E2]">
          <div className="container mx-auto">
            <div className="lg:w-4/5 mt-3 mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
              <div className="text-[30px] font-extrabold flex title-font items-center text-gray-900 mb-4 md:mb-0 ">
                <h1 className="text-[30px] font-bold md:ml-auto ">
                  Popular Post
                </h1>
              </div>
              <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <p className="border hover:underline border-[#7C4EE4] text-[#fff] bg-[#7C4EE4] py-2 rounded-xl  text-center px-6 cursor-pointer hover:text-[#7C4EE4] hover:border-[#7C4EE4] hover:bg-[#E2E2E2] transition-all">
                  <Link href={`/Blogs/`}>View All</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scetion 6 */}
      <div className="bg-[#E2E2E2] ">
        <div className="max-w-[1440px] mx-auto h-auto bg-[#E2E2E2]">
          <div className="container mx-auto p-10">
            <div className="flex flex-wrap gap-10 justify-center">
              <div className="lg:w-1/4 md:w-1/3 sm:w-1/2  rounded-lg shadow-xl">
                <div className="w-full">
                  <Image
                    src="/images/human2.png"
                    className="w-full object-cover"
                    height={400}
                    width={400}
                    alt="human2"
                  />
                  <div className="px-3 py-4 w-full ">
                    <div className="flex mt-6 gap-5">
                      <p className="text-[12px] text-blue-700">Travel</p>
                      <p className="text-[12px] text-gray-500">13 March 2023</p>
                    </div>
                    <h1 className="text-[20px] mt-3 leading-7 text-black font-bold">
                      Who is the best singer on chart?Know him?
                    </h1>
                    <p className="text-[12px] mt-2 text-gray-600">
                      Olivia Rodrigo, known for her emotional ballads and
                      powerful vocals, has dominated the charts since drivers
                      and alternative sounds.
                    </p>
                    <p className="text-[14px] p-1 mt-2  text-blue-800 hover:underline">
                      <Link href="/Blogs/Who-is-the-best-singer-on-chart-Know-him">
                        Read More...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/3 sm:w-1/2   rounded-lg shadow-xl">
                <div className="w-full">
                  <Image
                    src="/images/human3.png"
                    className="w-full object-cover"
                    height={400}
                    width={400}
                    alt="human3"
                  />
                  <div className="px-3 py-4 w-full ">
                    <div className="flex mt-6 gap-5">
                      <p className="text-[12px] text-blue-700">Development</p>
                      <p className="text-[12px] text-gray-500">13 March 2023</p>
                    </div>
                    <h1 className="text-[20px] mt-3 leading-7 text-black font-bold">
                      How to start export import from home?
                    </h1>
                    <p className="text-[12px] mt-2 text-gray-600 ">
                      Starting an export-import business from home offers global
                      opportunities. you can efficiently manage this business
                      without stepping out.
                    </p>
                    <p className="text-[14px] p-1 mt-2  text-blue-800 hover:underline">
                      <Link href="/Blogs/How-to-start-export-import-business-from-home">
                        Read More...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/4 md:w-1/3 sm:w-1/2   rounded-lg shadow-xl">
                <div className="w-full">
                  <Image
                    src="/images/chocolate.png"
                    className="w-full object-cover"
                    height={400}
                    width={400}
                    alt="chocolate"
                  />
                  <div className="px-3 py-4 w-full ">
                    <div className="flex mt-6 gap-5">
                      <p className="text-[12px] text-blue-700">Sports</p>
                      <p className="text-[12px] text-gray-500">13 March 2023</p>
                    </div>
                    <h1 className="text-[20px] mt-3 leading-7 text-black font-bold">
                      Make some drinks with chocolates and milk
                    </h1>
                    <p className="text-[12px] mt-2 text-gray-600">
                      Organically grow the holistic world view of disruptive
                      innovation via workplace diversity and empowerment.
                      survival strategies to ensure proactive
                    </p>
                    <p className="text-[14px] p-1 mt-2  text-blue-800 hover:underline">
                      <Link href="/Blogs/Make-some-drinks-with-chocolates-and-milk">
                        Read More...
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
