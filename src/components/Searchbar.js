import React, { useState } from 'react'
import { searchPokemon } from '../helpers/api';

export const Searchbar = ({setPokemons}) => {

    const [search, setSearch] = useState("") 
  
    const onChange = (e) => { 
        setSearch(e.target.value)
    }
    
    const onClick = async (e) => {
        const data = await searchPokemon(search);
        setPokemons(prevState => [data] );
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
