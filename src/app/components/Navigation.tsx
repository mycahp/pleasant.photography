/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav when scrolled past ~400px (adjust as needed)
      const scrolled = window.scrollY > 400;
      setIsSticky(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Main Navigation - Always visible at top */}
      <div className="z-10 flex flex-col justify-center items-center mt-4 w-full">
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 w-full font-body text-brand-off-white text-sm md:text-base">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 border border-white/20 border-x-0 w-full">
            <Link
              href="/"
              className="hover:bg-white/20 px-3 py-1 rounded-md text-white hover:underline active:underline underline-offset-4 transition-colors"
            >
              Home
            </Link>
            <div className="self-center bg-white/20 w-px h-6" />

            <Link
              href="/about"
              className="hover:bg-white/20 px-3 py-1 rounded-md text-white hover:underline active:underline underline-offset-4 transition-colors"
            >
              About
            </Link>
            <div className="self-center bg-white/20 w-px h-6" />
            <Link
              href="/contact"
              className="hover:bg-white/20 px-3 py-1 rounded-md text-white hover:underline active:underline underline-offset-4 transition-colors"
            >
              Contact
            </Link>
            <div className="self-center bg-white/20 w-px h-6" />
            <Link
              href="https://focusingscreen.net"
              className="hover:bg-white/20 px-3 py-1 rounded-md text-white hover:underline active:underline underline-offset-4 transition-colors"
            >
              Focusing Screen
            </Link>
            <div className="self-center bg-white/20 w-px h-6" />
            <div className="self-center">
              <a
                href="https://www.flickr.com/photos/mycahpleasant/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center pl-2 hover:text-brand-teal transition-colors"
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
        </div>
        <div className="flex flex-row mt-6">
          <img
            src="https://mycah.pics/mpp_logo_left.png?height=200&format=auto&quality=60"
            alt="Logo"
            className="shadow-xl w-auto max-h-[200px] sm:max-h-[300px]"
          />
          <img
            src="https://mycah.pics/mpp_logo_right.png?height=200&format=auto&quality=60"
            alt="Logo"
            className="shadow-xl w-auto max-h-[200px] sm:max-h-[300px]"
          />
        </div>
        <div className="flex flex-col mb-6 text-center">
          <h1 className="font-header font-extrabold text-[40px] md:text-[50px] text-center tracking-wider">
            MyCah Pleasant
          </h1>
          <h2 className="mt-[-10px] font-header text-[30px] md:text-[40px] tracking-wide">
            Photography
          </h2>
        </div>
      </div>

      {/* Sticky Navigation - Shows when scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b shadow-sm border-brand-teal/30 transition-transform duration-300 mb-4 ${
          isSticky ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-3">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center font-header font-bold text-brand-off-white"
          >
            MyCah Pleasant Photography
          </Link>

          <div className="flex items-center gap-2">
            <div className="md:hidden flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 border border-white/20 rounded-lg">
              <button
                className="mt-[-5px] text-brand-off-white text-xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                ☰
              </button>
              <a
                href="https://www.flickr.com/photos/mycahpleasant/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center pl-2 hover:text-brand-teal transition-colors"
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

          {/* Navigation Links and flickr icon */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <div className="flex flex-wrap gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 border border-white/20 rounded-lg font-body">
              <Link
                href="/"
                className="hover:bg-white/10 px-2 py-1 rounded-md text-brand-off-white hover:underline underline-offset-4 transition-colors"
              >
                Home
              </Link>
              <div className="self-center bg-white/20 w-px h-6" />
              <Link
                href="/about"
                className="hover:bg-white/10 px-2 py-1 rounded-md text-brand-off-white hover:underline underline-offset-4 transition-colors"
              >
                About
              </Link>
              <div className="self-center bg-white/20 w-px h-6" />
              <Link
                href="/contact"
                className="hover:bg-white/10 px-2 py-1 rounded-md text-brand-off-white hover:underline underline-offset-4 transition-colors"
              >
                Contact
              </Link>
              <div className="self-center bg-white/20 w-px h-6" />
              <a
                href="https://focusingscreen.net"
                target="_blank"
                rel="noreferrer"
                className="hover:bg-white/10 px-2 py-1 rounded-md text-brand-off-white hover:underline underline-offset-4 transition-colors"
              >
                Focusing Screen
              </a>
              <div className="self-center bg-white/20 w-px h-6" />
              <a
                href="https://www.flickr.com/photos/mycahpleasant/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-brand-teal transition-colors"
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
        </div>
      </nav>

      {/* Mobile Dropdown Menu (below sticky nav) */}
      {isMenuOpen && isSticky && (
        <div className="md:hidden top-[56px] right-0 left-0 z-40 fixed flex flex-col gap-2 bg-brand-navy/95 backdrop-blur-sm px-5 py-4 border-white/20 border-b rounded-b-lg">
          <Link
            href="/"
            className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://focusingscreen.net"
            target="_blank"
            rel="noreferrer"
            className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
          >
            Focusing Screen
          </a>
        </div>
      )}
    </>
  );
}
