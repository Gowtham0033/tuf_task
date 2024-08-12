import React, { useEffect, useState } from "react";
import "../index.css";
import "./Flashcard.css";

const Flashcard = ({ card, trigger }) => {
  const [flipped, setFlipped] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const [status, setstatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    setFlipped(false);
    setOptionSelected("");
    setSubmitted(false);
    setstatus("");
  }, [trigger]);
  const handleOption = (currOption) => {
    if (optionSelected.toString() === currOption.toString()) {
      setOptionSelected("");
    } else {
      setOptionSelected(currOption);
    }
    console.log(currOption);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const checkSubmit = () => {
    if (optionSelected.toString() === card.correct_answer.toString()) {
      setstatus("true");
    } else {
      setstatus("false");
    }
    setSubmitted(true);
  };
  return (
    <div className="middle ">
      {/*  make sure...when you go to next question or prev...put flipped to null */}
      {card === undefined ? (
        <div className="text-white">Sorry this quiz is not availabe right now T_T"</div>
      ) : (
        <div className={` flashcard ${flipped ? "flipped" : ""}`}>
          {/* <div className="front">{card.question}</div> */}
          {/* <div className="back">{card.answer}</div> */}

          <div className={`front`}>
            {/* <div className="over"> */}
            <div className="QA">
              <div className="question ">
                {card.id}.{card.question}
              </div>
              <div
                className={`options  ${submitted === true ? "offPointer" : ""}`}
              >
                <div
                  className={`A ${optionSelected === "A" ? "selected" : ""}`}
                  onClick={() => handleOption("A")}
                >
                  {card.option_a}
                </div>

                <div
                  className={`B ${optionSelected === "B" ? "selected" : ""}`}
                  onClick={() => handleOption("B")}
                >
                  {card.option_b}
                </div>
                <div
                  className={`C ${optionSelected === "C" ? "selected" : ""}`}
                  onClick={() => handleOption("C")}
                >
                  {card.option_c}
                </div>
                <div
                  className={`D ${optionSelected === "D" ? "selected" : ""}`}
                  onClick={() => handleOption("D")}
                >
                  {card.option_d}
                </div>
              </div>
            </div>
            <div className="frontBtns ">
              {/* <div className="anscrt"> */}

              <button className="ans" onClick={handleFlip}>
                Show Answer
              </button>
              {/* <div>✅</div> */}
              {/* </div> */}
              {optionSelected === "" ? (
                ""
              ) : (
                <button className="sub" onClick={checkSubmit}>
                  submit
                </button>
              )}
            </div>
            {/* {status=="true"?<div className="">Status : correct </div>:} */}
            <div className="text-sm mt-2">
              Status :{" "}
              {submitted === false
                ? ""
                : status === "true"
                ? "correct ✅"
                : "wrong ❌"}
            </div>

            {/* </div> */}
          </div>
          <div className="back">
            <div className="text-white ">
              correct Option :{" "}
              <span className="text-white">{card.correct_answer}</span>
            </div>
            <div className="explanation ans-reveal">
              Solution <span className="text-white">: {card.explanation}</span>
            </div>
            <button className="ans mt-5" onClick={handleFlip}>
              Show Question
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
