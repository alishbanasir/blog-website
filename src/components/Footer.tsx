import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="bg-[#7C4EE4]">
        <div className="max-w-[1440px]  mx-auto h-auto bg-[#7C4EE4] flex items-center justify-center">
          <div className="container mx-auto p-5 md:p-20 text-center flex flex-col justify-center items-center">
            <div className="w-full md:w-1/2">
              <h1 className="w-full lg:text-[33px] sm:text-[27px] md:text-[30px] text-white font-bold">
                Get our stories delivered From us to your inbox weekly.
              </h1>
              <div className="flex justify-center gap-2 mt-3 ">
                <input
                  type="email"
                  className="bg-white text-gray-800 focus:outline-none rounded-xl px-4 py-2 text-sm md:text-base w-full md:w-auto flex-grow"
                  placeholder="Enter Your Email"
                />
                <button
                  type="button"
                  className="bg-[#7C4EE4] text-white rounded-xl hover:text-black hover:bg-white hover:border-[#7C4EE4] border hover:underline border-white px-6 py-2 text-sm md:text-base"
                >
                  <Link href="/">Get Started</Link>
                </button>
              </div>
              <p className="text-gray-300 font-normal text-[16px] md:text-[20px] mt-3">
                Get a response tomorrow if you submit by 9pm today. If we
                received after 9pm will get a response the following day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto h-auto bg-[#ffffff]">
          <div className="container mx-auto p-8 justify-center">
            <p className="text-[#7C4EE4] font-extrabold text-[30px] text-center">
              <Link href="/">BLOG</Link>
            </p>

            <div className="md:ml-auto flex flex-wrap gap-10 mt-5 items-center justify-center">
              <div className="text-[15px] hover:underline hover:text-[#7C4EE4] font-normal text-gray-900">
                <Link href="/">Home</Link>
              </div>
              <div className="text-[15px] hover:underline hover:text-[#7C4EE4] font-normal text-gray-900">
                <Link href="/Blogs">Blog</Link>
              </div>
              <div className="text-[15px] hover:underline hover:text-[#7C4EE4] font-normal text-gray-900">
                <Link href="/about">About</Link>
              </div>
              <div className="text-[15px] hover:underline hover:text-[#7C4EE4] font-normal text-gray-900">
                <Link href="/contactus">Contactus</Link>
              </div>
            </div>
            <div className="mt-6 flex gap-4 justify-center items-center">
              <div className="w-12 h-12 flex justify-center items-center text-white bg-[#7C4EE4] rounded-full">
                <Link href="https://www.facebook.com/alishba.nasir.167">
                  FB
                </Link>
              </div>
              <div className="w-12 h-12 flex justify-center items-center text-white bg-[#7C4EE4] rounded-full">
                <Link href="https://www.linkedin.com/in/alishba-nasirr/">
                  LN
                </Link>
              </div>
              <div className="w-12 h-12 flex justify-center items-center text-white bg-[#7C4EE4] rounded-full">
                <Link href="https://github.com/alishbanasir">GH</Link>
              </div>
            </div>

            <hr className="text-gray-800 mt-8 w-full" />
            <p className="text-gray-600 text-[15px] mt-7 text-center">
              Copyright Ideapeel Inc © 2023. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
