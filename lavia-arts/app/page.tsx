import Image from "next/image";

import { Monsieur_La_Doulaise, Mea_Culpa, Bodoni_Moda } from "next/font/google";

const monsieur = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  weight: "900",
  subsets: ["latin"],
});

const mea = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="relative w-full h-[900px]">

        <Image
          src="/banner.jpeg"
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

          <div className="bg-gray-400/30 px-8 py-6 text-center">
            
            <h1 className={`text-8xl font-bold tracking-wide ${bodoni.className}`}>
              Laura.art
            </h1>

            <p className={`text-6xl ${mea.className}`}>
              Tilaustöitä, luontomaalauksia ja muuta taidetta
            </p>

          </div>

        </div>

      </div>

      {/* SEPARATE CONTENT */}
<div className="p-30 px-40 bg-[#d9d9d9]">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
    <a
      href="/tilaustyot"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="\sininenbw.jpg"
        alt="Tilaustyöt"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute top-0 left-0 w-full bg-black/60 py-4 flex justify-center">
        <span className={` text-white text-6xl px-6 py-4 font-semibold ${mea.className}`}>
          Tilaustyöt
        </span>
      </div>
    </a>

    <a
      href="/galleria"
      className="relative overflow-hidden rounded-lg group"
    >
      <img
        src="/auringonkukkapelto.jpg"
        alt="Galleria"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute top-0 left-0 w-full bg-black/60 py-4 flex justify-center">
        <span className={` text-white text-6xl px-6 py-4 font-semibold ${mea.className}`}>
          Valmiit teokset
        </span>
      </div>
    </a>
  </div>
</div>

    </div>
  );
}