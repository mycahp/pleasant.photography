/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav when scrolled past ~400px (adjust as needed)
      const scrolled = window.scrollY > 400;
      setIsSticky(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation - Always visible at top */}
      <div className="z-10 flex flex-col justify-center items-center mt-2 md:mt-10 mb-2 md:mb-5 p-5 w-full">
        <img
          src="https://mycah.pics/mpp_logo_small.png?height=200&format=auto&quality=60"
          alt="Logo"
          className="w-auto max-h-[200px] sm:max-h-[300px]"
        />
        <div className="flex flex-col mb-6 text-center">
          <h1 className="font-body font-bold text-[42px] tracking-widest">
            MyCah Pleasant
          </h1>
          <h2 className="mt-[-10px] font-header text-[30px] tracking-wide">
            Photography
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 font-body text-brand-off-white text-sm md:text-base">
          <Link
            href="/"
            className="hover:text-brand-teal underline transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand-teal underline transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://www.flickr.com/photos/mycahpleasant/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-brand-teal transition-colors"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current h-[18px] text-brand-off-white"
            >
              <path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312" />
            </svg>
          </a>
        </div>
      </div>

      {/* Sticky Navigation - Shows when scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b shadow-sm border-brand-teal/30 transition-transform duration-300 ${
          isSticky ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-3">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center font-header font-bold">
            MyCah Pleasant Photography
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 font-body text-brand-off-white text-sm">
            <Link href="/" className="hover:text-brand-teal transition-colors">
              Home
            </Link>
            {/* <Link
              href="/about"
              className="hover:text-brand-teal transition-colors"
            >
              About
            </Link> */}
            <Link
              href="/contact"
              className="hover:text-brand-teal transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://www.flickr.com/photos/mycahpleasant/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-teal transition-colors"
            >
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-[18px] text-brand-off-white"
              >
                <path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312" />
              </svg>
            </a>
            {/* <a
              href="https://focusingscreen.net"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-teal transition-colors"
            >
              Focusing Screen
            </a> */}
          </div>
        </div>
      </nav>
    </>
  );
}
