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
    <div className="relative w-full h-[900px]">
      
      <Image
        src="/banner.jpeg"
        alt="Hero image"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        
        <h1 className={`text-8xl font-bold tracking-wide ${bodoni.className}`}>
          Laura.art
        </h1>

        <p className={`text-6xl ${mea.className}`}>
          Tilaustöitä, luontomaalauksia ja muuta taidetta
        </p>

      </div>

    </div>
  );
}