

import Button from "./components/Button";
import Card from "./components/Card";
import { Separate } from "./components/Separate";

export default function Actuality() {
  return (
    <section className="relative w-full h-screen  ">
      <div className="mx-auto px-4   h-full flex flex-col">
        <div className="">
          <Separate height="h-4 mb-1" />
          <Separate height="h-2.5 mb-1.5" />
          <Separate height="h-2 mb-2" />
          <Separate height="h-1" />
        </div>

        <div className="flex justify-between items-baseline -mt-9">
          <h2 className="text-[6vw] font-bold">
            Apprendre
          </h2>
          <Button text={"voir les actualités"} />
        </div>
        <div className="my-4">
          <Separate height="h-1" />
</div>
       <div className="flex justify-between">
       <Card 
    title="Tournoi Universitaire"
    date="01/06/25"
    location="Montréal, Canada"
    imageUrl="/images/tournoi-universitaire.jpg"
    imageAlt="Pièces d'échecs sur un échiquier"
    onClick={() => console.log('Card clicked')}
          />
            <Card 
    title="Tournoi Universitaire"
    date="01/06/25"
    location="Montréal, Canada"
    imageUrl="/images/tournoi-universitaire.jpg"
    imageAlt="Pièces d'échecs sur un échiquier"
    onClick={() => console.log('Card clicked')}
          />
            <Card 
    title="Tournoi Universitaire"
    date="01/06/25"
    location="Montréal, Canada"
    imageUrl="/images/tournoi-universitaire.jpg"
    imageAlt="Pièces d'échecs sur un échiquier"
    onClick={() => console.log('Card clicked')}
  />
      </div> 
      </div>

      
    </section>
  );
}
