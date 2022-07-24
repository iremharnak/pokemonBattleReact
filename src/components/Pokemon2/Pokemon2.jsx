import React from 'react';

export default function Pokemon1(props) {
  return (
    <div>
      <h1>HP: {props.hp}</h1>
      <div><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" alt="" /></div>
      <button onClick={props.pokemon2Attack}>Attack</button>
    </div>
  )
}