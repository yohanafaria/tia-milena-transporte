import Contato from "./components/Contato";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Sobre from "./components/Sobre";
import { useState } from "react";
import Atuacao from "./components/Atuacao";


const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); 
  
  return (
    <div>
      <Navbar />
      <Hero setIsOpen={setIsOpen} /> 
      <Sobre />
      <Atuacao />
      <Contato />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} /> 
    </div>
  );
};

export default App;
