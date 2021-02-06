import React, { useState } from 'react'
import { searchPokemon } from '../helpers/api';

export const Searchbar = ({setPokemons, fetchPokemons}) => {

    const [search, setSearch] = useState("") 
  
    const onChange = (e) => { 
        setSearch(e.target.value)
    }
    
    const onClick = async (e) => {
        if(search.length !== 0) {
            const data = await searchPokemon(search);
            return setPokemons(prevState => [data] );
        }
        await fetchPokemons();
    }
    

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                    placeholder="Buscar pokemon..." 
                    onChange={onChange}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    )
}
