import Image from "next/image";
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

export default function Home() {
  return (
    <div className="bg-black">

      {/* HERO */}
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[900px]">
        <Image
          src="/banner.jpeg"
          alt="Laura.art artwork"
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
              Commissions, paintings & prints
            </p>

          </div>
        </div>
      </div>


      {/* QUICK MENU */}
      <section className="bg-black text-[#beafc2] px-8 pt-28 pb-2 md:pt-36 md:pb-4">
        <div className="mx-auto max-w-6xl">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* COMMISSIONS */}
            <Link
              href="/en/commissions"
              className="group relative h-[320px] md:h-[380px] overflow-hidden"
            >
              <Image
                src="/traktori.jpeg"
                alt="Commissions"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                <h2
                  className={`${bodoni.className} text-3xl sm:text-4xl md:text-3xl lg:text-4xl`}
                >
                  Commissions
                </h2>

                <div className="mt-4 w-10 h-px bg-[#beafc2]/70" />

                <p
                  className={`${bodoni.className} mt-4 text-sm sm:text-base opacity-90`}
                >
                  Let's create something made for you
                </p>

                <span
                  className={`${bodoni.className} mt-6 text-xs tracking-[0.2em] uppercase opacity-80`}
                >
                  Discover →
                </span>

              </div>
            </Link>


            {/* PAINTINGS */}
            <Link
              href="/en/paintings"
              className="group relative h-[320px] md:h-[380px] overflow-hidden"
            >
              <Image
                src="/auringonkukat.jpeg"
                alt="Original paintings"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                <h2
                  className={`${bodoni.className} text-3xl sm:text-4xl md:text-3xl lg:text-4xl`}
                >
                  Original Paintings
                </h2>

                <div className="mt-4 w-10 h-px bg-[#beafc2]/70" />

                <p
                  className={`${bodoni.className} mt-4 text-sm sm:text-base opacity-90`}
                >
                  Original artworks
                </p>

                <span
                  className={`${bodoni.className} mt-6 text-xs tracking-[0.2em] uppercase opacity-80`}
                >
                  View paintings →
                </span>

              </div>
            </Link>


            {/* PRINTS */}
            <Link
              href="/en/prints"
              className="group relative h-[320px] md:h-[380px] overflow-hidden"
            >
              <Image
                src="/bmwdrifti.jpeg"
                alt="Art prints"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                <h2
                  className={`${bodoni.className} text-3xl sm:text-4xl md:text-3xl lg:text-4xl`}
                >
                  Prints
                </h2>

                <div className="mt-4 w-10 h-px bg-[#beafc2]/70" />

                <p
                  className={`${bodoni.className} mt-4 text-sm sm:text-base opacity-90`}
                >
                  Art for your home
                </p>

                <span
                  className={`${bodoni.className} mt-6 text-xs tracking-[0.2em] uppercase opacity-80`}
                >
                  Explore prints →
                </span>

              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* NEW ARTWORK */}
      <section className="bg-black text-[#beafc2] px-6 sm:px-8 pt-10 pb-16 md:pt-14 md:pb-20">

        <div className="mx-auto max-w-6xl">

          {/* Small heading */}
          <div className="text-center mb-10 md:mb-14">

            <p
              className={`${mea.className} text-4xl sm:text-4xl md:text-6xl`}
            >
              New Painting
            </p>

            <div className="mx-auto mt-3 w-12 h-px bg-[#beafc2]/50" />

          </div>


          {/* Artwork */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* IMAGE */}
            <Link
              href="/en/paintings/maalaus-5"
              className="group relative block w-full aspect-[4/5] overflow-hidden"
            >
              <Image
                src="/maisema.jpeg"
                alt="Magical Sunset – original acrylic painting"
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
                  View Artwork
                </span>

              </div>
            </Link>


            {/* TEXT */}
            <div className="text-center md:text-left">

              <p
                className={`${bodoni.className} text-lg tracking-[0.3em] uppercase opacity-60 mb-5`}
              >
                Now available
              </p>

              <h2
                className={`${bodoni.className} text-xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight`}
              >
                Magical Sunset
              </h2>

              <div className="mt-7 w-12 h-px bg-[#beafc2]/50 mx-auto md:mx-0" />

              <p
                className={`${bodoni.className} mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed opacity-80`}
              >
                Original acrylic painting
                <br />
                18 × 12 cm
              </p>

              <p
                className={`${mea.className} mt-8 text-4xl sm:text-5xl`}
              >
                €28
              </p>

              <Link
                href="/en/paintings/maalaus-5"
                className={`${bodoni.className} inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black`}
              >
                View Artwork
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* COMMISSIONS */}
      <section
        id="commissions"
        className="bg-black text-[#beafc2] px-8 py-16 md:py-14"
      >

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">

          <h2
            className={`text-5xl sm:text-6xl md:text-7xl ${bodoni.className} tracking-wide`}
          >
            Commissions
          </h2>

          <div className="mx-auto mt-6 w-16 h-px bg-[#beafc2]/50" />

        </div>


        {/* Image + text */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <div className="relative w-full aspect-[4/5] overflow-hidden">

            <Image
              src="/traktori.jpeg"
              alt="Laura.art commissioned artwork"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>


          {/* Text */}
          <div className="max-w-xl">

            <h3
              className={`${bodoni.className} text-3xl md:text-4xl mb-8`}
            >
              A piece made just for you
            </h3>

            <p
              className={`${bodoni.className} text-lg md:text-2xl leading-relaxed opacity-90`}
            >
              Would you like a piece of art designed especially for you
              or someone you love?
            </p>

            <p
              className={`${bodoni.className} mt-6 text-lg md:text-2xl leading-relaxed opacity-90`}
            >
              I create commissioned artwork featuring cars, tractors,
              trucks and mopeds. The artwork can be created without a
              background, or with a background if you prefer.
            </p>

            <p
              className={`${mea.className} mt-8 text-lg md:text-4xl`}
            >
              Let&apos;s create something unique.
            </p>

            <Link
              href="/en/commissions"
              className={`inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black ${bodoni.className}`}
            >
              Explore commissions
            </Link>

          </div>

        </div>
      </section>


      {/* ORIGINAL PAINTINGS */}
      <section
        id="paintings"
        className="bg-black text-[#beafc2] px-8 py-16 md:py-14"
      >

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">

          <h2
            className={`text-5xl sm:text-6xl md:text-7xl ${bodoni.className} tracking-wide`}
          >
            Original Paintings
          </h2>

          <div className="mx-auto mt-6 w-16 h-px bg-[#beafc2]/50" />

        </div>


        {/* Image + text */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <div className="relative w-full aspect-[4/5] overflow-hidden">

            <Image
              src="/kesailta.jpeg"
              alt="Laura.art original painting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>


          {/* Text */}
          <div className="max-w-xl">

            <h3
              className={`${bodoni.className} text-3xl md:text-4xl mb-8`}
            >
              An original piece for your home
            </h3>

            <p
              className={`${bodoni.className} text-lg md:text-2xl leading-relaxed opacity-90`}
            >
              Find an original painting that brings something special
              to your space.
            </p>

            <p
              className={`${bodoni.className} mt-6 text-lg md:text-2xl leading-relaxed opacity-90`}
            >
              Each painting is unique and ready to hang as it is.
            </p>

            <p
              className={`${mea.className} mt-8 text-lg md:text-4xl`}
            >
              Perhaps your next piece is waiting here.
            </p>

            <Link
              href="/en/paintings"
              className={`inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black ${bodoni.className}`}
            >
              Explore paintings
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}