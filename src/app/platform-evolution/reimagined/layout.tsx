import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./reimagined.css";

const fraunces = Fraunces({
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Platform Evolution / reimagined — Prince",
  description:
    "How a hundred separate verification integrations became one API call — the Platform Evolution case study, IDFlow through Wand.",
  themeColor: "#06070a",
};

export default function ReimaginedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fraunces.variable} ${jetbrainsMono.variable} reimagined-scope`}>
      {children}
    </div>
  );
}
