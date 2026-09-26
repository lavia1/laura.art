"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Mea_Culpa, Bodoni_Moda } from "next/font/google";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  weight: "900",
  subsets: ["latin"],
});

const mea = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md text-[#beafc2] shadow-md border-b-2 border-[#beafc2]">
      <div className="mx-auto flex items-center justify-between px-6 py-8 md:px-8">

        {/* LOGO */}
        <Link
          href={isEnglish ? "/en" : "/"}
          className={`text-2xl md:text-3xl font-bold ${bodoni.className} hover:opacity-70 transition-opacity`}
        >
          Laura.art
        </Link>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex items-center space-x-6 text-lg xl:text-xl font-semibold ${bodoni.className}`}
        >
          {isEnglish ? (
            <>
              <Link href="/en" className="hover:text-gray-400">
                Home
              </Link>

              <Link
                href="/en/commissions"
                className="hover:text-gray-400"
              >
                Commissions
              </Link>

              <Link
                href="/en/paintings"
                className="hover:text-gray-400"
              >
                Original Paintings
              </Link>

              <Link href="/en/prints" className="hover:text-gray-400">
                Prints
              </Link>

              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </>
          ) : (
            <>
              <Link href="/" className="hover:text-gray-400">
                Etusivu
              </Link>

              <Link
                href="/tilaustyot"
                className="hover:text-gray-400"
              >
                Tilaustyöt
              </Link>

              <Link
                href="/valmiitmaalaukset"
                className="hover:text-gray-400"
              >
                Myytävät teokset
              </Link>

              <Link href="/printit" className="hover:text-gray-400">
                Printit
              </Link>

              <a
                href="#yhteystiedot"
                className="hover:text-gray-400"
              >
                Yhteystiedot
              </a>
            </>
          )}

          {/* DESKTOP LANGUAGE SWITCH */}
          <div className="flex items-center gap-2 ml-2">
            <Link
              href="/"
              className={
                !isEnglish
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100"
              }
            >
              FI
            </Link>

            <span className="opacity-30">|</span>

            <Link
              href="/en"
              className={
                isEnglish
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100"
              }
            >
              EN
            </Link>
          </div>
        </div>

        {/* MOBILE LANGUAGE SWITCH + MENU BUTTON */}
        <div className="flex items-center gap-4 md:hidden">

          {/* LANGUAGE SWITCH */}
          <div className={`flex items-center gap-2 ${bodoni.className}`}>
            <Link
              href="/"
              className={
                !isEnglish
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100"
              }
            >
              FI
            </Link>

            <span className="opacity-30">|</span>

            <Link
              href="/en"
              className={
                isEnglish
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100"
              }
            >
              EN
            </Link>
          </div>

          {/* HAMBURGER MENU */}
          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`flex flex-col gap-4 px-6 pb-6 text-lg font-semibold md:hidden ${bodoni.className}`}
        >
          {isEnglish ? (
            <>
              <Link
                href="/en"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/en/commissions"
                onClick={() => setMenuOpen(false)}
              >
                Commissions
              </Link>

              <Link
                href="/en/paintings"
                onClick={() => setMenuOpen(false)}
              >
                Original Paintings
              </Link>

              <Link
                href="/en/prints"
                onClick={() => setMenuOpen(false)}
              >
                Prints
              </Link>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </>
          ) : (
            <>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Etusivu
              </Link>

              <Link
                href="/tilaustyot"
                onClick={() => setMenuOpen(false)}
              >
                Tilaustyöt
              </Link>

              <Link
                href="/valmiitmaalaukset"
                onClick={() => setMenuOpen(false)}
              >
                Myytävät teokset
              </Link>

              <Link
                href="/printit"
                onClick={() => setMenuOpen(false)}
              >
                Printit
              </Link>

              <a
                href="#yhteystiedot"
                onClick={() => setMenuOpen(false)}
              >
                Yhteystiedot
              </a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}