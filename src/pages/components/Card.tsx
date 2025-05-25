import arrow from "../../assets/arrow.svg";


interface CardProps {
    title: string;
    date: string;
    location?: string;
    imageUrl: string;
    imageAlt?: string;
    onClick?: () => void;
  }
  
  export default function Card({ 
    title = "Tournoi Universitaire",
    date = "01/06/25",
    location = "Montréal, Canada",
    imageUrl = "https://placehold.co/428x384",
    imageAlt = "Image du tournoi",
    onClick
  }: CardProps) {
    return (
      <article 
        className="group relative w-[460px] bg-surface-light border border-on-surface-light hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden "
        onClick={onClick}
      >
        {/* Image container */}
        <div className="relative h-96 overflow-hidden p-4">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            src={imageUrl} 
            alt={imageAlt}
            loading="lazy"
          />
        </div>
        
        {/* Content section */}
            <div className="flex h-25 ">
                {/* Left content (title, date, location) */}
                <div className="flex-1 flex flex-col border-r border-b-black">
                    <div className="flex flex-row flex-1 border-y-1 border-b-black" style={{ height: '7vh' }}>
                        <div className=" text-black p-4 flex items-center flex-1 justify-between text-sm">
                            <span className="font-bold">{title}</span>
                            <span>{date}</span>
                        </div>
                      
                    </div>
                    <div className=" text-black p-4 flex items-center flex-1 text-sm">
                        {location}
                    </div>
                </div>
                {/* Right yellow box */}
                <div className=" text-gray-900 p-4 flex items-center justify-center border-t-1" style={{ width: '30%' }}>
                    <img src={arrow} alt="Arrow direction" />
                </div>
            </div>
      </article>
    );
  }