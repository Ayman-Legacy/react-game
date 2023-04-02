 import React,{useState,useEffect} from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import {games} from "./data";
import GameInfo from "./pages/GameInfo";
import Cart from "./components/Cart";
function App() {
  const [cart,setCart] = useState([]);
  function addToCart(game){
    setCart([...cart,{...game, quantity :1}])
  }
  function changeQuantity(game, quantity){
    
    +quantity === 0 ? removeItem(game) :
    setCart(cart.map(item => 
        +item.id === game.id ?
       {...item,
        quantity : +quantity,
      }
      
        : 
           item
            
      ));
  }
  function removeItem(item){
    //console.log('before removal',cart)
    setCart(cart.filter(game=> game.id !==item.id))
    //console.log('after removal',cart)
  }
  function numberOfItems(){
    let counter=0;
    cart.forEach(item => {
      counter += item.quantity;
    });
    return counter;
  }
 useEffect(()=>{
  console.log(cart)
}, [cart])
  return (
    <Router>
      <div className="app">
       <Nav numberOfItems={numberOfItems()}/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/games"  element={<Games  games={games}/>}/>
       <Route path="/cart"  element={<Cart games={games} cart={cart} 
                            changeQuantity={changeQuantity} 
                             removeItem={removeItem}/>}/>
       <Route path="/games/:id"  element={<GameInfo games={games} 
                                 addToCart={addToCart} cart={cart}
                                
       />}/>
       </Routes>
       <Footer />
      </div>
      </Router>

    )
}

export default App;
