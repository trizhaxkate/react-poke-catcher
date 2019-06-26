import React from 'react';
import './App.css';
import PcHeader from './components/PcHeader';
import Explore from './components/Explore';
import Capture from './components/Capture';
import PokeDex from './components/PokeDex';
import { pokeApi } from './config/axiosConfig';
import PokeHeader from './components/PokeSelector';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      regions: [],
      locations: [],
      areas: [],
      possibleEncounters: [],
      pokemon: [],
      capturedPokemon: [],
    };
  }

  componentDidMount() {
    pokeApi
      .get('region')
      .then(res => {
        return {
          regions: res.data.results,
        };
      })
      .then(customRes => {
        return pokeApi.get(`region/${customRes.regions[0].name}`).then(res => {
          customRes.locations = res.data.locations;
          return customRes;
        });
      })
      .then(customRes => {
        return pokeApi
          .get(`location/${customRes.locations[0].name}`)
          .then(res => {
            customRes.areas = res.data.areas;
            return customRes;
          });
      })
      .then(customRes => {
        return pokeApi
          .get(`location-area/${customRes.areas[0].name}`)
          .then(res => {
            customRes.possibleEncounters = res.data.pokemon_encounters;
            return customRes;
          });
      })
      .then(customRes => {
        this.setState({
          loading: false,
          regions: customRes.regions,
          locations: customRes.locations,
          areas: customRes.areas,
          possibleEncounters: customRes.possibleEncounters,
        });
      });
  }


  handleRegionChange = (name) => {
    pokeApi.get(`region/${name}`)
    .then (res => {this.setState({locations:res.data.locations})})
  }

  handleLocationChange = (name) => {
    pokeApi.get(`location/${name}`)
    .then (res => {this.setState({areas:res.data.areas})})
  }

  handleAreaChange = (name) => {
    pokeApi.get(`location-area/${name}`)
    .then (res => {
      this.setState({
        possibleEncounters: res.data.pokemon_encounters
      })
    })
  }


  getPokemon = (pokemon) =>{
    return (
      pokeApi.get(`pokemon/${pokemon}`)
        .then(res=>{
         this.setState({
            pokemon: res.data
         })
        //console.log(this.state.pokemon)
        })
    )
  }

  capturedPoke = (cap) => {
    var x = this.state.capturedPokemon.concat(cap);
    var len = this.state.capturedPokemon.length;
    console.log()
    if (len !==6 ) {
      return(
        this.setState({
          capturedPokemon: x
        })
      )
    }

    
    
  }

  

  render() {
    return (
      <div className="App">
      <PcHeader />
      <Explore />
      <PokeHeader
        loading={this.state.loading}
        regions={this.state.regions}
        locations={this.state.locations}
        changeLocation={this.handleLocationChange}
        areas={this.state.areas}
        handleRegionChange={this.handleRegionChange}
        handleLocationChange={this.handleLocationChange}
        handleAreaChange={this.handleAreaChange}  
        randomPoke={this.getPokemon}
        pokemons={this.state.possibleEncounters}
      />
      <div className="capture-area">
        <Capture pokeFound={this.state.pokemon} myPoke={this.capturedPoke} capt={this.state.capturedPokemon}/>
        <PokeDex myPoke={this.state.capturedPokemon} />
      </div>
    </div>
    );
  }
}

export default App;
