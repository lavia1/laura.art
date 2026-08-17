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
    <div className="bg-black">

      {/* HERO */}
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[900px]">
        <Image
          src="/banner.jpeg"
          alt="Laura.art hero-kuva"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center text-[#beafc2]">
          <div className="bg-black/50 px-16 py-16 w-full text-center">

            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wide ${bodoni.className} [text-shadow:10px_10px_0px_rgba(0,0,0,0.15)]`}
            >
              Laura.art
            </h1>

            <p
              className={`mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${mea.className}`}
            >
              Tilaustyöt, maalaukset & muu taide
            </p>

          </div>
        </div>
      </div>


      {/* TILAUSTYÖT */}
      <section
        id="tilaustyot"
        className="bg-black text-[#beafc2] px-8 py-24 md:py-20"
      >

        {/* Otsikko */}
        <div className="text-center mb-20 md:mb-20">
          <h2
            className={`text-5xl sm:text-6xl md:text-7xl ${bodoni.className} tracking-wide`}
          >
            Tilaustyöt
          </h2>

          <div className="mx-auto mt-6 w-16 h-px bg-[#beafc2]/50" />
        </div>


        {/* Kuva + teksti */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Vasen – kuva */}
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src="/traktori.jpeg"
              alt="Laura.art tilaustyö"
              fill
                sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>


          {/* Oikea – teksti */}
          <div className="max-w-xl">

            <h3
              className={`${bodoni.className} text-3xl md:text-4xl mb-8`}
            >
              Sinun näköisesi teos
            </h3>

            <p
              className={`${bodoni.className} text-lg md:text-2xl leading-relaxed opacity-90`}
            >
              Haluaisitko kotiisi teoksen, joka on suunniteltu
              juuri sinulle tai lähimmäisellesi?
            </p>

            <p
              className={`${bodoni.className} mt-6 text-lg md:text-2xl leading-relaxed opacity-90`}
            >
              Teen tilaustöitä autoista, traktoreista, rekoista sekä mopoista. Pääasiallisesti ilman taustaa, mutta taustankin kanssa on mahdollista! 
            </p>

            <p
              className={`${mea.className} mt-8 text-lg md:text-4xl`}
            >
              Tehdään jotain ainutlaatuista.
            </p>

            <a
              href="/tilaustyot"
              className={`inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black ${bodoni.className}`}
            >
              Tutustu tilaustöihin
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}