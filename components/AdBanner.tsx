"use client";

import React, { useEffect } from "react";

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  fullWidthResponsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdBanner({ 
  dataAdSlot, 
  dataAdFormat = "auto", 
  fullWidthResponsive = true 
}: AdBannerProps) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  const resolvedSlot = React.useMemo(() => {
    if (dataAdSlot === "top") {
      return process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP || dataAdSlot;
    }
    if (dataAdSlot === "middle") {
      return process.env.NEXT_PUBLIC_ADSENSE_SLOT_MIDDLE || dataAdSlot;
    }
    if (dataAdSlot === "bottom") {
      return process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM || dataAdSlot;
    }
    return dataAdSlot;
  }, [dataAdSlot]);

  useEffect(() => {
    // Only push if AdSense is loaded and ID exists
    if (typeof window !== "undefined" && adsenseId) {
      const pushAd = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.error("AdSense push error:", err);
        }
      };

      // Small timeout to ensure the DOM element has settled and has width
      const timer = setTimeout(pushAd, 500);
      return () => clearTimeout(timer);
    }
  }, [adsenseId]);

  if (!adsenseId) {
    // Show a placeholder in development if ID is missing
    if (process.env.NODE_ENV === "development") {
      return (
        <div className="w-full flex justify-center py-8">
          <div className="w-full max-w-[728px] h-[52px] bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 font-bold text-xs uppercase tracking-widest">
            AdSense Placeholder ({resolvedSlot})
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className="w-full flex justify-center py-8 min-h-[52px]">
      <ins
        className="adsbygoogle"
        style={{ display: "block", minWidth: "250px", width: "100%" }}
        data-ad-client={adsenseId}
        data-ad-slot={resolvedSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}
