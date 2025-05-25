import Button from "./components/Button";
import img1_galerie from "../assets/Frame_67galerie.jpg";
import img2_galerie from "../assets/Frame_67galerie-1.jpg";
import img3_galerie from "../assets/Frame_67galerie-2.jpg";
import img4_galerie from "../assets/Frame_67galerie-3.jpg";



export default function Inscription() {
  return (
    <section className="relative w-full h-screen  my-8">
   
    
    <div className="h-full  flex">  
        
        {/* <!-- Galerie --> */}
        <div className="w-[14em] h-[44.5em] border-1  flex flex-col">
            <div className="border-b p-4 text-sm font-medium">
                [Gallerie]
            </div>
            <div className="border-b h-12 flex items-center justify-end p-4 text-sm font-black">
                04 / 04
            </div>
            <div className="flex-1 grid grid-rows-4 gap-4 my-4">   
                <div className="flex justify-center border-b-1 pb-4">
                    <img src={img1_galerie} alt=""  />
                </div>
                <div className="flex justify-center border-b-1 pb-4">
                    <img src={img2_galerie} alt=""  />
                </div>
                <div className="flex justify-center border-b-1 pb-4">
                  <img src={img3_galerie} alt="" />
                </div>
                <div className="flex justify-center pb-4">
                  <img src={img4_galerie} alt=""  />
                </div>
            </div>
        </div>
    
        {/* <!-- Section centrale --> */}
         <div className="w-xl ml-auto flex justify-center items-center bg-gray-100 p-6">
                  <div className="flex flex-row gap-4 mt-[6vw] ">
                    <h6 className="font-black text-sm">Rejoindre la club /</h6>
                    <div>
                      <p className="text-sm text-left">
                      Fianchetto accueille tous les joueurs et joueuses, peu <br /> importe leur niveau. Que vous soyez curieux de  <br />découvrir le jeu ou motivé à perfectionner votre <br /> stratégie, vous êtes au bon endroit.<br /><br />

Prenez quelques secondes pour remplir le formulaire. <br /> Nous vous contacterons rapidement pour vous<br />intégrer à la communauté.
                      </p>
                 
                    </div>
                  </div>
                </div>
    
        {/* <!-- Formulaire --> */}
        <div className="flex-1  p-6 flex flex-col justify-end gap-8">
            
            <div>
                <h1 className="text-8xl font-bold mb-8">Inscription</h1>
                
                <div className="border rounded-lg overflow-hidden">
                    
                    <div className="flex border-b ">
                        <div className="w-48 p-4 border-r">
                            <label className="font-bold text-sm">Nom complet <span className="text-red-500">*</span></label>
                        </div>
                        <div className="flex-1 p-4">
                            <input type="text" placeholder="Entrez votre prénom et nom de famille" 
                                   className="w-full text-sm focus:outline-none" />
                        </div>
                    </div>
    
                    <div className="flex border-b ">
                        <div className="w-48 p-4 border-r  ">
                            <label className="font-bold text-sm">Adresse courriel <span className="text-red-500">*</span></label>
                        </div>
                        <div className="flex-1 p-4">
                            <input type="email" placeholder="Entrez votre adresse courriel" 
                                   className="w-full text-sm focus:outline-none" />
                        </div>
                    </div>
    
                    <div className="flex border-b ">
                        <div className="w-48 p-4 border-r ">
                            <label htmlFor="experience-level" className="font-bold text-sm">Niveau d'expérience</label>
                        </div>
                        <div className="flex-1 p-4">
                            <select id="experience-level" className="w-full text-sm focus:outline-none">
                                <option>Sélectionnez votre niveau d'expérience</option>
                                <option>Débutant</option>
                                <option>Intermédiaire</option>
                                <option>Avancé</option>
                            </select>
                        </div>
                    </div>
    
                    <div className="flex border-b ">
                        <div className="w-48 p-4 border-r ">
                            <label className="font-bold text-sm">Message</label>
                        </div>
                        <div className="flex-1 p-4">
                            <textarea placeholder="Precisez vos attentes, motivations et disponibilités" 
                                                              rows={4} className="w-full text-sm focus:outline-none resize-none "></textarea>
                        </div>
                    </div>
    
                    <div className="p-4 flex items-center gap-3">
                        <input type="checkbox" id="consent" className="w-4 h-4" />
                        <label htmlFor="consent" className="text-sm">
                            J'accepte que mes informations soient utilisées pour être contacté par le club.
                        </label>
                    </div>
    
                </div>
          </div>
          {/* button  */}
          <div>
            <Button text="Je m'inscris"  />
</div>
          

        </div>
    
    </div>

    </section>
  );
}
