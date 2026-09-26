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

const prints = [
  {
    id: "printti-1",
    title: "Drifting Print",
    price: "25 €",
    size: "30 × 20 cm",
    image: "/bmwdrifti.jpeg",
    description:
      "Art print based on the original BMW Drifting painting.",
    paper: "Fine Art paper",
    stripeLink:
      "https://buy.stripe.com/8x23cu7Vy3ZFcfVaMBfjG06",
  },
];

export default async function PrintPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const print = prints.find(
    (print) => print.id === id
  );

  if (!print) {
    return (
      <main className="min-h-screen bg-black text-[#beafc2] flex items-center justify-center px-6">
        <div className="text-center">
          <h1
            className={`${bodoni.className} text-3xl sm:text-4xl`}
          >
            Print not found
          </h1>

          <Link
            href="/en/prints"
            className={`${bodoni.className} inline-block mt-8 border border-[#beafc2]/60 px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#beafc2] hover:text-black transition`}
          >
            Back to prints
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-[#beafc2] px-5 sm:px-6 md:px-10 py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* BACK */}
        <Link
          href="/en/prints"
          className={`${bodoni.className} inline-block mb-8 sm:mb-12 text-xs sm:text-sm tracking-widest uppercase opacity-70 hover:opacity-100 transition`}
        >
          ← Back to prints
        </Link>

        {/* PRINT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative w-full aspect-[4/5] max-w-xl mx-auto overflow-hidden">
            <Image
              src={print.image}
              alt={print.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="w-full">

            {/* TITLE */}
            <h1
              className={`${bodoni.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight`}
            >
              {print.title}
            </h1>

            {/* LINE */}
            <div className="w-12 sm:w-16 h-px bg-[#beafc2]/50 my-6 sm:my-8" />

            {/* PRICE */}
            <p
              className={`${mea.className} text-3xl sm:text-4xl md:text-5xl`}
            >
              {print.price}
            </p>

            {/* DETAILS */}
            <div
              className={`${bodoni.className} mt-6 sm:mt-8 space-y-3 text-base sm:text-lg`}
            >
              <p>
                <span className="opacity-60">Size:</span>{" "}
                {print.size}
              </p>

              <p>
                <span className="opacity-60">Paper:</span>{" "}
                {print.paper}
              </p>
            </div>

            {/* DESCRIPTION */}
            <p
              className={`${bodoni.className} mt-8 sm:mt-10 text-base sm:text-lg leading-relaxed opacity-80`}
            >
              {print.description}
            </p>

            {/* BUY */}
            <a
              href={print.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bodoni.className} inline-block mt-8 sm:mt-10 w-full sm:w-auto text-center border border-[#beafc2]/60 px-6 sm:px-8 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black`}
            >
              Buy print
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}