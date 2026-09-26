"use client";

import { Mea_Culpa, Fleur_De_Leah, Bodoni_Moda } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const bodoni = Bodoni_Moda({
  weight: "900",
  subsets: ["latin"],
});

const mea = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

const fleur = Fleur_De_Leah({
  weight: "400",
  subsets: ["latin"],
});

export default function Commissions() {
  const images = [
    "/audi.jpg",
    "/sininenbw.jpg",
    "/mustang.jpg",
    "/punaisetaudit.jpg",
    "/mustabmw.jpeg",
    "/toinenmustabmw.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const imagesIso = [
    "/bmwdrifti.jpeg",
    "/bmwpunanen.jpeg",
    "/traktori.jpeg",
  ];

  const [selectedImageIso, setSelectedImageIso] = useState(imagesIso[0]);

  return (
    <main className="min-h-screen bg-black text-[#beafc2]">

      {/* SMALL COMMISSION */}
      <section className="px-8 pt-24 pb-16 text-center">
        <h1
          className={`${bodoni.className} text-5xl sm:text-6xl md:text-7xl tracking-wide`}
        >
          Small Commission
        </h1>

        <p
          className={`${mea.className} mt-4 text-3xl sm:text-4xl md:text-5xl`}
        >
          40 €
        </p>

        <div className="mx-auto mt-8 w-16 h-px bg-[#beafc2]/50" />
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_100px] gap-5">

          {/* LARGE IMAGE */}
          <div className="relative overflow-hidden bg-[#111] aspect-[4/3]">
            <Image
              src={selectedImage}
              alt="Laura.art commissioned artwork"
              fill
              priority
              sizes="(max-width: 768px) 100vw, calc(100vw - 160px)"
              className="object-contain transition-opacity duration-500"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {images.map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`
                  relative shrink-0 overflow-hidden
                  transition-all duration-300
                  ${
                    selectedImage === image
                      ? "ring-2 ring-[#beafc2]"
                      : "opacity-50 hover:opacity-100"
                  }
                `}
              >
                <Image
                  src={image}
                  alt="Commission artwork thumbnail"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* LEFT */}
          <div>
            <h2
              className={`${bodoni.className} text-3xl md:text-4xl mb-6`}
            >
              Your image.
              <br />
              Your story.
            </h2>

            <p
              className={`${mea.className} text-3xl md:text-4xl leading-relaxed`}
            >
              A piece made just for you.
            </p>
          </div>

          {/* RIGHT */}
          <div
            className={`${bodoni.className} text-lg md:text-xl leading-relaxed`}
          >
            <p className="mb-6 opacity-90">
              Size: 24 × 18 cm
            </p>

            <p className="mb-6 opacity-90">
              Would you like a striking painting of your own car,
              moped or another vehicle that is important to you?
              I create unique commissioned artwork based on
              photographs and your personal wishes.
            </p>

            <p className="mb-8 opacity-90">
              The artwork is created without a background.
              If you would like a background, take a look at
              the larger commission below, where the background
              is part of the overall composition.
            </p>

            {/* CONTACT */}
            <div className="border-t border-[#beafc2]/20 pt-6">
              <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-3">
                Inquiries
              </p>

              <a
                href="mailto:laviaaw@hotmail.com"
                className="inline-block text-lg hover:opacity-60 transition-opacity"
              >
                laviaaw@hotmail.com
              </a>

              <p className="mt-2 text-lg">
                Instagram & TikTok: @laviasart
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="mailto:laviaaw@hotmail.com?subject=Commission%20inquiry"
              className="inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black"
            >
              Ask about a commission
            </a>
          </div>
        </div>
      </section>

      {/* LARGE COMMISSION */}
      <section className="px-8 pt-24 pb-16 text-center">
        <h1
          className={`${bodoni.className} text-5xl sm:text-6xl md:text-7xl tracking-wide`}
        >
          Large Commission
        </h1>

        <p
          className={`${mea.className} mt-4 text-3xl sm:text-4xl md:text-5xl`}
        >
          80 €
        </p>

        <div className="mx-auto mt-8 w-16 h-px bg-[#beafc2]/50" />
      </section>

      {/* LARGE COMMISSION GALLERY */}
      <section className="mx-auto max-w-6xl px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_100px] gap-5">

          {/* LARGE IMAGE */}
          <div className="relative overflow-hidden bg-[#111] aspect-[4/3]">
            <Image
              src={selectedImageIso}
              alt="Laura.art large commissioned artwork"
              fill
              sizes="(max-width: 768px) 100vw, calc(100vw - 160px)"
              className="object-contain transition-opacity duration-500"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
            {imagesIso.map((image) => (
              <button
                key={image}
                onClick={() => setSelectedImageIso(image)}
                className={`
                  relative shrink-0 overflow-hidden
                  transition-all duration-300
                  ${
                    selectedImageIso === image
                      ? "ring-2 ring-[#beafc2]"
                      : "opacity-50 hover:opacity-100"
                  }
                `}
              >
                <Image
                  src={image}
                  alt="Large commission thumbnail"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* LEFT */}
          <div>
            <h2
              className={`${bodoni.className} text-3xl md:text-4xl mb-6`}
            >
              Larger size.
              <br />
              Bigger atmosphere.
            </h2>
          </div>

          {/* RIGHT */}
          <div
            className={`${bodoni.className} text-lg md:text-xl leading-relaxed`}
          >
            <p className="mb-6 opacity-90">
              Size: 29.5 × 21 cm
            </p>

            <p className="mb-6 opacity-90">
              The larger commission includes a background,
              adding depth and atmosphere to the artwork.
            </p>

            <p className="mb-8 opacity-90">
              The subject, mood and colours are designed
              together according to your wishes.
            </p>

            {/* CONTACT */}
            <div className="border-t border-[#beafc2]/20 pt-6">
              <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-3">
                Inquiries
              </p>

              <a
                href="mailto:laviaaw@hotmail.com"
                className="inline-block text-lg hover:opacity-60 transition-opacity"
              >
                laviaaw@hotmail.com
              </a>

              <p className="mt-2 text-lg">
                Instagram & TikTok: @laviasart
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="mailto:laviaaw@hotmail.com?subject=Large%20commission%20inquiry"
              className="inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black"
            >
              Ask about a commission
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}