import React, { useState, useEffect } from 'react';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
