"use client"
import {Mea_Culpa, Fleur_De_Leah, Bodoni_Moda } from "next/font/google";
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
    return (
        <nav className="flex items-center justify-between bg-white  p-8 text-gray-800 shadow-md">
            <div className={`text-3xl font-bold tracking-wide ${bodoni.className}`}>
                Laura.art
            </div>

            <div className={`flex space-x-6 font-semibold text-xl ${bodoni.className}`}>
                <Link href="/" className="hover:text-gray-400">
                    Etusivu
                </Link>
                <Link href="/tilaustyot" className="hover:text-gray-400">
                    Tilaustyöt
                </Link>
                <Link href="/valmiitmaalaukset" className="hover:text-gray-400">
                    Valmiit teokset
                </Link>
                <Link href="/kuvagalleria" className="hover:text-gray-400">
                    Custom työt
                </Link>
                <Link href="/kuvagalleria" className="hover:text-gray-400">
                    Kuvagalleria
                </Link>
                <a href="#yhteystiedot" className="hover:text-gray-400">
                    Yhteystiedot
                </a>
                
            </div>
            
        </nav>
    );
}