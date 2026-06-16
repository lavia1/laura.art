"use client";

import { useState } from "react";
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

  return (
    <nav className="bg-white text-gray-800 shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-8">
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
            Valmiit teokset
          </Link>

          <Link href="/customtyot" className="hover:text-gray-400">
            Custom työt
          </Link>

          <Link href="/kuvagalleria" className="hover:text-gray-400">
            Kuvagalleria
          </Link>

          <a href="#yhteystiedot" className="hover:text-gray-400">
            Yhteystiedot
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden cursor-pointer "
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
            Valmiit teokset
          </Link>

          <Link href="/kuvagalleria" onClick={() => setMenuOpen(false)}>
            Custom työt
          </Link>

          <Link href="/kuvagalleria" onClick={() => setMenuOpen(false)}>
            Kuvagalleria
          </Link>

          <a href="#yhteystiedot" onClick={() => setMenuOpen(false)}>
            Yhteystiedot
          </a>
        </div>
      )}
    </nav>
  );
}