import img_hero from "../assets/heros_img_bg.jpg";
import title from "../assets/FIANCHETTO.svg";

import Navigation from "../layout/Navigation";
import Button from "./components/Button";
import { Separate } from "./components/Separate";

export default function Heros() {
  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Header avec Navigation */}
      <header className="flex-shrink-0">
        <Navigation />
      </header>

      {/* Logo/Titre principal */}
      <div className="flex-shrink-0 px-4 py-2 md:py-4">
        <img
          className="w-full max-h-[25vh] object-contain"
          src={title}
          alt="Titre de la page d'accueil - Fianchetto"
        />
      </div>

      {/* Séparateur */}
      <Separate height="h-1 md:h-2" />

      {/* Informations secondaires */}
      <div className="flex-shrink-0 px-4 py-2">
        <div className="grid grid-cols-12 gap-2 md:gap-4 text-xs md:text-sm">
          <div className="col-span-12 sm:col-span-6 md:col-span-3 text-left">
            Club d'échecs pour tous les niveaux
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-3 text-left">
            Intro /
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-3 text-left">
            [En-tête]
          </div>
          <div className="col-span-4 sm:col-span-2 md:col-span-3 text-left">
            C8-0
          </div>
        </div>
      </div>

      <Separate height="h-0.5" />

      {/* Zone principale avec image et titre */}
      <div className="flex-1 relative min-h-0 lg:mx-40">
        <div className="absolute inset-0 grid grid-cols-12 gap-2 md:gap-4 p-4 ">
          {/* Image */}
          <div className="col-span-12 sm:col-start-4 sm:col-span-9 md:col-start-6 md:col-span-7 relative ">
            <img
              src={img_hero}
              alt="Hero image"
              className="w-full h-full object-cover object-center "
            />
          </div>

          {/* Titre superposé */}
          <div className="col-span-12 sm:col-start-1 sm:col-span-8 md:col-start-2 lg:col-start-3 md:col-span-8 lg:col-span-6 flex items-center absolute inset-0 pointer-events-none p-4">
            <h2 className="text-[10vw] sm:text-[8vw] md:text-[5vw] lg:text-[3vw] xl:text-[5.5vw] font-bold text-white mix-blend-difference z-20 leading-tight">
              La stratégie <br className="hidden md:block" /> d'abord.
            </h2>
          </div>
        </div>
      </div>

      {/* Footer avec contenu et bouton */}
      <footer className="flex-shrink-0 px-4 pb-4">
        <Separate height="h-0.5" />

        <div className="mt-4 md:mt-6">
          <div className="grid grid-cols-12 gap-2 md:gap-4">
            <div className="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-6 md:col-start-7 text-left">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight mb-3 sm:mb-4 md:mb-6">
                Rejoignez le club d'échecs de Mat Carlsen,{" "}
                <br className="hidden md:block" />
                ouvert à tous les niveaux.
              </p>
              <Button text="S'inscrire" />
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="flex justify-end mt-4 md:mt-6">
          <div className="text-xs sm:text-sm font-black uppercase flex items-center gap-1 sm:gap-2">
            scroll to explore
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-45 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </footer>
    </section>
  );
}
