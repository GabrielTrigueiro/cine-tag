import { createContext, useState } from "react";

export const FavoritosContexto = createContext();

FavoritosContexto.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);
  return (
    <FavoritosContexto.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContexto.Provider>
  );
}
