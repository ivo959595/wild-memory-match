import React from "react";
import "./SingleCard.css";

function SingleCard({card, handleaChoise, flipped, disabled}) {

    const handleClick = () =>{
        if(!disabled){
            handleaChoise(card)
        }
       
    }


  return (
    <div className="card">
      <div className={flipped? "flipped" : ""}>
        <img className= "front" src={card.src} alt="card-front" />
        <img 
        onClick={handleClick}
        className="back" src="/img/cover.png" alt="back" />
      </div>
    </div>
  );
}

export default SingleCard;
