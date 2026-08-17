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

export default function Tilaustyot() {
  const images = [
    "/audi.jpg",
    "/sininenbw.jpg",
    "/mustang.jpg",
    "/punaisetaudit.jpg",
    "/mustabmw.jpeg",
    "/toinenmustabmw.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <main className="min-h-screen bg-black text-[#beafc2]">

      {/* OTSIKKO */}
      <section className="px-8 pt-24 pb-16 text-center">

        <h1
          className={`${bodoni.className} text-5xl sm:text-6xl md:text-7xl tracking-wide`}
        >
          Tilaustyöt
        </h1>

        <p
          className={`${mea.className} mt-4 text-3xl sm:text-4xl md:text-5xl`}
        >
          Alk. 30 €
        </p>

        <div className="mx-auto mt-8 w-16 h-px bg-[#beafc2]/50" />

      </section>


      {/* GALLERIA */}
      <section className="mx-auto max-w-6xl px-8 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_100px] gap-5">

          {/* ISO KUVA */}
          <div className="relative overflow-hidden bg-[#111] aspect-[4/3]">

            <Image
              src={selectedImage}
              alt="Laura.art tilaustyö"
              fill
              priority
              sizes="(max-width: 768px) 100vw, calc(100vw - 160px)"
              className="object-contain transition-opacity duration-500"
            />

          </div>


          {/* PIKKUKUVAT */}
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
                  alt="Tilaustyön pikkukuva"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}

          </div>

        </div>


        {/* TEKSTIOSIO */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Vasen */}
          <div>

            <h2
              className={`${bodoni.className} text-3xl md:text-4xl mb-6`}
            >
              Sinun kuvasi.
              <br />
              Sinun tarinasi.
            </h2>

            <p
              className={`${mea.className} text-3xl md:text-4xl leading-relaxed`}
            >
              Teos, joka on tehty juuri sinulle.
            </p>

          </div>


          {/* Oikea */}
          <div className={`${bodoni.className} text-lg md:text-xl leading-relaxed`}>

            <p className="mb-6 opacity-90">
              Koko: 24 × 18 cm sekä sovittaessa isompi.
            </p>

            <p className="mb-6 opacity-90">
              Haluaisitko näyttävän maalauksen omasta autostasi,
              mopostasi tai muusta tärkeästä ajoneuvostasi?
              Toteutan yksilöllisiä tilaustöitä valokuvien pohjalta
              asiakkaan toiveiden mukaisesti.
            </p>

            <p className="mb-8 opacity-90">
              Voit vaikuttaa teoksen tunnelmaan, väreihin ja
              kokoon. Yhdessä suunnitellaan juuri sinulle sopiva
              kokonaisuus.
            </p>


            {/* Yhteystiedot */}
            <div className="border-t border-[#beafc2]/20 pt-6">

              <p className="text-sm uppercase tracking-[0.2em] opacity-50 mb-3">
                Tiedustelut
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


            {/* Nappi */}
            <a
              href="mailto:laviaaw@hotmail.com"
              className="inline-block mt-10 border border-[#beafc2]/60 px-8 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#beafc2] hover:text-black"
            >
              Kysy tilaustyöstä
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}