import React, { useState } from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const card = cards[currentIndex];

  return (
    <div>
      <Flashcard card={card} trigger={currentIndex} />
      <div className="flex justify-center ">
        <button
          className="les"
          onClick={goPrev}
          disabled={currentIndex === 0} 
        >
          {" "}
          &lt;{" "}
        </button>
        
        <button
          className="gre"
          onClick={goNext}
          disabled={currentIndex === cards.length - 1} 
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FlashcardList;
