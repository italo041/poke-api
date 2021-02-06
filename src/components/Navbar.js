import React, { useContext } from 'react'
import FavoriteContext from '../context/favoritesContext';


export const Navbar = () => {
    let imageURL = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    const { favoritePokemons } = useContext(FavoriteContext)  
    return (
        <nav>
            <div/>
            <div>
                <img alt="pokeapi-logo" src={imageURL} className="navbar-image" />
            </div>  
            <div>&#10084;&#65039; <span className="hearts-counter">{favoritePokemons.length}</span></div>
        </nav>
    )
}
