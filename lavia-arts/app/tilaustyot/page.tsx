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
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 ${mea.className}`}>
        Tilaustyöt alk. 30 €
      </h1>

      <div className="grid gap-4 md:grid-cols-[1fr_100px]">
        {/* Iso kuva */}
        <div className="overflow-hidden rounded-xl bg-white">
          <Image
            src={selectedImage}
            alt="Valittu kuva"
            width={1200}
            height={800}
            priority
            className="w-full max-h-[80vh] object-contain"
          />
        </div>

        {/* Pikkukuvat */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2">
          {images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`shrink-0 overflow-hidden rounded-lg transition-all ${
                selectedImage === image
                  ? "border-white"
                  : "border-swhite"
              }`}
            >
              <Image
                src={image}
                alt="Pikkukuva"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <p className="text-gray-700 leading-relaxed mb-4">
          Koko: 24x18 sekä sovittaessa isompi.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Haluaisitko näyttävän maalauksen omasta autostasi, mopostasi tai
          muusta tärkeästä ajoneuvostasi? Toteutan yksilöllisiä tilaustöitä
          valokuvien pohjalta asiakkaan toiveiden mukaisesti.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Ota rohkeasti yhteyttä sähköpostilla tai sosiaalisessa mediassa,
          niin suunnitellaan yhdessä juuri sinulle sopiva teos.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Sähköposti:{" "}
          <a
            href="mailto:laviaaw@hotmail.com"
            className="text-blue-500 hover:underline"
          >
            laviaaw@hotmail.com
          </a>
        </p>
        <p>Tiktok & Instagram: @laviasart</p>
      </div>
    </div>
  );
}