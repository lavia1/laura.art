import { Monsieur_La_Doulaise, Mea_Culpa, Bodoni_Moda } from "next/font/google";

const monsieur = Monsieur_La_Doulaise({
  weight: "400",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  weight: "900",
  subsets: ["latin"],
});

const mea = Mea_Culpa({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer
      id="yhteystiedot"
      className="bg-black text-[#beafc2] px-8 py-16 border-t-2 border-[#beafc2] "
    >
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Vasen */}
          <div className="max-w-md">
            <h3
              className={`${bodoni.className} text-5xl tracking-wide`}
            >
              Laura.art
            </h3>

            <p
              className={`${mea.className} mt-5 text-3xl leading-relaxed opacity-90`}
            >
              Uniikkeja tilaustöitä ja valmiita teoksia jokaiseen kotiin.
            </p>
          </div>


          {/* Oikea */}
          <div className="flex flex-col gap-5 md:min-w-[280px]">

            <p
              className={`${bodoni.className} text-lg uppercase tracking-[0.25em] opacity-60`}
            >
              Ota yhteyttä
            </p>

            {/* Email */}
            <a
              href="mailto:laviaaw@gmail.com"
              className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
            >
              <svg
                className="w-8 h-8 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
              </svg>

              <span className={`${bodoni.className} text-2xl`}>
                laviaaw@gmail.com
              </span>
            </a>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/laviasart/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
            >
              <svg
                className="w-8 h-8 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5z" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>

              <span className={`${bodoni.className} text-2xl`}>
                @laviasart
              </span>
            </a>


            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@laviasart"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
            >
              <svg
                className="w-8 h-8 shrink-0"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>

              <span className={`${bodoni.className} text-2xl`}>
                @laviasart
              </span>
            </a>

          </div>
        </div>


        {/* Alareuna */}
        <div className="mt-16 pt-6 border-t border-[#beafc2]/20 flex flex-col sm:flex-row justify-between gap-3">
          <p className={`${bodoni.className} text-xs opacity-50`}>
            © {new Date().getFullYear()} Laura.art
          </p>

          <p className={`${bodoni.className} text-xs opacity-50`}>
            Art &amp; creativity
          </p>
        </div>

      </div>
    </footer>
  );
}