import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Pokedex } from './components/Pokedex';
import { Searchbar } from './components/Searchbar';
import { FavoriteProvider } from './context/favoritesContext';
import { getPokemonData, getPokemons } from './helpers/api'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState()
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState([])

  const fetchPokemons = async (params) => {
    try {
      setLoading(true)
      const data = await getPokemons(25, 25 * page) 
      const promises = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 25))
      console.log(pokemons);
    } catch (error) {
      
    }
  }
  

  useEffect(() => {
    fetchPokemons()
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites]
    const isFavorite = favorites.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1)
    } else {
      updated.push(name)
    }
    setFavorites(updated)
  }
  

  return (
    <FavoriteProvider value={{favoritePokemons: favorites, 
    updateFavoritePokemon: updateFavoritePokemons}} >
      <div>
        <Navbar/>
        <div className="App">
          <Searchbar setPokemons={setPokemons} />
            <Pokedex 
                loading={loading}
                pokemons={pokemons}
                page={page}
                setPage={setPage}
                total={total} />
        </div>
      </div>
    </FavoriteProvider>
  );
}

export default App;
