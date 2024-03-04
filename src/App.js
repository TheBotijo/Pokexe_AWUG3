import React from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon App</h1>
      </header>
      <main>
        <PokemonList />
      </main>
    </div>
  );
}

export default App;
