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
    size: "19.5 × 19.5 cm",
    image: "/sininentalvi2.jpeg",
    description: "Akryylimaalaus kankaalle.",
    stripeLink:"https://buy.stripe.com/test_7sY00lfk7cIa9GBfCo2Ry00"
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
    description: "Akryylimaalaus kankaalle.",
  },
  {
    id: "maalaus-4",
    title: "Lila heijastus",
    price: "120 €",
    size: "20 × 30 cm",
    image: "/lilatalvi.jpeg",
    description: "Akryylimaalaus kankaalle.",
  },
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
      <main className="min-h-screen bg-black text-[#beafc2] flex items-center justify-center px-6">
        <div className="text-center">
          <h1
            className={`${bodoni.className} text-3xl sm:text-4xl`}
          >
            Teosta ei löytynyt
          </h1>

          <Link
            href="/valmiitmaalaukset"
            className={`${bodoni.className} inline-block mt-8 border border-[#beafc2]/60 px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#beafc2] hover:text-black transition`}
          >
            Takaisin maalauksiin
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-[#beafc2] px-5 sm:px-6 md:px-10 py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* TAKAISIN */}
        <Link
          href="/valmiitmaalaukset"
          className={`${bodoni.className} inline-block mb-8 sm:mb-12 text-xs sm:text-sm tracking-widest uppercase opacity-70 hover:opacity-100 transition`}
        >
          ← Takaisin maalauksiin
        </Link>

        {/* TEOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">

          {/* KUVA */}
          <div className="relative w-full aspect-[4/5] max-w-xl mx-auto overflow-hidden">
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
          <div className="w-full">

            {/* OTSIKKO */}
            <h1
              className={`${bodoni.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight`}
            >
              {maalaus.title}
            </h1>

            {/* VIIVA */}
            <div className="w-12 sm:w-16 h-px bg-[#beafc2]/50 my-6 sm:my-8" />

            {/* HINTA */}
            <p
              className={`${mea.className} text-3xl sm:text-4xl md:text-5xl`}
            >
              {maalaus.price}
            </p>

            {/* TIEDOT */}
            <div
              className={`${bodoni.className} mt-6 sm:mt-8 space-y-3 text-base sm:text-lg`}
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

            {/* KUVAUS */}
            <p
              className={`${bodoni.className} mt-8 sm:mt-10 text-base sm:text-lg leading-relaxed opacity-80`}
            >
              {maalaus.description}
            </p>

            {/* YHTEYDENOTTO */}
            <a
  href={maalaus.stripeLink}
  target="_blank"
  rel="noopener noreferrer"
  className={`${bodoni.className} inline-block mt-8 sm:mt-10 w-full sm:w-auto text-center border border-[#beafc2]/60 px-6 sm:px-8 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black`}
>
  Osta teos
</a>

          </div>
        </div>
      </div>
    </main>
  );
}
