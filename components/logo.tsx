"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme, systemTheme } = useTheme();

  // Determine which theme is active
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Add in dark mode version of new MM logo & change name to massive minds 
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <Image
        src={currentTheme === "dark" ? "/Massive_Minds_Logo_White.png" : "/Massive_Minds_Logo_White.png"}
        alt="logo"
        width={300}
        height={100}
      />
    </Link>
  );
};