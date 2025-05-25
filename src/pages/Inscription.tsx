import Button from "./components/Button";
import img1_galerie from "../assets/Frame_67galerie.jpg";
import img2_galerie from "../assets/Frame_67galerie-1.jpg";
import img3_galerie from "../assets/Frame_67galerie-2.jpg";
import img4_galerie from "../assets/Frame_67galerie-3.jpg";


export default function Inscription() {
  return (
    <section className="relative w-full h-screen  my-8">
   
    
    <div className="h-full flex">
        
        {/* <!-- Galerie --> */}
        <div className="w-[237px] border-1 flex flex-col">
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
        <div className="w-[300px] border-r border-gray-400 flex flex-col justify-center p-6">
            <div className="text-right mb-4">
                <h3 className="font-black text-lg">Rejoindre le club /</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-4">
                <p>
                    <em>Fianchetto</em> accueille tous les joueurs et joueuses, peu importe leur niveau. 
                    Que vous soyez curieux de découvrir le jeu ou motivé à perfectionner votre stratégie, 
                    vous êtes au bon endroit.
                </p>
                <p>
                    Prenez quelques secondes pour remplir le formulaire. Nous vous contacterons rapidement 
                    pour vous intégrer à la communauté.
                </p>
            </div>
        </div>
    
        {/* <!-- Formulaire --> */}
        <div className="flex-1  p-6 flex flex-col justify-between">
            
            <div>
                <h1 className="text-6xl font-bold mb-8">Inscription</h1>
                
                <div className="border border-gray-400 rounded-lg overflow-hidden">
                    
                    <div className="flex border-b border-gray-400">
                        <div className="w-48 p-4 border-r border-gray-400 bg-gray-50">
                            <label className="font-bold text-sm">Nom complet <span className="text-red-500">*</span></label>
                        </div>
                        <div className="flex-1 p-4">
                            <input type="text" placeholder="Entrez votre prénom et nom de famille" 
                                   className="w-full text-sm focus:outline-none" />
                        </div>
                    </div>
    
                    <div className="flex border-b border-gray-400">
                        <div className="w-48 p-4 border-r border-gray-400 bg-gray-50">
                            <label className="font-bold text-sm">Adresse courriel <span className="text-red-500">*</span></label>
                        </div>
                        <div className="flex-1 p-4">
                            <input type="email" placeholder="Entrez votre adresse courriel" 
                                   className="w-full text-sm focus:outline-none" />
                        </div>
                    </div>
    
                    <div className="flex border-b border-gray-400">
                        <div className="w-48 p-4 border-r border-gray-400 bg-gray-50">
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
    
                    <div className="flex border-b border-gray-400">
                        <div className="w-48 p-4 border-r border-gray-400 bg-gray-50">
                            <label className="font-bold text-sm">Message</label>
                        </div>
                        <div className="flex-1 p-4">
                            <textarea placeholder="Precisez vos attentes, motivations et disponibilités" 
                                                              rows={4} className="w-full text-sm focus:outline-none resize-none"></textarea>
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
