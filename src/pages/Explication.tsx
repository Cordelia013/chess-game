import Grid_explain from "./components/grid_explainPage/grid_explain";

// import bg_explain from "../assets/bg-explain.jpg";


export default function Explication() {
  return (
    <div className="w-screen h-screen mt-4 relative ">
      <div className="">
        <p className="absolute top-0 left-0 right-0 text-white p-4 bg-opacity-50 mix-blend-difference text-[122px] text-left leading-24">
          Le fianchetto est une stratégie d’ouverture aux échecs où le fou est
          placé en retrait, derrière un pion latéral avancé. Ce positionnement
          discret, mais redoutablement efficace, permet un contrôle subtil du
          centre et une défense solide à long terme. Nous avons choisi ce nom
          parce qu’il incarne l’essence même de notre approche : penser en
          avance, construire avec rigueur, et valoriser la profondeur sur la
          précipitation. Fianchetto, c’est un hommage à l’élégance stratégique —
          une manière de jouer, apprendre et de se placer avec intention.
        </p>
        <Grid_explain />
      </div>
    </div>
  );
}
