import React, { useContext, useState } from "react";
import FavoriteContext from "../context/favoritesContext";
import { getPokemons } from "../helpers/api";

export const Pokemon = (props) => {
  const { pokemon = {} } = props; 

  const { favoritePokemons, updateFavoritePokemon } = useContext(FavoriteContext)

  const [frontImage, setFrontImage] = useState(true)

  const redHeart = "❤️";
  const blackHeart = "🖤";

  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart

  const clickHeart = (e) => {
    e.preventDefault()
    updateFavoritePokemon(pokemon.name)
  }

  const changePokemonImage = () => {
    setFrontImage(!frontImage)
  }
  

  return (
    <div className="pokemon-card animate__animated animate__fadeIn">
      <div className="pokemon-img-container ">
        <img onMouseOver={changePokemonImage} onMouseOut={changePokemonImage} className="pokemon-img" src={frontImage ? pokemon.sprites.front_default : pokemon.sprites.back_default } alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return <div key={idx} className={`pokemon-type-text ${type.type.name}`}>{type.type.name}</div>;
            })}
          </div>
          <button className="button-heart" onClick={clickHeart}>
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
