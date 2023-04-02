import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams} from "react-router-dom";
import Game from "../components/ul/Game";
import Price from "../components/ul/Price";
import Rating from "../components/ul/Rating";
const GameInfo = ({games,addToCart, cart}) => {
    const {id} = useParams();
    const game =games.find(game=> +game.id === +id)
  function addGameToCart(game){
        addToCart(game);
    }
  
    function gameExistsOnCart(){
        return cart.find(game => game.id == id)
    }
    return (
    <div className="games__body">
        <main id="games__main">
            <div className="games__container">
                <div className="row">
                    <div className="game__selected--top">
                        <Link to= "/games" className="game__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to="/games" className="game__link">
                            <h2 className="game__selected--title--top">Games</h2>
                            </Link>
                    </div>
                    <div className="game__selected">
                        <figure className="game__selected--figure">
                            <img src= {game.url}
                             alt="" className="game__selected--img" />
                        </figure>
                        <div className="game__selected--description">
                            <h2 className="game__selected--title">{game.title}</h2>
                            <Rating rating= {game.rating}/>
                        <div className="game__selected--price">
                        <Price salePrice={game.salePrice} originalPrice={game.originalPrice}/>
                        </div>
                    <div className="game__summary">
                        <h3 className="game__summary--title">Summary</h3>
                        <p className="game__summary--para">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptate reiciendis inventore, pariatur sit ut quaerat. Unde animi in eaque, itaque, ipsam quo deleniti deserunt molestiae obcaecati fugiat illum amet.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos culpa quo ut illum architecto facilis iusto laudantium inventore qui dolores ea, nam adipisci obcaecati a atque dolorem ipsa ipsam itaque.
                        </p>
                    </div>
                    {
                        gameExistsOnCart()?
                        ( <Link to={'/cart'}><button className="btn">checkout</button> </Link>
                        ):( <button className="btn" onClick={()=>addGameToCart(game)}>add to cart</button>)
                    }
                    </div>
                    </div>
                    </div>
            </div>
            <div className="games__container">
                <div className="row">
                    <div className="game__selected--top">
                        <h2 className="game__selected--title--top">Recommended Games</h2>
                    </div>
                    <div className="games">
                    {
                        games.filter(game=>game.rating === 5 && +game.id !==+ id )
                        .slice(0,4)
                        .map((game) => game= <Game game ={game} key={game.id}/>)
                    }
                    </div>
                </div>
            </div>
        </main>
    </div>

      );
  }
  
  export default GameInfo;