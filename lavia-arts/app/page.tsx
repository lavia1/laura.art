import Image from "next/image";
import { Monsieur_La_Doulaise, Mea_Culpa, Bodoni_Moda } from "next/font/google";
import Link from "next/dist/client/link";

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
              Tilaustyöt, maalaukset & printit
            </p>

          </div>
        </div>
      </div>


      
{/* PIKAVALIKKO */}
<section className="bg-black text-[#beafc2] px-8 pt-28 pb-8 md:pt-36 md:pb-12">

  <div className="mx-auto max-w-6xl">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {/* TILAUSTYÖT */}
      <Link
        href="/tilaustyot"
        className="group relative h-[320px] md:h-[380px] overflow-hidden"
      >
        <Image
          src="/traktori.jpeg"
          alt="Tilaustyöt"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* TUMMA OVERLAY */}
        <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

        {/* TEKSTI */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h2
            className={`${bodoni.className} text-3xl sm:text-4xl md:text-3xl lg:text-4xl`}
          >
            Tilaustyöt
          </h2>

          <div className="mt-4 w-10 h-px bg-[#beafc2]/70" />

          <p
            className={`${bodoni.className} mt-4 text-sm sm:text-base opacity-90`}
          >
            Suunnitellaan sinulle oma teos
          </p>

          <span
            className={`${bodoni.className} mt-6 text-xs tracking-[0.2em] uppercase opacity-80`}
          >
            Tutustu →
          </span>

        </div>
      </Link>


      {/* MAALAUKSET */}
      <Link
        href="/valmiitmaalaukset"
        className="group relative h-[320px] md:h-[380px] overflow-hidden"
      >
        <Image
          src="/auringonkukat.jpeg"
          alt="Myytävät maalaukset"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* TUMMA OVERLAY */}
        <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

        {/* TEKSTI */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h2
            className={`${bodoni.className} text-3xl sm:text-4xl md:text-3xl lg:text-4xl`}
          >
            Myytävät maalaukset
          </h2>

          <div className="mt-4 w-10 h-px bg-[#beafc2]/70" />

          <p
            className={`${bodoni.className} mt-4 text-sm sm:text-base opacity-90`}
          >
            Alkuperäiset teokset
          </p>

          <span
            className={`${bodoni.className} mt-6 text-xs tracking-[0.2em] uppercase opacity-80`}
          >
            Katso teokset →
          </span>

        </div>
      </Link>


      {/* PRINTIT */}
      <Link
        href="/printit"
        className="group relative h-[320px] md:h-[380px] overflow-hidden"
      >
        <Image
          src="/bmwdrifti.jpeg"
          alt="Printit"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* TUMMA OVERLAY */}
        <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

        {/* TEKSTI */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <h2
            className={`${bodoni.className} text-3xl sm:text-4xl md:text-3xl lg:text-4xl`}
          >
            Printit
          </h2>

          <div className="mt-4 w-10 h-px bg-[#beafc2]/70" />

          <p
            className={`${bodoni.className} mt-4 text-sm sm:text-base opacity-90`}
          >
            Taidetta kotiin printtinä
          </p>

          <span
            className={`${bodoni.className} mt-6 text-xs tracking-[0.2em] uppercase opacity-80`}
          >
            Tutustu printteihin →
          </span>

        </div>
      </Link>

    </div>

  </div>

</section>
{/* UUSI TEOS */}
<section className="bg-black text-[#beafc2] px-6 sm:px-8 pt-10 pb-24 md:pt-14 md:pb-32">
  <div className="mx-auto max-w-6xl">

    {/* Pieni otsikko */}
    <div className="text-center mb-14 md:mb-20">
      <p
        className={`${mea.className} text-4xl sm:text-4xl md:text-6xl`}
      >
        Uusi teos
      </p>

      <div className="mx-auto mt-3 w-12 h-px bg-[#beafc2]/50" />
    </div>

    {/* Teos */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

      {/* KUVA */}
      <Link
        href="/valmiitmaalaukset/maalaus-5"
        className="group relative block w-full aspect-[4/5] overflow-hidden"
      >
        <Image
          src="/maisema.jpeg"
          alt="Taianomainen auringonlasku – originaali akryylimaalaus"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />

        {/* View */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <span
            className={`${bodoni.className} border border-[#beafc2]/80 bg-black/60 px-7 py-4 text-xs tracking-[0.25em] uppercase`}
          >
            Tutustu teokseen
          </span>
        </div>
      </Link>

      {/* TEKSTI */}
      <div className="text-center md:text-left">

        <p
          className={`${bodoni.className} text-lg tracking-[0.3em] uppercase opacity-60 mb-5`}
        >
          Nyt saatavilla
        </p>

        <h2
          className={`${bodoni.className} text-xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight`}
        >
          Taianomainen auringonlasku
        </h2>

        <div className="mt-7 w-12 h-px bg-[#beafc2]/50 mx-auto md:mx-0" />

        <p
          className={`${bodoni.className} mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80`}
        >
          Alkuperäinen akryylimaalaus
          <br />
          18 × 12 cm
        </p>

        <p
          className={`${mea.className} mt-8 text-4xl sm:text-5xl`}
        >
          28 €
        </p>

        <Link
          href="/valmiitmaalaukset/maalaus-5"
          className={`${bodoni.className} inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black`}
        >
          Katso teos
        </Link>

      </div>
    </div>
  </div>
</section>

      {/* TILAUSTYÖT */}
      <section
        id="tilaustyot"
        className="bg-black text-[#beafc2] px-8 py-16 md:py-14"
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

      {/* VALMIIT MAALAUKSET */}
<section
  id="valmiit-maalaukset"
  className="bg-black text-[#beafc2] px-8 py-24 md:py-20"
>

  {/* Otsikko */}
  <div className="text-center mb-20 md:mb-20">
    <h2
      className={`text-5xl sm:text-6xl md:text-7xl ${bodoni.className} tracking-wide`}
    >
      Myytävät teokset
    </h2>

    <div className="mx-auto mt-6 w-16 h-px bg-[#beafc2]/50" />
  </div>


  {/* Kuva + teksti */}
  <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

    {/* Vasen – kuva */}
    <div className="relative w-full aspect-[4/5] overflow-hidden">
      <Image
        src="/kesailta.jpeg"
        alt="Laura.art valmis maalaus"
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
        Valmis teos kotiisi
      </h3>

      <p
        className={`${bodoni.className} text-lg md:text-2xl leading-relaxed opacity-90`}
      >
        Löydä valmiista maalauksista juuri sinun tilaasi
        sopiva teos.
      </p>

      <p
        className={`${bodoni.className} mt-6 text-lg md:text-2xl leading-relaxed opacity-90`}
      >
        Jokainen maalaus on yksilöllinen ja valmis
        ripustettavaksi sellaisenaan.
      </p>

      <p
        className={`${mea.className} mt-8 text-lg md:text-4xl`}
      >
        Ehkä seuraava teoksesi odottaa täällä.
      </p>

      <a
        href="/valmiitmaalaukset"
        className={`inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black ${bodoni.className}`}
      >
        Tutustu maalauksiin
      </a>

    </div>

  </div>

</section>

    </div>
  );
}