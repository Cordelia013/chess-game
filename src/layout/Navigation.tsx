import logo from "../assets/logo.svg";

function Navigation() {
  return (
    <nav className="col-span-12 mt-4 h-16">
      <ul className="flex justify-between items-center ">
        <li>B2/G7 </li>
        <ul className="flex leading-[65px] ">
          <li className="text-4xl rotate-45 font-medium">+</li>
          <img
            className="mx-2.5"
            src={logo}
            alt="Logo Chess PF - Retour à l'accueil"
          />
          <li className="text-4xl rotate-45 font-medium">+</li>
        </ul>
        <li>00/07</li>
      </ul>
    </nav>
  );
}

export default Navigation;
