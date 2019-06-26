import React from 'react';
import PokeBall from './giphy.webp';


function CaptureBtn({pokeFound, myPokemon, myCapt}) {
  return(
    <div className="poke-ball">
        <img id="poke-ball" alt="" style={{'height':'120px'}} src={PokeBall} 
       onClick={()=>{
        
        myPokemon(pokeFound)
        console.log(myCapt.length)
        if (myCapt.length===5) {
          document.getElementById("capture").classList.add('hide');
          document.getElementById("limit").classList.remove('hide');
        }

       }} />
    </div>  
  )
}

export default function Capture ({pokeFound, myPoke, capt}){
  var name = '';
  var image = '';
  var hp = '';
  var def = '';
  var att = '';
  var spd = '';
  var spdef = '';
  var spattk = '';


  if(pokeFound.length!==0){
    name = pokeFound.name;
    image = pokeFound.sprites.front_default;
    hp = pokeFound.stats[5].base_stat;
    def = pokeFound.stats[3].base_stat;
    att = pokeFound.stats[4].base_stat;
    spd = pokeFound.stats[0].base_stat;
    spdef = pokeFound.stats[1].base_stat;
    spattk = pokeFound.stats[2].base_stat;

  }
  
  
  
    return (
        <React.Fragment>
        <div className="capture" id="capture">
              <div className="poke-image">
                  <img src={image} id="poke-image" style={{'height':'250px'}} alt="" />
              </div>

                
             <CaptureBtn pokeFound={pokeFound} myPokemon={myPoke} myCapt = {capt}/>
              <div className="desc-box" id="poke-details" hidden>
                  <span className="poke-name">{name}</span>    
                  <div className="desc-text">
                            <div className="desc-1">
                                  <p id="speed">speed: {spd}</p>
                                  <p id="defense">defense: {def} </p>
                            </div>
                            <div className="desc-1">
                                  <p id="sp-defense">special-defense: {spdef}</p>
                                  <p id="attack">attack: {att} </p>
                          </div>
                          <div className="desc-1">
                                  <p id="sp-attack">special-attack: {spattk}</p>
                                  <p id="hp">hp: {hp} </p>
                          </div>
                  </div>
                  </div>
        </div>    

        <div className="limit hide" id="limit">
            <div class="limit-box">
                    <br/>
                    YOUR POKEDEX IS FULL
            </div>
        </div>

        </React.Fragment>              
    );

}
