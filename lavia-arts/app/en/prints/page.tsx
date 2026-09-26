"use client";

import Image from "next/image";
import Link from "next/link";
import { Mea_Culpa, Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  weight: "900",
  subsets: ["latin"],
});

const mea = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

const prints = [
  {
    id: "printti-1",
    title: "Drifting Print",
    price: "25 €",
    size: "30 × 20 cm",
    image: "/bmwdrifti.jpeg",
  },
];

export default function Prints() {
  return (
    <main className="min-h-screen bg-black text-[#beafc2] px-6 md:px-10 lg:px-16 py-24">

      {/* TITLE */}
      <section className="text-center mb-20">
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl ${bodoni.className} tracking-wide`}
        >
          Prints
        </h1>

        <div className="mx-auto mt-6 w-16 h-px bg-[#beafc2]/50" />

        <p
          className={`${mea.className} mt-6 text-3xl md:text-4xl`}
        >
          Art for your home in a smaller format
        </p>
      </section>

      {/* PRINTS */}
      <section className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">

          {prints.map((print) => (
            <Link
              key={print.id}
              href={`/en/prints/${print.id}`}
              className="group block"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={print.image}
                  alt={print.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* TITLE OVER IMAGE */}
                <div className="absolute inset-x-0 bottom-0 bg-black/65 px-5 py-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h2
                    className={`${bodoni.className} text-xl md:text-2xl`}
                  >
                    {print.title}
                  </h2>
                </div>
              </div>

              {/* DETAILS */}
              <div className="flex justify-between items-center mt-4">
                <h2
                  className={`${bodoni.className} text-lg md:text-xl`}
                >
                  {print.title}
                </h2>

                <p
                  className={`${bodoni.className} text-lg md:text-xl`}
                >
                  {print.price}
                </p>
              </div>

              <p
                className={`${bodoni.className} mt-1 text-sm`}
              >
                {print.size}
              </p>

            </Link>
          ))}

        </div>
      </section>
    </main>
  );
}