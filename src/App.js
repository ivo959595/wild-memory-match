import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";
import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png" , matched: false},
  { src: "/img/ring-1.png" , matched: false},
  { src: "/img/scroll-1.png" , matched: false},
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null)
  const [choiseTwo, setChoiseTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));



    setCards(shuffledCards);
    setTurns(0);
  };

  const handleaChoise = (card) => {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card)
  
  }


  useEffect(() => {
    
     if(choiseOne && choiseTwo){
      setDisabled(true)
      if(choiseOne.src === choiseTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiseOne.src){
              return {...card, matched: true}
            }else {
              return card
            }
          })
        })

        resetTurn()
      } else {
      
      setTimeout(() => resetTurn(), 1000)  
      }
     }
  }, [choiseOne, choiseTwo])



  const resetTurn = () => {
    setChoiseOne(null)
    setChoiseTwo(null)
    setTurns(prevTurns => prevTurns +1)
    setDisabled(false)
  }


 

  return (
    <div className="App">
      <h1> Magic game </h1>
      <button onClick={shuffleCards}>New Gamne</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
          handleaChoise ={handleaChoise}
          key={card.id} 
          card={card}
          flipped={card === choiseOne || card === choiseTwo || card.matched}
          disabled={disabled}
          />
          
        ))}
        
      </div>
      <p> Turns: {turns}</p>
    </div>
  );
}

export default App;
