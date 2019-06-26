import React from 'react';

export default function PokeDex ({myPoke}){
var name = []
var image = [];

        for (let i=0; i<6; i++) {
                name[i] = '';
                image[i] = '';
        }


        if(myPoke.length!==0){
                var ctr = 0;
                myPoke.map(function(value) {
                        name[ctr] = value.name;
                        image[ctr] = value.sprites.front_default;

                        ctr++;
                })
        }
                
        //console.log(myPoke)
    return (
        <div className="index">
            <div className="index-inner">
                    <div className="index-title-area">
                            <div className="index-text">POKÉDEX</div>
                            <div className="index-text-sub">CAUGHT: <span className="ctr">{ctr}/6</span>| SEEN: <span className="seen"></span></div>
                            <div className="pokedex-wrap">
                                    <div className="pokedex">
                                    <div className="captured">
                                            <div>{name[0]}</div>
                                            <img src={image[0]} alt="" width="150px" height="150px" />
                                            </div>
                                  

                                   
                                    <div className="captured">
                                            <div>{name[1]}</div>
                                            <img src={image[1]} alt="" width="150px" height="150px" />
                                            </div>
                                   

                                   
                                    <div className="captured">
                                            <div>{name[2]}</div>
                                            <img src={image[2]} alt="" width="150px" height="150px" />
                                            </div>
                                    
                                  
                                    <div className="captured">
                                            <div>{name[3]}</div>
                                            <img src={image[3]} alt="" width="150px" height="150px" />
                                            </div>
                                   

                                   
                                    <div className="captured">
                                            <div>{name[4]}</div>
                                            <img src={image[4]} alt="" width="150px" height="150px" />
                                            </div>
                                   

                                   
                                    <div className="captured">
                                            <div>{name[5]}</div>
                                            <img src={image[5]} alt="" width="150px" height="150px" />
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
                        
    );

}
