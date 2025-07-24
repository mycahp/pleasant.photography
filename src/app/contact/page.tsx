"use client";

import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
function Contact() {
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSuccess(params.get("success"));
  }, []);

  return (
    <div className="flex justify-center bg-brand-off-white shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.1)] mb-5 p-4 border-b-8 border-b-brand-teal rounded-t-2xl w-full h-full">
      <div className="flex flex-col justify-center gap-8 w-[90%] lg:w-[75%]">
        {success && (
          <div className="font-semibold text-brand-indigo">
            Thanks! Your message has been sent.
          </div>
        )}
        <div>
          <h2 className="font-bold text-brand-teal text-2xl">Contact Me</h2>
          <p className="font-body text-brand-navy">
            If you're looking to hire me, collaborate, license an image, or just
            have a question -- feel free to reach out. I check messages often
            and typically reply within a day or two. Keep it simple, and I'll do
            the same.
          </p>
        </div>
        <form
          action="https://formsubmit.co/21a2d3821e2ccceec6574acda31f2e16"
          method="POST"
          className="space-y-6 w-full font-body text-brand-navy"
        >
          {/* Optional hidden inputs */}
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thanks for your message! I’ll be in touch soon."
          />
          <input
            type="hidden"
            name="_next"
            value="https://pleasant.photography/contact?success=true"
          />

          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="px-4 py-2 border border-brand-navy rounded-md focus:outline-none focus:ring-2 focus:ring-brand-navy w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="px-4 py-2 border border-brand-navy rounded-md focus:outline-none focus:ring-2 focus:ring-brand-navy w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="px-4 py-2 border border-brand-navy rounded-md focus:outline-none focus:ring-2 focus:ring-brand-navy w-full"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-brand-navy hover:bg-brand-navy/90 px-6 py-2 rounded-md text-white transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
