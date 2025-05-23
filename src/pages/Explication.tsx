import Grid_explain from "./components/grid_explainPage/grid_explain";

export default function Explication() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Grille directement dans la section */}
      <Grid_explain />

      {/* Texte superposé directement */}
      <div
        className="absolute inset-0 flex items-center justify-center "
        style={{ mixBlendMode: "difference" }}
      >
        <p className="text-white text-center md:text-left max-w-[95%]">
          {/* Version mobile - texte plus court */}
          <span className="block md:hidden text-xl sm:text-2xl leading-tight font-medium">
            Le fianchetto : une stratégie d'échecs où le fou est placé en
            retrait, permettant un contrôle subtil du centre. Nous avons choisi
            ce nom car il incarne notre approche : penser en avance et valoriser
            la profondeur.
          </span>

          {/* Version tablette */}
          <span className="hidden md:block lg:hidden text-3xl md:text-4xl leading-tight font-medium">
            Le fianchetto est une stratégie d'ouverture aux échecs où le fou est
            placé en retrait, derrière un pion latéral avancé. Ce positionnement
            permet un contrôle subtil du centre et une défense solide.
            Fianchetto incarne notre approche : penser en avance, construire
            avec rigueur, et valoriser la profondeur sur la précipitation.
          </span>

          {/* Version desktop complète */}
          <span className="hidden lg:block text-[52px] xl:text-[68px] 2xl:text-[110px] leading-[0.9]">
            Le fianchetto est une stratégie d'ouverture aux échecs où le fou est
            placé en retrait, derrière un pion latéral avancé. Ce positionnement
            discret, mais redoutablement efficace, permet un contrôle subtil du
            centre et une défense solide à long terme. Nous avons choisi ce nom
            parce qu'il incarne l'essence même de notre approche : penser en
            avance, construire avec rigueur, et valoriser la profondeur sur la
            précipitation. Fianchetto, c'est un hommage à l'élégance stratégique
            — une manière de jouer, apprendre et de se placer avec intention.
          </span>
        </p>
      </div>
    </section>
  );
}
