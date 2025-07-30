import img_hero from "../assets/heros_img_bg.jpg";
import title from "../assets/FIANCHETTO.svg";

import Navigation from "../layout/Navigation";
import Button from "./components/Button";
import { Separate } from "./components/Separate";

export default function Heros() {
  return (
    <section className="relative w-full min-h-screen">
      <div className="flex flex-col h-full">
        <Navigation />
        {/* Title */}
        <img
          className="w-full py-2 md:py-4 hero-title-img"
          src={title}
          alt="Titre de la page d'accueil - Fianchetto"
        />

        <Separate height="h-2 md:h-4" />

        {/* Sub-information */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 text-xs md:text-sm py-2">
          <div className="col-span-12 sm:col-span-6 md:col-span-3 text-left mb-1 md:mb-0">
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

        <div>
          <Separate height="h-0.5" />
        </div>

        {/* Main content area */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 my-2 md:my-4 h-58 sm:h-70 md:h-80 lg:h-92 xl:h-104 relative">
          {/* Image */}
          <div className="col-span-12 sm:col-start-4 sm:col-span-9 md:col-start-6 md:col-span-7">
            <img
              src={img_hero}
              alt="Hero image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Title overlapping the image */}
          <div className="col-span-12 sm:col-start-1 sm:col-span-8 md:col-start-2 lg:col-start-3 md:col-span-8 lg:col-span-6 flex items-center absolute inset-0 pointer-events-none">
            <h2 className="text-[7vw] font-bold text-white px-2 sm:px-3 md:px-4 mix-blend-difference z-20 leading-tight">
              La stratégie <br className="hidden md:block" /> d'abord.
            </h2>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pb-2 md:pb-4 mb-1 md:mb-2">
          <Separate height="h-0.5" />

          <div className="grid grid-cols-12   gap-2 md:gap-4 mt-3 md:mt-6">
            <div className=" col-span-6 col-start-3 col-end-6 sm:col-span-10 sm:col-start-2 md:col-span-12 md:col-start-5 text-left px-2 md:px-0">
              <p className="text-[3vw] leading-tight mb-3 sm:mb-4 md:mb-6">
                Rejoignez le club d'échecs de Mat Carlsen,{" "}
                <br className="hidden md:block" />
                ouvert à tous les niveaux.
              </p>
              <Button text="S'inscrire" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-end mt-2 md:mt-4 px-2 md:px-0">
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
        </div>
      </div>
    </section>
  );
}
