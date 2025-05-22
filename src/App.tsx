
import { GridProvider,  GridOverlay, Grid } from "./grid";
// import Navigation from "./layout/Navigation";
import "./App.css"
import Heros from "./pages/Heros";
import Explication from "./pages/Explication";

export default function App() {
  return (
    <GridProvider>
      {/* <GridControl /> */}
      <GridOverlay />

      <Grid>
        
        <Heros />
        <Explication />
      </Grid>
    </GridProvider>
  );
}
