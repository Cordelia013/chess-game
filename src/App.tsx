import { GridProvider, GridOverlay } from "./grid";
import "./App.css";
import "./lenis.css"
import Heros from "./pages/Heros";
import Explication from "./pages/Explication";
import About from "./pages/About";
import { useEffect } from "react";
import Lenis from "lenis";
import Actuality from "./pages/Actuality";
import Footer from "./pages/Footer";
import Inscription from "./pages/Inscription";
import Joint from "./pages/Joint";

export default function App() {
  useEffect(() => {
    // Initialiser Lenis
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
    });

    // Animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <GridProvider>
      <GridOverlay />
      {/* Container principal avec sections empilées verticalement */}
      <div className=" min-h-screen mx-4">
        <Heros />
        <Explication />
        <About />
        <Joint />
        <Actuality />
        <Inscription />
        <Footer />
      </div>
    </GridProvider>
  );
}
