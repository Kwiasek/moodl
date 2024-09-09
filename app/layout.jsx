import Link from "next/link";
import "./globals.css";
import { Fugaz_One, Open_Sans } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const open_sans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Moodl",
  description: "Track your mood every day all year!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1
          className={"text-base sm:text-large textGradient " + fugaz.className}
        >
          Moodl
        </h1>
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-indigo-500 " + fugaz.className}>
        Created with 💛 by{" "}
        <a className="text-indigo-800" href="https://adamkwiasowski.pl/">
          Kwiasek
        </a>
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "w-full max-width-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 " +
            open_sans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
