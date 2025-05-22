import title from "../assets/FIANCHETTO.svg";
import { Separate } from "./components/separate";
import img_hero from "../assets/heros_img_bg.jpg";
export default function Heros() {
  return (
    <header className="col-span-12 ">
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

      <div className="w-full ">
        <div className="flex ">
          <div className=" bg-amber-500 w-[50vw] relative">
            <h2 className="absolute bottom-0 font-bold leading-[100px] w-[61vw] text-white text-fluid-4xl ">
              La stratégie
              <br />
              d’abord.
            </h2>
          </div>
          <img src={img_hero} alt="" className="w-[50vw]" />
        </div>
      </div>
    </header>
  );
}
