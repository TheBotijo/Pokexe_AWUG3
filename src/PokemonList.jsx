import React, { useState, useEffect } from 'react';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemonDetails = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return {
          name: data.name,
          imageUrl: data.sprites.front_default,
        };
      } catch (error) {
        console.error("Error fetching pokemon details:", error);
      }
    };

    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=35');
        const data = await response.json();
        
        const promises = data.results.map(pokemon => getPokemonDetails(pokemon.url));
        const pokemonDetails = await Promise.all(promises);

        setPokemons(pokemonDetails);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
