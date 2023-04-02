import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Game from "./ul/Game";
import {games} from '../data'
const Featured = ( ) => {
  console.log(games);

  function Get5StarGames(){
  }
    return (
      <section id="features">
        <div className="container">
        <div className="row">
            <h2 className="section__title">
              Featured <span className="purple">Games</span> 
            </h2>
        <div className="games">
        {games.filter(game => game.rating===5)
        .slice(0,4)
        .map((game) => <Game game={game} key={game.id} />)
};
        </div>
        </div>
        </div>
      </section>
      );
  }
  
  export default Featured;