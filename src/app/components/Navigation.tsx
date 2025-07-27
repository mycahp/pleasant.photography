/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const linkClass =
  "hover:bg-white/20 px-3 py-1 rounded-md text-white underline-offset-4 transition-colors cursor-pointer";
const dividerClass = "self-center bg-white/20 w-px h-6";

const FlickrIcon = () => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="fill-current h-[18px] text-brand-off-white"
  >
    <path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224s224-100.8 224-224S379.2 32 256 32m-82.16 280A56 56 0 1 1 228 257.84A56 56 0 0 1 173.84 312m168 0A56 56 0 1 1 396 257.84A56 56 0 0 1 341.84 312" />
  </svg>
);

const NavLinks = ({ className = "" }) => (
  <div
    className={`flex flex-wrap justify-center items-center gap-x-1 gap-y-2 sm:gap-x-3 ${className}`}
  >
    <Link href="/" className={linkClass}>
      Home
    </Link>
    <div className={dividerClass} />
    <Link href="/about" className={linkClass}>
      About
    </Link>
    <div className={dividerClass} />
    <Link href="/contact" className={linkClass}>
      Contact
    </Link>
    <div className={dividerClass} />
    <Link
      href="https://focusingscreen.net"
      className={linkClass}
      target="_blank"
      rel="noreferrer"
    >
      Focusing Screen
    </Link>
    <div className={dividerClass} />
    <a
      href="https://www.flickr.com/photos/mycahpleasant/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center pl-2 sm:pl-0 hover:text-brand-teal transition-colors flickr-link"
    >
      <FlickrIcon />
    </a>
  </div>
);

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const offset = navRef.current?.offsetHeight ?? 160;
      const shouldBeSticky = currentScrollY > offset;
      setIsSticky(shouldBeSticky);

      if (!shouldBeSticky) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation - Responsive Layout */}
      <div ref={navRef} className="z-10 mb-4 w-full">
        <div className="bg-white/10 shadow-xl backdrop-blur-sm px-3 sm:px-4 py-3 rounded-b-2xl w-full font-body text-brand-off-white text-sm md:text-base">
          <div className="flex md:flex-row flex-col sm:justify-between sm:items-center gap-3 sm:gap-6 w-full">
            <div className="flex justify-center sm:justify-start p-2">
              <Link href="/" className="flex items-center">
                <img
                  src="https://mycah.pics/mpp_logo_alt_white.png"
                  alt="MyCah Pleasant Photography Logo"
                  className="w-[200px] h-auto shrink-0"
                />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-1 gap-y-2 lg:gap-x-4 pr-2">
              <NavLinks className="gap-x-1 gap-y-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation - Shows when scrolled */}
      <div className="z-50 relative">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b shadow-xl border-brand-teal/30 transition-transform duration-300 ${
            isSticky ? "translate-y-0" : "-translate-y-full"
          } mb-4`}
        >
          <div className="flex justify-between items-center px-5 py-3">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center">
              <img
                src="https://mycah.pics/mpp_logo_alt_white.png"
                alt="MyCah Pleasant Photography Logo"
                className="w-[200px] h-auto shrink-0"
              />
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
                  <FlickrIcon />
                </a>
              </div>
            </div>

            {/* Navigation Links and flickr icon */}
            <div className="hidden md:flex items-center gap-3 ml-auto">
              <div className="flex flex-wrap gap-2 sm:gap-4 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 border border-white/20 rounded-lg font-body">
                <NavLinks />
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu (below sticky nav) */}
        {isMenuOpen && isSticky && (
          <div className="md:hidden top-[95px] right-0 left-0 z-40 fixed flex flex-col gap-2 bg-brand-navy/95 backdrop-blur-sm px-5 py-4 border-white/20 border-b rounded-b-lg">
            <Link
              href="/"
              className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a
              href="https://focusingscreen.net"
              target="_blank"
              rel="noreferrer"
              className="text-brand-off-white hover:underline underline-offset-4 transition-colors"
              onClick={closeMenu}
            >
              Focusing Screen
            </a>
          </div>
        )}
      </div>
    </>
  );
}
