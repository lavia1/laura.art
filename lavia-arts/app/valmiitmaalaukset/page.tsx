"use client";

import Image from "next/image";
import Link from "next/link";
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

const maalaukset = [
  {
    id: "maalaus-1",
    title: "Sininen talvi",
    price: "180 €",
    image: "/sininentalvi2.jpeg",
  },
  {
    id: "maalaus-2",
    title: "Kesäilta",
    price: "100 €",
    size: "24x30 cm",
    image: "/kesäilta.jpeg",
  },
  {
  id: "maalaus-3",
  title: "Auringonkukkapelto",
  price: "30 €",
  size: "40 × 50 cm",
  image: "/auringonkukat.jpeg",
  description: "Auringonkukkia kesäisessä maisemassa.",
},
  {
    id: "maalaus-4",
    title: "Lila heijastus",
    price: "120 €",
    size: "20x30 cm",
    image: "/lilatalvi.jpeg",
  },

];

export default function Valmiitmaalaukset() {
  return (
    <main className="min-h-screen bg-black text-[#beafc2] px-6 md:px-10 lg:px-16 py-24">

      {/* OTSIKKO */}
      <section className="text-center mb-20">

        <h1
          className={`text-5xl sm:text-6xl md:text-7xl ${bodoni.className} tracking-wide`}
        >
          Valmiit maalaukset
        </h1>

        <div className="mx-auto mt-6 w-16 h-px bg-[#beafc2]/50" />

        <p
          className={`${mea.className} mt-6 text-3xl md:text-4xl`}
        >
          Valmiita teoksia uuteen kotiin
        </p>

      </section>


      {/* MAALAUKSET */}
      <section className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">

          {maalaukset.map((maalaus) => (

            <Link
              key={maalaus.id}
              href={`/valmiitmaalaukset/${maalaus.id}`}
              className="group block"
            >

              {/* KUVA */}
              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={maalaus.image}
                  alt={maalaus.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OTSIKKO KUVAN PÄÄLLÄ */}
                <div className="absolute inset-x-0 bottom-0 bg-black/65 px-5 py-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                  <h2
                    className={`${bodoni.className} text-xl md:text-2xl`}
                  >
                    {maalaus.title}
                  </h2>

                </div>

              </div>


              {/* HINTA */}
              <div className="flex justify-between items-center mt-4">

                <h2
                  className={`${bodoni.className} text-lg md:text-xl`}
                >
                  {maalaus.title}
                </h2>

                <p
                  className={`${bodoni.className} text-lg md:text-xl`}
                >
                  {maalaus.price}
                </p>

              </div>

               <p className={`${bodoni.className} mt-1 text-sm `}>
    {maalaus.size}
  </p>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}