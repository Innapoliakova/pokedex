import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
setCaught(caught.concat("NewPokemon"));
};

  return (
    <div>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={catchPokemon}>Catch a Pokemon</button>;
    {caught.length > 0 && (
<ul>
{caught.map((pokemon, index) => (
<li key={index}>{pokemon}</li>
))}
</ul>
)}
    </div>
  );
};

export default CaughtPokemon;

