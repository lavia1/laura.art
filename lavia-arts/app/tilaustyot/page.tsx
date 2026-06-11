"use client";
import {Mea_Culpa, Fleur_De_Leah, Bodoni_Moda } from "next/font/google";
import { useState } from "react";

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
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className={`text-5xl font-bold mt-4 mb-4 ${mea.className}`}>
    Tilaustyöt alk. 30 €
  </h1>

      <div className="grid gap-4 md:grid-cols-[1fr_92px]">
        {/* Iso kuva */}
        <div className="overflow-hidden rounded-xl border">
          <img
            src={selectedImage}
            alt="Valittu kuva"
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Pikkukuvat */}
        <div className="flex md:flex-col gap-3">
          {images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-lg border-2 transition ${
                selectedImage === image
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
            >
              <img
                src={image}
                alt=""
                className="w-22 h-22 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 max-w-3xl">

        <p className="text-gray-700 leading-relaxed mb-4">Koko: sekä sovittaessa isompi</p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Haluaisitko näyttävän maalauksen omasta autostasi, mopostasi tai
    muusta tärkeästä ajoneuvostasi? Toteutan yksilöllisiä tilaustöitä
    valokuvien pohjalta asiakkaan toiveiden mukaisesti.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Ota rohkeasti yhteyttä sähköpostilla tai sosiaalisessa mediassa,
    niin suunnitellaan yhdessä juuri sinulle sopiva teos.
  </p>

  <p className="text-gray-700 leading-relaxed mb-4">
    Sähköposti: <a href="mailto:laviaaw@hotmail.fi"
    className="text-blue-500 hover:underline"
    >
      laviaaw@hotmail.fi
    </a>
  </p>
    

</div>
    </div>
  );
}