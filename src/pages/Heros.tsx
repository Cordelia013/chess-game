import title from "../assets/FIANCHETTO.svg";
import { Separate } from "./components/separate";
import img_hero from "../assets/heros_img_bg.jpg";
export default function Heros() {
  return (
    <header className="col-span-12 h-screen">
      {/* title page */}
      <h1 className="flex items-center justify-center gap-4 text-4xl font-bold my-4">
        <img
          className=""
          src={title}
          alt="Titre de la page des d'acceuil - fianchetto"
        />
      </h1>
      <Separate height="h-4" />

      {/* sous information */}
      <div className="grid grid-cols-12  my-4  text-sm">
        <ul className="col-span-12 grid grid-cols-12 gap-4">
          <li className="col-span-3 text-left">
            Club d'échecs pour tous les niveaux
          </li>
          <li className="col-span-3 text-left">Intro /</li>
          <li className="col-span-3 text-left">[En-tête]</li>
          <li className="col-span-3 text-left">C8-0</li>
        </ul>
      </div>
      <Separate height="h-0.5" />
      {/* section image h2 + photo */}

      <div className="w-full">
        <div className="flex relative">
          <div className="w-[50vw] relative">
            <h2 className="absolute bottom-0 font-bold leading-[100px] w-[61vw] text-custom-black text-fluid-4xl mix-blend-multiply">
              La stratégie
              <br />
              d'abord.
            </h2>
          </div>
          <img
            src={img_hero}
            alt="Hero image"
            className="w-[50vw] object-cover"
          />
        </div>
      </div>
      {/* section info header */}
      <Separate height="h-0.5   my-4" />
      <div className="w-full ">
        <div className="grid grid-cols-12">
          <div className="col-start-6 col-end-12 text-left mx-4">
            <p className="text-fluid-base  mb-7  ">
              Explorez les tactiques et les stratégies pour améliorer vos
              compétences au jeu d'échecs.
            </p>
            <button className="bg-custom-secondary uppercase text-custom-white font-bold py-5 px-8 rounded">
              s'inscrire
            </button>
          </div>
        </div>
      </div>
      {/* sous information */}
      <div className="w-full">
        <ul className="flex justify-end font-black text-sm">
          <li className="text-left uppercase flex items-center gap-2">
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
                strokeWidth="3" // Épaisseur augmentée de 2 à 4
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </ul>
      </div>
    </header>
  );
}
