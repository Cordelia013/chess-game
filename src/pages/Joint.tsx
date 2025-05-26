
import { Separate } from "./components/Separate";
import img_joint from "../assets/img_joint.jpg";




export default function Joint() {
  return (
    <section className="relative w-full h-screen pb-6  flex flex-col">
      <Separate height={"h-0.5 "} />
      <div className="flex-0" />
      <div className="flex flex-col flex-grow h-full">
        {/* ligne1 */}
        <div className="flex flex-1" style={{ flexBasis: "80%", minHeight: 0 }}>
          <div className="" style={{ width: "32vw" }}>
            {/* Première row, première colonne */}
          </div>
            <div className="flex-1 border-l-2 border-black">
            <h2 className=" text-[6vw] px-4 font-bold align-bottom leading-[0.8em] mt-8 text-left">
            Apprendre
            </h2>
                 


            </div>

  
        </div>
        <Separate height={"h-0.5 "} />
        {/* ligne2 */}
        <div className="flex flex-1 " style={{ flexBasis: "40%", minHeight: 0 }}>
          <img src={img_joint} alt="Joint chess club" className="absolute ml-30 bottom-32" />
          <div className="" style={{ width: "32vw" }}>
            {/* Deuxième row, première colonne */}
          </div>

            <div className="flex-1 flex flex-col ml-4">
            <div className="flex-1 flex  border-b-1 border-black">
                <p className="font-bold" style={{ width: "33.5%" }}>01</p>
                <p className="" style={{ width: "66.5%" }}>Tournois réguliers</p>
            </div>
            <div className="flex-1 flex border-b-1 border-black">
              <p className="font-bold" style={{ width: "33.5%" }}>02</p>
              <p style={{ width: "66.5%" }}>Membres qui aiment se creuser les méninges</p> 
            </div>

            <div className="flex-1 flex border-b-1 border-black">
              <p className="font-bold" style={{ width: "33.5%" }}>03</p>
              <p style={{ width: "66.5%" }}>Conseils et parties commentées</p>
            </div>
            <div className="flex-1 flex ">
              <p className="font-bold" style={{ width: "33.5%" }}>04</p>
              <p className="" style={{ width: "66.5%" }}>Communauté amicale</p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
