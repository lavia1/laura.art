"use client"

export default function Kuvagalleria() {
    const images = [
    "/audi.jpg",
    "/talvimaisema.jpeg",
    "/e46.jpg",
    "/punaisetaudit.jpg",
    "/maisemakuva.jpeg",
    "/sininenbw.jpg",
    "/bmwlogot.jpeg",
    "/kuvakollaasi.jpeg",
    "/talvimaisema2.jpeg",
    "/mustabmw.jpeg",
    "/auringonlasku.jpeg",
    "/toinenmustabmw.jpeg",
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-sm">
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}