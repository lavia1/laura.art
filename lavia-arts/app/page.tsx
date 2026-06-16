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
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[900px]">
        <Image
          src="/banner.jpeg"
          alt="Laura.art hero-kuva"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="bg-gray-400/30 px-4 py-4 md:px-8 md:py-6 text-center mx-4 rounded-lg">
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide ${bodoni.className}`}
            >
              Laura.art
            </h1>

            <p
              className={`mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${mea.className}`}
            >
              Tilaustöitä, luontomaalauksia ja muuta taidetta
            </p>
          </div>
        </div>
      </div>

      {/* SISÄLTÖ */}
      <div className="bg-white px-4 py-10 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Tilaustyöt */}
          <div>
            <a
              href="/tilaustyot"
              className="relative overflow-hidden rounded-lg group block aspect-[4/3]"
            >
              <Image
                src="/sininenbw.jpg"
                alt="Tilaustyöt"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute top-0 left-0 w-full bg-black/60 py-3 flex justify-center">
                <span
                  className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 py-2 font-semibold ${mea.className}`}
                >
                  Tilaustyöt
                </span>
              </div>
            </a>

            <p
              className={`mt-4 text-center text-base md:text-lg lg:text-xl ${bodoni.className}`}
            >
              Onko lahjaidea hakusessa tai haluaisitko muuten oman menopelin
              koristeeksi? Toteutan yksilöllisiä tilaustöitä toiveiden mukaan.
            </p>
          </div>

          {/* Valmiit teokset */}
          <div>
            <a
              href="/valmiitmaalaukset"
              className="relative overflow-hidden rounded-lg group block aspect-[4/3]"
            >
              <Image
                src="/talvimaisema.jpeg"
                alt="Valmiit teokset"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute top-0 left-0 w-full bg-black/60 py-3 flex justify-center">
                <span
                  className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 py-2 font-semibold ${mea.className}`}
                >
                  Valmiit teokset
                </span>
              </div>
            </a>

            <p
              className={`mt-4 text-center text-base md:text-lg lg:text-xl ${bodoni.className}`}
            >
              Tutustu valmiisiin maalauksiin ja löydä kotiisi tai lahjaksi
              sopiva uniikki taideteos.
            </p>
          </div>

          {/* Custom työt */}
          <div>
            <a
              href="/custom"
              className="relative overflow-hidden rounded-lg group block aspect-[4/3]"
            >
              <Image
                src="/bmwlogot.jpeg"
                alt="Custom työt"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute top-0 left-0 w-full bg-black/60 py-3 flex justify-center">
                <span
                  className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-4 py-2 font-semibold ${mea.className}`}
                >
                  Custom työt
                </span>
              </div>
            </a>

            <p
              className={`mt-4 text-center text-base md:text-lg lg:text-xl ${bodoni.className}`}
            >
              Teen myös täysin uniikkeja tilaustöitä auton logoihin,
              mittaristoihin ja muihin yksityiskohtiin asiakkaan toiveiden
              mukaan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}