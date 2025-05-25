import img1 from "../assets/Frame_41actu-.jpg";
import img2 from "../assets/Frame_41actu--1.jpg";   
import img3 from "../assets/Frame_41actu--2.jpg";

import Button from "./components/Button";
import Card from "./components/Card";
import { Separate } from "./components/Separate";

export default function Actuality() {
  return (
    <section className="relative w-full h-screen  ">
      <div className="mx-auto  h-full flex flex-col">
        <div className="">
          <Separate height="h-4 mb-1" />
          <Separate height="h-2.5 mb-1.5" />
          <Separate height="h-2 mb-2" />
          <Separate height="h-1" />
        </div>

        <div className="flex justify-between items-baseline -mt-6">
          <h2 className="text-[7vw] font-bold">
            Actualités
          </h2>
          <Button text={"voir les actualités"} />
        </div>
        <div className="mb-4">
          <Separate height="h-0.5" />
</div>
       <div className="flex justify-between">
       <Card 
    title="Tournoi Universitaire"
    date="01/06/25"
    location="Montréal, Canada"
    imageUrl={img1}
    imageAlt="partie compétition échecs"
        onClick={() => console.log('Card clicked')}
          />
            <Card 
    title="Tournoi Universitaire"
    date="01/06/25"
    location="Montréal, Canada"
    imageUrl={img2}
    imageAlt="partie compétition echecs entre générations"
    onClick={() => console.log('Card clicked')}
          />
            <Card 
    title="Tournoi Universitaire"
    date="01/06/25"
    location="Montréal, Canada"
    imageUrl={img3}
    imageAlt="partie compétition echecs"
    onClick={() => console.log('Card clicked')}
  />
      </div> 
      </div>

      
    </section>
  );
}
