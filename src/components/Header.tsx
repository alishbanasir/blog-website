"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] bg-white mx-auto">
        <div className="container mx-auto">
          <div className="lg:w-4/5 mx-auto p-5 flex justify-between items-center">
            <div className="text-[30px] px-4 font-extrabold text-gray-900">
              <p className="text-[#7C4EE4]">
                <Link href="/">BLOG</Link>
              </p>
            </div>
            <button
              type="submit"
              className="text-black text-3xl lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              &#9776;
            </button>
            <div className="hidden lg:flex gap-7">
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/">Home</Link>
              </div>
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/Blogs">Blogs</Link>
              </div>
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/about">About</Link>
              </div>
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/contactus">Contactus</Link>
              </div>
            </div>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } lg:hidden flex flex-col px-5 items-start w-full bg-white z-50`}
          >
            <div className="flex flex-col px-4 gap-4 w-full">
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/">Home</Link>
              </div>
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/Blogs">Blogs</Link>
              </div>
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/about">About</Link>
              </div>
              <div className="text-[20px] hover:underline hover:text-[#7C4EE4] font-bold text-gray-900">
                <Link href="/contactus">Contactus</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
