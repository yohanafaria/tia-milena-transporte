import React, { useContext, useEffect, useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
    const { isMenuOpen, toggleMenu } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-custom-purple text-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600 flex items-center"
        >
          <img src="/favicon.png" alt="Logo" className="h-14" />
        </a>

        {/* Botão Toggle Menu */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Menu de Navegação */}
        <nav
          className={`md:flex md:items-center md:space-x-6 fixed md:relative top-0 left-0 w-full md:w-auto bg-gray-700 md:bg-transparent transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
          } md:transform-none md:translate-y-0 z-50 md:z-auto md:relative md:pl-60`}
        >
          {/* Ícone de Fechar no Mobile */}
          <div className="flex justify-between items-center pb-3 p-4 md:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleMenu} className="text-white text-2xl">
              <HiX />
            </button>
          </div>

          <ul className="flex flex-col relative md:right-60 md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center px-4 py-6 md:p-0 ml-0">
          <li>
              <a href="#sobre" className="text-white hover:shadow-xl text-1xl">
                Quem somos?
              </a>
            </li>
            <li>
              <a href="#atuacao" className="text-white hover:shadow-xl text-1xl">
                Área de atendimento
              </a>
            </li>
            <li>
              <a href="#contato" className="text-white hover:shadow-xl text-1xl">
                Fale Conosco
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;