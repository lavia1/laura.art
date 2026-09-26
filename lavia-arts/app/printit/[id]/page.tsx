
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

const printit = [
  {
    id: "printti-1",
    title: "Drifting -printti",
    price: "25 €",
    size: "30 × 20 cm",
    image: "/bmwdrifti.jpeg",
    description:
      "Taideprintti alkuperäisestä BMW Drifting -maalauksesta.",
    paper: "Fine Art -paperi",
    stripeLink:
      "https://buy.stripe.com/8x23cu7Vy3ZFcfVaMBfjG06",
  },
];

export default async function PrinttiPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const printti = printit.find(
    (printti) => printti.id === id
  );

  if (!printti) {
    return (
      <main className="min-h-screen bg-black text-[#beafc2] flex items-center justify-center px-6">
        <div className="text-center">

          <h1
            className={`${bodoni.className} text-3xl sm:text-4xl`}
          >
            Printtiä ei löytynyt
          </h1>

          <Link
            href="/printit"
            className={`${bodoni.className} inline-block mt-8 border border-[#beafc2]/60 px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#beafc2] hover:text-black transition`}
          >
            Takaisin printteihin
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
          href="/printit"
          className={`${bodoni.className} inline-block mb-8 sm:mb-12 text-xs sm:text-sm tracking-widest uppercase opacity-70 hover:opacity-100 transition`}
        >
          ← Takaisin printteihin
        </Link>

        {/* PRINTTI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">

          {/* KUVA */}
          <div className="relative w-full aspect-[4/5] max-w-xl mx-auto overflow-hidden">

            <Image
              src={printti.image}
              alt={printti.title}
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
              {printti.title}
            </h1>

            {/* VIIVA */}
            <div className="w-12 sm:w-16 h-px bg-[#beafc2]/50 my-6 sm:my-8" />

            {/* HINTA */}
            <p
              className={`${mea.className} text-3xl sm:text-4xl md:text-5xl`}
            >
              {printti.price}
            </p>

            {/* TIEDOT */}
            <div
              className={`${bodoni.className} mt-6 sm:mt-8 space-y-3 text-base sm:text-lg`}
            >

              <p>
                <span className="opacity-60">Koko:</span>{" "}
                {printti.size}
              </p>

              <p>
                <span className="opacity-60">Paperi:</span>{" "}
                {printti.paper}
              </p>

            </div>

            {/* KUVAUS */}
            <p
              className={`${bodoni.className} mt-8 sm:mt-10 text-base sm:text-lg leading-relaxed opacity-80`}
            >
              {printti.description}
            </p>

            {/* OSTA */}
            <a
              href={printti.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bodoni.className} inline-block mt-8 sm:mt-10 w-full sm:w-auto text-center border border-[#beafc2]/60 px-6 sm:px-8 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black`}
            >
              Osta printti
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}
