import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda, Mea_Culpa } from "next/font/google";

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
    size: "50 × 70 cm",
    image: "/sininentalvi2.jpeg",
    description: "Akryylimaalaus kankaalle.",
  },
  {
    id: "maalaus-2",
    title: "Kesäilta",
    price: "100 €",
    size: "24 × 30 cm",
    image: "/kesäilta.jpeg",
    description: "Akryylimaalaus kankaalle.",
  },
  {
  id: "maalaus-3",
  title: "Auringonkukkapelto",
  price: "30 €",
  size: "40 × 50 cm",
  image: "/auringonkukat.jpeg",
},
{
    id: "maalaus-4",
    title: "Lila heijastus",
    price: "120 €",
    size: "20x30 cm",
    image: "/lilatalvi.jpeg",
  }
];

export default async function MaalausPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const maalaus = maalaukset.find(
    (maalaus) => maalaus.id === id
  );

  if (!maalaus) {
    return (
      <main className="min-h-screen bg-black text-[#beafc2] flex items-center justify-center">
        <div className="text-center">
          <h1 className={`${bodoni.className} text-4xl`}>
            Teosta ei löytynyt
          </h1>

          <Link
            href="/valmiitmaalaukset"
            className={`${bodoni.className} inline-block mt-8 border border-[#beafc2]/60 px-8 py-4 hover:bg-[#beafc2] hover:text-black transition`}
          >
            Takaisin maalauksiin
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-[#beafc2] px-6 md:px-10 py-20">

      <div className="mx-auto max-w-7xl">

        {/* TAKAISIN */}
        <Link
          href="/valmiitmaalaukset"
          className={`${bodoni.className} inline-block mb-12 text-sm tracking-widest uppercase opacity-70 hover:opacity-100 transition`}
        >
          ← Takaisin maalauksiin
        </Link>

        {/* TEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* KUVA */}
          <div className="relative w-full aspect-[4/5]">
            <Image
              src={maalaus.image}
              alt={maalaus.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* TIEDOT */}
          <div>

            <h1
              className={`${bodoni.className} text-4xl sm:text-5xl md:text-6xl`}
            >
              {maalaus.title}
            </h1>

            <div className="w-16 h-px bg-[#beafc2]/50 my-8" />

            <p
              className={`${mea.className} text-3xl md:text-4xl`}
            >
              {maalaus.price}
            </p>

            <div
              className={`${bodoni.className} mt-8 space-y-3 text-lg`}
            >
              <p>
                <span className="opacity-60">Koko:</span>{" "}
                {maalaus.size}
              </p>

              <p>
                <span className="opacity-60">Tekniikka:</span>{" "}
                Akryyli kankaalle
              </p>
            </div>

            <p
              className={`${bodoni.className} mt-10 text-lg leading-relaxed opacity-80`}
            >
              {maalaus.description}
            </p>

            <a
              href="mailto:laviaaw@hotmail.com"
              className={`${bodoni.className} inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black`}
            >
              Kysy teoksesta
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}