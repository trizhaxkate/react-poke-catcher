import React from 'react';


function PokeSelector({ handleChange, items }) {
  return (
    <select
      onChange={e => handleChange(e.target.value)}
      disabled={!items.length} className="regions"
    >
      {items.map(item => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

function ExploreBtn({ pokemons, getRandPokemon}) {
    return (
      <span onClick={()=>{
        var length = pokemons.length
        var randNumber = Math.floor(Math.random() * length);
        var randPokemons = pokemons[randNumber];
        getRandPokemon(randPokemons.pokemon.name,
        document.getElementById('poke-details').removeAttribute('hidden'))
      }
      }
      className='start-btn'>
             EXPLORE
            </span>
    )
}


function PokeHeader({
    loading,
    regions = [],
    locations = [],
    changeLocation,
    areas = [],
    handleRegionChange,
    handleLocationChange,
    handleAreaChange,
    pokemons=[],
    randomPoke

  }) {


    return (
        <div>
        <div className="loc-area">
            <div className="loc">
                
                <React.Fragment>
                    <div className="select">
                        <PokeSelector  className="regions" items={regions} handleChange={handleRegionChange}/>
                        <div className="select_arrow">
                        </div>
                    </div>
                    <div className="select">
                        <PokeSelector className="locations" handleChange={handleLocationChange} items={locations} />
                        <div className="select_arrow">
                        </div>
                    </div>
                    <div className="select">
                        <PokeSelector className="areas" items={areas} handleChange={handleAreaChange}/>
                        <div className="select_arrow">
                        </div>
                    </div>
                </React.Fragment>

                <ExploreBtn pokemons={pokemons} getRandPokemon={randomPoke} />
            </div>
            </div>
        </div>
    );
  }
  
  export default PokeHeader;