import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

export default function FavoritesContextProvider({children}) {
    const [favoriteMealIDs, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
    }

    //passing these function into context provider

    const value = {
        ids: favoriteMealIDs,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    };

    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

