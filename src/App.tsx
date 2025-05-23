import { GridProvider, GridOverlay, Grid } from "./grid";
import "./App.css";
import Heros from "./pages/Heros";
import Explication from "./pages/Explication";
import About from "./pages/About";
import { ReactLenis } from "@studio-freight/react-lenis";

// PAS besoin de useEffect ni d'instancier Lenis à la main avec ReactLenis !

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1, //Contrôle la durée de l'animation de défilement.
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), //Fonction d'interpolation pour personnaliser la courbe de défilement.
        orientation: "vertical", //Orientation du défilement ('vertical' ou 'horizontal').
        gestureOrientation: "vertical", //Orientation des gestes ('vertical', 'horizontal' ou 'both').
        wheelMultiplier: 1, //Multiplicateur pour les événements de la molette de la souris.
        touchMultiplier: 1, //Multiplicateur pour les événements tactiles.
        infinite: false, // Active le défilement infini.
      }}
    >
      <GridProvider>
        {/* <GridControl /> */}
        <GridOverlay />
        <Grid>
          <Heros />
          <Explication />
          <About />
        </Grid>
      </GridProvider>
    </ReactLenis>
  );
}
