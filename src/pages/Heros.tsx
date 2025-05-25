import img_hero from "../assets/heros_img_bg.jpg";
import title from "../assets/FIANCHETTO.svg"

import Navigation from "../layout/Navigation";
import Button from "./components/Button";
import {Separate} from "./components/Separate";
import "../assets/logo.svg"; 

export default function Heros() {
  return (
    <section className="relative w-full h-full ">
      <div className="  h-full flex flex-col">
        <Navigation />
        {/* Title */}
          <img
            className="w-full  py-4 hero-title-img"
            src={title}
            alt="Titre de la page d'accueil - Fianchetto"
          />
   
 
        <div>
          <Separate height="h-4" />
        </div>
    
        {/* Sub-information */}
        <div className="grid grid-cols-12 gap-4 my-4 text-sm">
          <div className="col-span-6 md:col-span-3 text-left">
            Club d'échecs pour tous les niveaux
          </div>
          <div className="col-span-2 md:col-span-3 text-left">Intro /</div>
          <div className="col-span-2 md:col-span-3 text-left">[En-tête]</div>
          <div className="col-span-2 md:col-span-3 text-left">C8-0</div>
        </div>

        <div>
          <Separate height="h-0.5" />
        </div>

        {/* Main content area */}

        <div className="grid grid-cols-12 gap-4 my-4 h-72 relative">
          {/* Image */}
            <div className="col-span-12 md:col-start-6 md:col-span-6 ">
            <img
              src={img_hero}
              alt="Hero image"
              className="w-full max-h-70 object-cover object-center"
            />
            </div>
          {/* Title overlapping the image */}
          <div className="col-span-12 md:col-start-3 md:col-span-6 flex items-center absolute inset-0 pointer-events-none">
            <h2 className="text-9xl font-bold  text-white px-4 mix-blend-difference z-20"            >
              La stratégie d’abord.
            </h2>
          </div>
        </div>


        {/* Bottom section */}
        <div className="pb-4">
          <Separate height="h-0.5" />

          <div className="grid grid-cols-12 gap-4 mt-6">
            <div className="col-span-12 md:col-span-6 md:col-start-7 text-left">
              <p className="text-3xl leading-tight mb-7">
                Rejoignez le club d'échecs de Mat Carlsen, <br className="hidden md:block" /> 
                ouvert à tous les niveaux.
              </p>
              <Button text="S'inscrire" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-end mt-0">
            <div className="text-sm font-black uppercase flex items-center gap-2">
              scroll to explore
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-45"
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