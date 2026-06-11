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
        <footer id="yhteystiedot" className="bg-[#e5e5e5] py-10 px-8">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Vasen puoli */}
                <div className="text-center md:text-left">
                    <h3 className= {`text-3xl font-semibold ${bodoni.className}`}>
                        Laura.art
                    </h3>
                    <p className="mt-2 text-gray-700">
                        Uniikkeja tilaustöitä ja valmiita teoksia jokaiseen kotiin.
                    </p>
                </div>

                {/* Oikea puoli */}
                <div className="flex flex-col items-center gap-3">


                    <div className="flex gap-6 items-center">

                        {/* Email */}
                        <a
                            href="mailto:sinunposti@example.com"
                            className="hover:scale-110 transition-transform"
                            aria-label="Email"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                            aria-label="Instagram"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
                                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5z" />
                                <circle cx="17.5" cy="6.5" r="1" />
                            </svg>
                        </a>

                        {/* TikTok */}
                        <a
                            href="https://tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                            aria-label="TikTok"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-8 h-8"
                            >
                                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                            </svg>
                        </a>



                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Laura.art
            </div>
        </footer>
    );
}