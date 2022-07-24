// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Pokemon1 from './components/Pokemon1/Pokemon1';
import Pokemon2 from './components/Pokemon2/Pokemon2';


class App extends React.Component {
  state = {
    pokemon1Hp: 100,
    pokemon2Hp: 100,
    statusMsg: "Pokemon go!"
  }
  pokemon1Attack = () => {
    const attack = this.state.pokemon2Hp -10;
    this.setState({pokemon2Hp: attack, statusMsg: "Bulbasaur is attacking Wartortle"})
  }
  pokemon2Attack = () => {
    const attack = this.state.pokemon1Hp -10;
    this.setState({pokemon1Hp: attack, statusMsg: "Wartotle is attacking Bulbasaur"})
  }
  render() {
    return (
      <div className='App'>
        <div className="pokeGroup">
          <Pokemon1 
            hp={this.state.pokemon1Hp} 
            pokemon1Attack= {this.pokemon1Attack} 
            className="Pokemon" />
          <Pokemon2 
            hp={this.state.pokemon2Hp} 
            pokemon2Attack= {this.pokemon2Attack} 
            className="Pokemon" />
        </div>
        <h2>Status: {this.state.statusMsg} </h2>
      </div>
    )
  }
}
export default App;
