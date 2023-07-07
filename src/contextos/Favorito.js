import { createContext, useContext, useState } from "react";

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

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContexto);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista.slice(novaLista.indexOf(novoFavorito), 1);
    return setFavorito(novaLista);
  }
  return {
    favorito,
    adicionarFavorito,
  };
}
