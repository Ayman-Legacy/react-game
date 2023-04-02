import React from 'react'
import { Link } from 'react-router-dom';
import empty from '../assets/empty_cart.svg'
function Cart({cart, changeQuantity,removeItem}) {
  function total()  {
    let price = 0;
    cart.forEach((item) => {
      price+=
      +((item.salePrice || item.originalPrice) * item.quantity).toFixed(2);
      
    });
    return price;
  };
  return (
    <div id="games__body">
      <main id="games__main">
        <div className="games__container">
          <div className="row">
            <div className="game__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__game">Game</span>
                  <span className="cart__quantity">Quantity</span>
                    <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {
                  cart.map(game => {
                    return (
                      <div className="cart__item">
                  <div className="cart__game">
                    <img src={game.url} 
                    alt="" 
                    className="cart__game--img" />
                    <div className="cart__game--info">
                      <span className="cart__game--title">{game.title}</span>
                      <span className="cart__game--price">{(game.salePrice || game.originalPrice).toFixed(2)}</span>
                      <button className="cart__game--remove" 
                      onClick={()=>removeItem(game)}>remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" 
                    min={0} max={99} 
                    className='cart__input'
                    value={game.quantity}
                    onChange={ (event)=> changeQuantity(game, event.target.value)}/>
                  </div>
                  <div className="cart__total">
                    ${((game.salePrice || game.originalPrice) * game.quantity).toFixed(2)} 
                  </div>
                </div>
                    )
                  })
                }
                
              </div>
           {
            cart.length === 0 &&    <div className="cart__empty">
                <img src={empty} alt="" className="cart__empty--img" />
                <h2>You don't have any Games in Your cart</h2>
                <Link to={'/games'}>
                <button className="btn">Browse Games</button>
                </Link>
              </div>
           }
             </div>
            {
              cart.length > 0 && 
              
            <div className="total">
            <div className="total__item total__sub-total">
              <span>Sub Total</span>
              <span>${(total()).toFixed(2)}</span>
            </div>
            <div className="total__item total__total__price">
              <span>Tax</span>
              <span>${(total() * 0.1).toFixed(2)}</span>
            </div>
            <div className="total__item total__tax">
              <span>Total</span>
              <span>${(total() * 0.9).toFixed(2)}</span>
            </div>
            <button className="btn btn__checkout no-cursor">
              Proceed to Checkout
            </button>
          </div>
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart