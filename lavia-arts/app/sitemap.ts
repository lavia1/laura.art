import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lauraart.fi",
      lastModified: new Date(),
    },
    {
      url: "https://lauraart.fi/tilaustyot",
      lastModified: new Date(),
    },
    {
      url: "https://lauraart.fi/valmiitmaalaukset",
      lastModified: new Date(),
    },
    {
      url: "https://lauraart.fi/customtyot",
      lastModified: new Date(),
    },
    {
      url: "https://lauraart.fi/kuvagalleria",
      lastModified: new Date(),
    },
  ];
}