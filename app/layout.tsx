import "./globals.css";
import { Tilt_Neon } from "next/font/google";

const tiltNeon = Tilt_Neon({ subsets: ["latin"] });

export const metadata = {
  title: "Pillippa`s Page",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={tiltNeon.className}>{children}</body>
    </html>
  );
}
