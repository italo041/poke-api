import React from 'react'
import { Pagination } from './Pagination';
import { Pokemon } from './Pokemon';

export const Pokedex = (props) => {
    const { pokemons = [], page, setPage, total, loading } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total)
        setPage(nextPage)
    }
  
    return (
        <div >
            <div className="header">
                <img className="pokedex-img" src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" />
                <div>
                    <Pagination 
                    page={page+1} 
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}/>
                </div>
            </div>
            {loading 
                ?   <div>Cargando pokemones...</div>
                :   <div className="pokedex-grid">
                        {
                            pokemons.map((pokemon, idx) => {
                                if(pokemon){
                                    return (
                                        <Pokemon pokemon={pokemon} key={pokemon.name} />
                                    )
                                } else {
                                    return (
                                        <div className="pokedex-grid-error-message" key={idx}>No se encontraron resultados</div>
                                    )
                                }
                            })
                        }
                    </div>
            }
        </div>
    )
}
