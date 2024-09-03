"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme, systemTheme } = useTheme();

  // Determine which theme is active
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <Image
        src={currentTheme === "dark" ? "/Full_Logo_White.png" : "/Full_Logo.png"}
        alt="logo"
        width={150}
        height={50}
      />
    </Link>
  );
};