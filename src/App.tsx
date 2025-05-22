
import { GridProvider,  GridOverlay, GridControl, Grid } from "./grid";
import Navigation from "./layout/Navigation";
import "./App.css"
import Heros from "./pages/Heros";

export default function App() {
  return (
    <GridProvider>
      <GridControl />
      <GridOverlay />

      <Grid>
        <Navigation />
      <Heros />
      </Grid>
    </GridProvider>
  );
}
