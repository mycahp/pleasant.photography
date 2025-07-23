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
      <div className="z-10 flex flex-col justify-center items-center gap-6 mt-2 md:mt-10 mb-2 md:mb-5 p-5 w-full">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-auto max-h-[200px] sm:max-h-[300px]"
        />

        <div className="flex flex-row gap-1 font-body text-brand-off-white">
          {/* <Link
            href="/"
            className="hover:text-brand-teal underline transition-colors"
          >
            Home
          </Link>
          | */}
          {/* <Link
            href="/about"
            className="hover:text-brand-teal underline transition-colors"
          >
            About
          </Link> */}
          {/* | */}
          {/* <Link
            href="/contact"
            className="hover:text-brand-teal underline transition-colors"
          >
            Contact
          </Link> */}
          {/* | */}
          <a
            href="https://www.flickr.com/photos/mycahpleasant/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-teal underline transition-colors"
          >
            Flickr
          </a>
          {/* |
          <a
            href="https://focusingscreen.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-teal underline transition-colors"
          >
            Focusing Screen
          </a> */}
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
            {/* <Link href="/" className="hover:text-brand-teal transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-brand-teal transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-brand-teal transition-colors"
            >
              Contact
            </Link> */}
            <a
              href="https://www.flickr.com/photos/mycahpleasant/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-teal transition-colors"
            >
              Flickr
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
