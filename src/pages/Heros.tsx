import img_hero from "../assets/heros_img_bg.jpg";
import title from "../assets/FIANCHETTO.svg"

import Navigation from "../layout/Navigation";
import Button from "./components/Button";
import {Separate} from "./components/Separate";



export default function Heros() {
  return (
    <section className="relative w-full h-screen bg-custom-white  pb-6 ">
      <div className=" mx-auto px-4 h-full flex flex-col">
        <Navigation />
        {/* Title */}
        <h1 className="flex items-center justify-center my-4">
          <img
            className="w-full px-4"
            src={title}
            alt="Titre de la page d'accueil - Fianchetto"
          />
       
        </h1>
        <div>
              <Separate height="h-4" />
        </div>
    
        {/* Sub-information */}
        <div className="grid grid-cols-12 gap-4 my-4 text-sm">
          <div className="col-span-3 text-left ">
            Club d'échecs pour tous les niveaux
          </div>
          <div className="col-span-3 text-left ">Intro /</div>
          <div className="col-span-3 text-left">[En-tête]</div>
          <div className="col-span-3 text-left">C8-0</div>
        </div>
       

        <div>
        <Separate height="h-0.5" />
        </div>


        {/* Main content area */}
        <div className="flex-1 flex items-end justify-end relative">
  <div className="w-full grid grid-cols-12 gap-4 relative">
    {/* Fond blanc pour la zone sans image */}
    <div className="absolute inset-0 bg-custom-white"></div>
    
    {/* Image */}
    <div className="col-span-12 md:col-start-5 md:col-span-8 md:absolute md:right-0 md:inset-y-0">
      <img
        src={img_hero}
        alt="Hero image"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Texte avec mix-blend-mode */}
    <div className="col-span-12 md:col-start-3 md:col-span-8 relative flex items-end">
      <h2 className="font-bold text-left leading-tight-fluid text-custom-white 2xl:text-[10.3rem]  mb-4 mix-blend-difference">
        La stratégie
        <br />
        d'abord.
      </h2>
    </div>
  </div>
</div>
        {/* Bottom section */}
        <div className="pb-8">
          <Separate height="h-0.5 my-4" />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 md:col-start-7 text-left">
              <p className="text-fluid-xl leading-tight mb-7">
                Rejoignez le club d'échecs de Mat Carlsen, <br /> ouvert à tous
                les niveaux.
              </p>
              <Button text={"S'incrire"} />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-end mt-8">
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
