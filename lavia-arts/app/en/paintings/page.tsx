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

const paintings = [
  {
    id: "maalaus-1",
    title: "Blue Winter",
    price: "180 €",
    size: "19.5 × 19.5 cm",
    image: "/sininentalvi2.jpeg",
  },
  {
    id: "maalaus-2",
    title: "Summer Evening",
    price: "100 €",
    size: "24 × 30 cm",
    image: "/kesailta.jpeg",
  },
  {
    id: "maalaus-3",
    title: "Sunflower Field",
    price: "30 €",
    size: "40 × 50 cm",
    image: "/auringonkukat.jpeg",
    description: "Sunflowers in a summer landscape.",
  },
  {
    id: "maalaus-4",
    title: "Lilac Reflection",
    price: "120 €",
    size: "20 × 30 cm",
    image: "/lilatalvi.jpeg",
  },
];

export default function Paintings() {
  return (
    <main className="min-h-screen bg-black text-[#beafc2] px-6 md:px-10 lg:px-16 py-24">

      {/* HEADING */}
      <section className="text-center mb-20">
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl ${bodoni.className} tracking-wide`}
        >
          Original Paintings
        </h1>

        <div className="mx-auto mt-6 w-16 h-px bg-[#beafc2]/50" />

        <p
          className={`${mea.className} mt-6 text-3xl md:text-4xl`}
        >
          Original artworks looking for a new home
        </p>
      </section>

      {/* PAINTINGS */}
      <section className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">

          {paintings.map((painting) => (
            <Link
              key={painting.id}
              href={`/en/paintings/${painting.id}`}
              className="group block"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* TITLE OVER IMAGE */}
                <div className="absolute inset-x-0 bottom-0 bg-black/65 px-5 py-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h2
                    className={`${bodoni.className} text-xl md:text-2xl`}
                  >
                    {painting.title}
                  </h2>
                </div>
              </div>

              {/* TITLE + PRICE */}
              <div className="flex justify-between items-center mt-4">
                <h2
                  className={`${bodoni.className} text-lg md:text-xl`}
                >
                  {painting.title}
                </h2>

                <p
                  className={`${bodoni.className} text-lg md:text-xl`}
                >
                  {painting.price}
                </p>
              </div>

              {/* SIZE */}
              <p
                className={`${bodoni.className} mt-1 text-sm`}
              >
                {painting.size}
              </p>

            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}