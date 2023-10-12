"use client";

import HTMLFlipBook from "react-pageflip";

export default function Book({ children }: { children: any }) {
  return (
    <HTMLFlipBook
      width={320}
      height={500}
      size="fixed"
      minWidth={315}
      maxWidth={600}
      minHeight={400}
      maxHeight={800}
      showPageCorners
      usePortrait
      drawShadow
      maxShadowOpacity={0.5}
      className="relative"
    >
      {children}
    </HTMLFlipBook>
  );
}
