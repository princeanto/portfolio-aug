import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./reimagined.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Platform Evolution / reimagined — Prince",
  description:
    "An alternate, experimental treatment of the Platform Evolution case study — built to demonstrate UI patterns for AI-native products.",
  themeColor: "#06070a",
};

export default function ReimaginedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${instrumentSerif.variable} ${jetbrainsMono.variable} reimagined-scope`}>
      {children}
    </div>
  );
}
