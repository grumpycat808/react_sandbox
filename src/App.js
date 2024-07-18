import React, { useState } from "react";
import "./App.css";
import "animate.css";
import StarRating2 from "./StarRating2";
import Todo from "./Todo";
import ProgressBar from "./ProgressBar";
export default function App(props) {
  const [inputVal, setInputVal] = useState("");
  const animateCSS = (element, animation, prefix = "animate__") =>
    new Promise((resolve) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve("Animation ended");
      }

      node.addEventListener("animationend", handleAnimationEnd, { once: true });
    });
  const [filledStars, setFilledStars] = useState(0);
  // myelement.addEventListener("mouseover", animateCSS(".my-element", "bounce"));
  // This handler will be executed only once when the cursor
  // moves over the unordered list
  const onChange = (index) => setFilledStars(index + 1);

  return (
    <div className="App">
      <ProgressBar percentage={35}></ProgressBar>
    </div>
  );
}
