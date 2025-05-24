import { Separate } from "./components/Separate";

import about from "../assets/imgAbout.jpg";
import Button from "./components/Button";

export default function About() {
  return (
    <section className="relative w-full h-screen pt-2 pb-6 px-4">
      <Separate height={"h-0.5 mt-4"} />
      <div className="flex h-full text-custom-black  ">
        <div className="w-[67vw] mt-12">
          <h2 className=" text-[6vw] font-bold align-bottom leading-[0.8em] mt-8 text-left">
            Débutants / <br /> Expérimentés{" "}
          </h2>
          <p className="text-[2.5vw] relative text-left left-[15vw] top-6">
            Un club d’échecs fondé sur la stratégie, <br /> ouvert à tous les
            profils.
          </p>

          <div className="w-2xl ml-auto">
            <div className="flex flex-row gap-4 mt-[6vw] ">
              <h6 className="font-black text-lg">A propos /</h6>
              <div>
                <p className="text-lg text-left">
                  Fondé par Mat Carlsen (aucun lien, mais beaucoup d’ambition),
                  notre <br /> club accueille joueurs débutants et expérimentés
                  dans une ambiance <br /> stratégique mais détendue. En ligne
                  ou en personne, <br /> on vous attend au prochain coup !
                </p>
                <Separate height={"h-0.5 mt-8 "} />
                <div className="flex mt-4">
                  <Button text={"En savoir plus"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={about}
          className="w-[33vw] pb-4 ml-4"
          alt="La photo montre des joueurs de chess, deux générations de jeunes contre des personnes âgées"
        />
      </div>
    </section>
  );
}
