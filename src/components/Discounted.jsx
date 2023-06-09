import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Game from "./ul/Game";
import {games} from '../data'
const Discounted = ( ) => {
  console.log(games);

  function Get5Stargames(){
  }
    return (
      <section id="recent">
        <div className="container">
        <div className="row">
            <h2 className="section__title">
            Discounted <span className="purple">Games</span> 
            </h2>
        <div className="games">
            {
        games.filter(game =>game.salePrice !==null)
        .slice(0,8)
        .map((game) => <Game game={game} key={game.id} />)

            }
        </div>
        </div>
        </div>
      </section>
      );
  }
  
  export default Discounted;