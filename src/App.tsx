
import { GridProvider,  GridOverlay, GridControl } from "./grid";
import Navigation from "./layout/Navigation";

export default function App() {
  return (
    <GridProvider>
      <GridControl />
      <GridOverlay />
        
    
      <div className="grid grid-cols-12 gap-4">
   
           <Navigation />
    
       
          <h1 className="text-2xl font-bold mb-4 col-span-12">Démo Grid System</h1>
  
      </div>
    </GridProvider>
  );
}
