import BG from "../src/assets/BG.jpg";

function Accueil() {
  return (
    <div>
        <img src={BG} alt="background" />
        <div className="Accueil flex justify-center items-center text-5xl">Bienvenue sur notre merveilleux site d'achat de Noël</div> 
    </div>

  );
}

export default Accueil;
