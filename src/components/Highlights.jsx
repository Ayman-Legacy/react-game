import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ul/Highlight";
const Highlights = () => {
    return (
 <section id="highlights">
    <div className="container">
        <div className="row">
            <h2 className="section__title">Why choose <span className="purple"> SudaGames?</span></h2>
        </div>
        <div className="highlight__wrapper">
        <Highlight icon={<FontAwesomeIcon icon= "bolt"/>} 
           title="Easy and Quick"
           para="Get access to the game that you purchased instantly." />
        <Highlight icon={<FontAwesomeIcon icon= "book-open"/>} 
           title=" Quick"
           para="para2" />
        <Highlight icon={<FontAwesomeIcon icon= "tags"/>} 
           title="Easy"
           para="para 3" />
        
           </div>
    </div>
 </section>
      );
  }
  
  export default Highlights;