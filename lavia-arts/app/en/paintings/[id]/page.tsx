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

const paintings = [
  {
    id: "maalaus-1",
    title: "Blue Winter",
    price: "190.80 €",
    size: "19.5 × 19.5 cm",
    image: "/sininentalvi2.jpeg",
    description: "Acrylic painting on canvas.",
    shipping: "11.80 € (included in the price)",
    stripeLink:
      "https://buy.stripe.com/3cIdR87Vy7bRa7N07XfjG05",
  },
  {
    id: "maalaus-2",
    title: "Summer Evening",
    price: "100 €",
    size: "24 × 30 cm",
    image: "/kesailta.jpeg",
    description: "Acrylic painting on canvas.",
    stripeLink:
      "https://buy.stripe.com/cNi6oG1xa9jZ2Fl8EtfjG01",
  },
  {
    id: "maalaus-3",
    title: "Sunflower Field",
    price: "30 €",
    size: "40 × 50 cm",
    image: "/auringonkukat.jpeg",
    description: "Acrylic painting on canvas.",
    stripeLink:
      "https://buy.stripe.com/dRmfZg1xafIn4Nt9IxfjG02",
  },
  {
    id: "maalaus-4",
    title: "Lilac Reflection",
    price: "120 €",
    size: "20 × 30 cm",
    image: "/lilatalvi.jpeg",
    description: "Acrylic painting on canvas.",
    stripeLink:
      "https://buy.stripe.com/aFa14mdfScwb0xddYNfjG03",
  },
];

export default async function PaintingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const painting = paintings.find(
    (painting) => painting.id === id
  );

  if (!painting) {
    return (
      <main className="min-h-screen bg-black text-[#beafc2] flex items-center justify-center px-6">
        <div className="text-center">
          <h1
            className={`${bodoni.className} text-3xl sm:text-4xl`}
          >
            Painting not found
          </h1>

          <Link
            href="/en/paintings"
            className={`${bodoni.className} inline-block mt-8 border border-[#beafc2]/60 px-6 sm:px-8 py-3 sm:py-4 hover:bg-[#beafc2] hover:text-black transition`}
          >
            Back to paintings
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
          href="/en/paintings"
          className={`${bodoni.className} inline-block mb-8 sm:mb-12 text-xs sm:text-sm tracking-widest uppercase opacity-70 hover:opacity-100 transition`}
        >
          ← Back to paintings
        </Link>

        {/* PAINTING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative w-full aspect-[4/5] max-w-xl mx-auto overflow-hidden">
            <Image
              src={painting.image}
              alt={painting.title}
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
              {painting.title}
            </h1>

            {/* LINE */}
            <div className="w-12 sm:w-16 h-px bg-[#beafc2]/50 my-6 sm:my-8" />

            {/* PRICE */}
            <p
              className={`${mea.className} text-3xl sm:text-4xl md:text-5xl`}
            >
              {painting.price}
            </p>

            {/* DETAILS */}
            <div
              className={`${bodoni.className} mt-6 sm:mt-8 space-y-3 text-base sm:text-lg`}
            >
              <p>
                <span className="opacity-60">Size:</span>{" "}
                {painting.size}
              </p>

              <p>
                <span className="opacity-60">Technique:</span>{" "}
                Acrylic on canvas
              </p>

              {painting.shipping && (
                <p>
                  <span className="opacity-60">Shipping:</span>{" "}
                  {painting.shipping}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <p
              className={`${bodoni.className} mt-8 sm:mt-10 text-base sm:text-lg leading-relaxed opacity-80`}
            >
              {painting.description}
            </p>

            {/* BUY */}
            <a
              href={painting.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bodoni.className} inline-block mt-8 sm:mt-10 w-full sm:w-auto text-center border border-[#beafc2]/60 px-6 sm:px-8 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black`}
            >
              Buy painting
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}