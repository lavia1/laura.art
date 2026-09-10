"use client";

import { useState, useEffect } from "react";
import { Mea_Culpa, Fleur_De_Leah, Bodoni_Moda } from "next/font/google";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  weight: "900",
  subsets: ["latin"],
});

const mea = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

const fleur = Fleur_De_Leah({
  weight: "400",
  subsets: ["latin"],
});

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        // Sivun yläreunassa navbar näkyy
        setShowNav(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrollataan ylöspäin
        setShowNav(true);
      } else {
        // Scrollataan alaspäin
        setShowNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        bg-black/95 backdrop-blur-md
        text-[#beafc2]
        shadow-md border-b-2 border-[#beafc2]
        transition-transform duration-300 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-8 md:px-8">

        {/* Logo */}
        <div className={`text-2xl md:text-3xl font-bold ${bodoni.className}`}>
          Laura.art
        </div>

        {/* Desktop menu */}
        <div
          className={`hidden md:flex items-center space-x-6 text-lg xl:text-xl font-semibold ${bodoni.className}`}
        >
          <Link href="/" className="hover:text-gray-400">
            Etusivu
          </Link>

          <Link href="/tilaustyot" className="hover:text-gray-400">
            Tilaustyöt
          </Link>

          <Link href="/valmiitmaalaukset" className="hover:text-gray-400">
            Myytävät teokset
          </Link>

          <a href="#yhteystiedot" className="hover:text-gray-400">
            Yhteystiedot
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Avaa valikko"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`flex flex-col gap-4 px-4 pb-6 text-lg font-semibold md:hidden ${bodoni.className}`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Etusivu
          </Link>

          <Link href="/tilaustyot" onClick={() => setMenuOpen(false)}>
            Tilaustyöt
          </Link>

          <Link href="/valmiitmaalaukset" onClick={() => setMenuOpen(false)}>
            Myytävät teokset
          </Link>

          <a href="#yhteystiedot" onClick={() => setMenuOpen(false)}>
            Yhteystiedot
          </a>
        </div>
      )}
    </nav>
  );
}