// app/bookings/page.tsx — minimal, drop‑in Next.js version
"use client";
import Script from "next/script";
import { useEffect, useRef } from "react";

const DUBSADO_SRC =
  "https://hello.dubsado.com:443/public/appointment-scheduler/6887fac596797393e564b7b6/schedule?isIframe=true";

export default function Bookings() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const iFrameResize = (window as any).iFrameResize;
      if (typeof iFrameResize === "function" && iframeRef.current) {
        iFrameResize(
          { checkOrigin: false, heightCalculationMethod: "taggedElement" },
          iframeRef.current
        );
      }
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="p-6 mx-auto">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
        strategy="afterInteractive"
      />
      <iframe
        ref={iframeRef}
        src={DUBSADO_SRC}
        frameBorder={0}
        style={{ width: "1px", minWidth: "100%" }}
        scrolling="no"
        title="Dubsado Scheduler"
      />
    </div>
  );
}
