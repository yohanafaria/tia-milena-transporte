import { ReactNode, useState, createContext } from "react";

interface AuthContextProps {
  isMenuOpen: boolean; // Estado que indica se o menu está aberto
  toggleMenu: () => void; // Função para alternar o estado do menu

}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </AuthContext.Provider>
  );
}
