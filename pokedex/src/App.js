
import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();

function logWhenClicked () {
  console.log("Bla-bla-bla");
  }

function App () {
  return (
    <div>
    <Logo appName="Inna's Pokedex" handleClick={logWhenClicked} />
    <BestPokemon abilities={abilities}/>
    <CaughtPokemon date={date}/>
    </div>
  );
}


export default App;
