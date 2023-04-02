import React from "react";
import { Link } from "react-router-dom";
import Undraw from '../assets/undraw.svg';
const Landing = () => {
    return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>
                        Sudan's Gamers
                    </h1>
                    <h2>Find Your Best Preferred <span className="purple">Games</span></h2>
                    <Link to="/games">
                        <button className="btn">Browse Games</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={Undraw} alt="" />
                </figure>
            </div>
        </header>
    </section>

      );
  }
  
  export default Landing;