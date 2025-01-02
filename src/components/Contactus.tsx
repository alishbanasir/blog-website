import Image from "next/image";
import React from "react";
import Link from "next/link";

const Contactus = () => {
  return (
    <div className="bg-[#E2E2E2]">
      <div className="bg-[#E2E2E2]">
        <div className="max-w-[1440px] h-auto bg-[#E2E2E2] mx-auto">
          <div className="container mx-auto">
            <div className="text-center w-full px-5 justify-center flex flex-wrap align-middle items-center">
              <div className=" lg:w-3/5 md:w-3/5 sm:w-1/2 mt-5">
                <h1 className="text-[35px] font-bold text-black mt-2">
                  Get in Touch
                </h1>

                <div className="  flex justify-center items-center text-center flex-wrap">
                  <p
                    className="text-[14px]  
       text-gray-500 mt-2"
                  >
                    Contact us to publish your content and show ads to our
                    website and get a good reach.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E2E2E2]">
              <div className="max-w-[1440px] mx-auto h-auto bg-[#E2E2E2]">
                <div className="container mx-auto p-10">
                  <div className="flex flex-wrap gap-10 justify-center">
                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 lg:h-1/4 md:h-1/3 sm:h-1/2 hover:bg-white bg-[#E2E2E2] p-10 flex flex-col items-center text-center rounded-lg shadow-2xl">
                      <div className="w-16 h-16 flex justify-center items-center text-white bg-[#7C4EE4] rounded-full mb-4">
                        <Link href="">
                          <Image
                            src="/images/house.png"
                            width={40}
                            height={40}
                            alt="House Icon"
                          />
                        </Link>
                      </div>
                      <p className="text-[#7C4EE4] mt-2 font-semibold text-lg">
                        {" "}
                        <Link href=""> Office</Link>
                      </p>
                      <h1 className="text-[16px] mt-3 leading-6 text-gray-500 font-medium">
                        <Link href=""> Victoria Street,UK</Link>
                      </h1>
                    </div>

                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 lg:h-1/4 md:h-1/3 sm:h-1/2 hover:bg-white bg-[#E2E2E2] p-10 flex flex-col items-center text-center rounded-lg shadow-2xl">
                      <div className="w-16 h-16 flex justify-center items-center text-white bg-[#7C4EE4] rounded-full mb-4">
                        <Link href="">
                          <Image
                            src="/images/email.png"
                            width={45}
                            height={45}
                            className="mt-2"
                            alt="House Icon"
                          />
                        </Link>
                      </div>
                      <p className="text-[#7C4EE4] mt-2 font-semibold text-lg">
                        {" "}
                        <Link href=""> Email</Link>
                      </p>
                      <h1 className="text-[16px] mt-3 leading-6 text-gray-500 font-medium">
                        <Link href=""> hello@abcd.com</Link>
                      </h1>
                    </div>

                    <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 lg:h-1/4 md:h-1/3 sm:h-1/2 hover:bg-white bg-[#E2E2E2] p-10 flex flex-col items-center text-center rounded-lg shadow-2xl">
                      <div className="w-16 h-16 flex justify-center items-center text-white bg-[#7C4EE4] rounded-full mb-4">
                        <Link href="">
                          <Image
                            src="/images/call.png"
                            width={40}
                            height={40}
                            alt="House Icon"
                          />
                        </Link>
                      </div>
                      <p className="text-[#7C4EE4] mt-2 font-semibold text-lg">
                        {" "}
                        <Link href=""> Phone</Link>
                      </p>
                      <h1 className="text-[16px] mt-3 leading-6 text-gray-500 font-medium">
                        <Link href=""> (001) 2342 3451</Link>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex mx-auto w-full justify-center flex-wrap">
                  <Image
                    src="/images/map.png"
                    width={1000}
                    height={1000}
                    className="mt-10 w-full flex  justify-center"
                    alt=""
                  />
                </div>
                <div className="flex w-full flex-wrap  justify-center">
                  <div className=" bg-[#E2E2E2] shadow-2xl  text-gray-900 p-5 rounded-md">
                    <div className="mt-5 mb-5">
                    <div className="flex gap-10 justify-center w-full flex-wrap">
                      <div>
                        <p className="text-[16px] text-gray-900 mx-2">Name</p>
                        <input
                          type="text"
                          required
                          className="py-2 px-6 text-gray-900 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
                          placeholder="enter your name"
                        />
                      </div>
                      <div>
                        <p className="text-[16px] text-gray-900 mx-2">Email</p>
                        <input
                          type="email"
                          required
                          className="py-2 px-6 text-gray-900 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
                          placeholder="enter your email"
                        />
                      </div>
                    </div>

                    <div className="flex gap-10 mt-5 justify-center w-full  flex-wrap">
                      <div>
                        <p className="text-[16px] text-gray-900 mx-2">Phone</p>
                        <input
                          type="number"
                          required
                          className="py-2 px-6 text-gray-900 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
                          placeholder="enter your Phone No"
                        />
                      </div>
                      <div>
                        <p className="text-[16px] text-gray-900 mx-2">Subject</p>
                        <input
                          type="text"
                          required
                          className="py-2 px-6 text-gray-900 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
                          placeholder="enter your subject"
                        />
                      </div>
                    </div>
                    <form className="mt-5">
                      <fieldset>
                        <legend className="text-[16px] text-gray-900 mx-2 mt-5">
                          Message
                        </legend>
                        <textarea
                          placeholder="enter your message"
                          required
                          className="w-full px-2 py-4 text-gray-900 rounded-lg border-2 border-[#E2E2E2] bg-[#E2E2E2] shadow-2xl mt-1 focus:outline-none"
                        ></textarea>
                      </fieldset>
                    </form>

                    <div className="w-full justify-center flex mt-10">
                      <button
                        type="button"
                        className="bg-[#7C4EE4] py-3 px-3 text-white hover:underline hover:bg-[#E2E2E2] border hover:border-[#7C4EE4] hover:text-gray-700 w-40 rounded-xl"
                      >
                        <Link href="">Send Messages</Link>
                      </button>
                    </div>
                  </div>
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
};

export default Contactus;
