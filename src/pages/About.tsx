

export default function About() {
  return (
    <header className="relative col-span-12 h-screen mb-4 ">
    
      {/* title page */}
      <h1 className="flex items-center justify-center gap-4 text-4xl font-bold my-4">
        titre
      </h1>
     

      {/* sous information */}
      <div className="grid grid-cols-12  my-4  text-sm">
        <ul className="col-span-12 grid grid-cols-12 gap-4">
          <li className="col-span-3 text-left">
            Club d'échecs pour tous les niveaux
          </li>
          <li className="col-span-3 text-left">Intro /</li>
          <li className="col-span-3 text-left">[En-tête]</li>
          <li className="col-span-3 text-left">C8-0</li>
        </ul>
      </div>
    
      {/* section image h2 + photo */}
      <div className="w-full grid grid-cols-12 ">
        <div className=" col-start-3 relative">
          <h2 className="absolute bottom-0 font-bold text-left leading-tight-fluid w-[61vw] text-custom-black text-fluid-4xl mix-blend-multiply">
            La stratégie
            <br />
            d'abord.
          </h2>
        </div>

        <div className="col-span-4 col-start-7 col-end-13">
          
        </div>
      </div>
      {/* section info header */}
   
      <div className="w-full ">
        <div className="grid grid-cols-12">
          <div className="col-start-6 col-end-12 text-left mx-3 mb-4">
            <p className="text-fluid-base  mb-7 text-fluid-xl leading-tight-fluid">
              Rejoignez le club d’échecs de Mat Carlsen, <br /> ouvert à tous
              les niveaux.
            </p>
            <button className="bg-custom-secondary uppercase text-custom-white font-bold mb-7 py-5 px-8 rounded">
              s'inscrire
            </button>
          </div>
        </div>
      </div>
      {/* sous information */}
      <div className="w-full ">
        <ul className="flex justify-end font-black text-sm">
          <li className="text-left uppercase flex items-center gap-2">
            scroll to explore
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-45"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="3" // Épaisseur augmentée de 2 à 4
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </ul>
      </div>
    </header>
  );
}

