import { useEffect } from "react";
import Lenis from "lenis";
import { GridProvider, GridOverlay } from "./grid";
import Heros from "./pages/Heros";
import Explication from "./pages/Explication";
import About from "./pages/About";
import Joint from "./pages/Joint";
import Actuality from "./pages/Actuality";
import Inscription from "./pages/Inscription";
import Footer from "./pages/Footer";

import "./App.css";
import "./lenis.css";

export default function App() {
  useEffect(() => {
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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <GridProvider>
      <GridOverlay />
      {/* Container principal de la page */}
      <main className="min-h-screen max-w-screen-3xl mx-auto px-4 scroll-smooth flex flex-col gap-y-4">
        <Heros />
        <Explication />
        <About />
        <Joint />
        <Actuality />
        <Inscription />
        <Footer />
      </main>
    </GridProvider>
  );
}
