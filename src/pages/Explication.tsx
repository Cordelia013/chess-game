import Grid_explain from "./components/grid_explainPage/grid_explain";

export default function Explication() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-[#F7F0DE]">
      {/* Grille directement dans la section */}
      <Grid_explain />

      {/* Texte superposé directement */}
      <div
        className="absolute inset-0 flex items-center justify-center mix-blend-difference"
      >
        <p className=" text-center md:text-left max-w-[95%]">
      
          <span className="block md:hidden text-xl sm:text-2xl leading-tight font-medium">
            Le fianchetto : une stratégie d'échecs où le fou est placé en
            retrait, permettant un contrôle subtil du centre. <br /><br />Nous avons choisi
            ce nom car il incarne notre approche : penser en avance et valoriser
            la profondeur.
          </span>

          {/* Version tablette */}
          <span className="hidden md:block lg:hidden text-3xl md:text-4xl leading-tight font-medium">
            Le fianchetto est une stratégie d'ouverture aux échecs où le fou est
            placé en retrait, derrière un pion latéral avancé. Ce positionnement
            permet un contrôle subtil du centre et une défense solide.<br /><br />
            Fianchetto incarne notre approche : penser en avance, construire
            avec rigueur, et valoriser la profondeur sur la précipitation.
          </span>

          {/* Version desktop complète */}
          <span
  className="hidden lg:block leading-[1.1] font-medium"
  style={{
    fontSize: "clamp(2rem, 2vw + 1rem, 4rem)",
    maxWidth: "65ch",
    margin: "0 auto",
    display: "block",
  }}
>
  Le fianchetto est une stratégie d’ouverture aux échecs où le fou est placé en retrait,
  derrière un pion latéral avancé. Ce positionnement discret, mais redoutablement efficace,
  permet un contrôle subtil du centre et une défense solide à long terme.
  <br /><br />
  Nous avons choisi ce nom parce qu’il incarne l’essence même de notre approche :
  penser en avance, construire avec rigueur et valoriser la profondeur sur la précipitation.
  <br /><br />
  Fianchetto, c’est un hommage à l’élégance stratégique —
  une manière de jouer, apprendre et de se placer avec intention.
</span>

        </p>
      </div>
    </section>
  );
}
