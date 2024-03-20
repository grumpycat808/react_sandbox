import React, { useEffect, useState } from "react";
import { getData } from "./getData";
import Form from "./Form";
import Accordion from "./Accordion";
import "./App.css";
import "animate.css";
export default function App(props) {
  const [messages, setMessages] = useState([]);
  // const makeRequest = () => {
  //   getData().then((response) => setMessages(response.data));
  // };
  // useEffect(() => {
  //   makeRequest();
  // }, []);

  let i = 1;

  function incrementBy(value) {
    i += value;
    return i;
  }

  function once(callback) {
    let invoked = false;

    var original = callback;
    callback = function () {
      // Do something with arguments:
      console.log(arguments);
      return original.apply(this, arguments);
    };
    // console.log(func.length);
    // return () => {
    //   if (!invoked) {
    //     invoked = true;
    //     // return func();
    //   } else {
    //   }
    // };
  }

  function intersectionWith(comparator, ...arrays) {
    let returnArr = [];

    if (arrays.length === 0) return arrays;
    return (returnArr = arrays.reduce((accumulator, currentVal) => {
      return accumulator.filter((item) => {
        return (
          currentVal.filter((currentValItem) =>
            comparator(currentValItem, item)
          ).length > 0
        );
      });
    }));
  }
  /*
  filter items in the accumulator by whether or not it is the "same" as one of the values in the next item
  */
  const arr1 = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
  ];
  const arr2 = [
    { y: 2, x: 1 },
    { x: 3, y: 4 },
  ];
  // const arr3 = [
  //   { x: 2, y: 3 },
  //   { x: 3, y: 4 },
  //   { x: 5, y: 6 },
  //   { x: 6, y: 7 },
  // ];

  const result = intersectionWith(
    (a, b) => a.x === b.x && a.y === b.y,
    arr1,
    arr2
  );
  // console.log("result", result);

  const test = [5, 7, 9, 12];
  // const animateCSS = (element, animation, prefix = "animate__") =>
  //   new Promise((resolve) => {
  //     const animationName = `${prefix}${animation}`;
  //     const node = document.querySelector(element);

  //     node.classList.add(`${prefix}animated`, animationName);

  //     // When the animation ends, we clean the classes and resolve the Promise
  //     function handleAnimationEnd(event) {
  //       event.stopPropagation();
  //       node.classList.remove(`${prefix}animated`, animationName);
  //       resolve("Animation ended");
  //     }

  //     node.addEventListener("animationend", handleAnimationEnd, { once: true });
  //   });

  // animateCSS(".my-element", "bounce").then((message) => {
  //   console.log("Resolved: " + message);
  // });

  // const myelement = document.getElementById("test");

  // This handler will be executed only once when the cursor
  // moves over the unordered list
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="App">
      <h1
        className={hovered ? "animate__animated animate__bounce" : ""}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        Hello world
      </h1>
    </div>
  );
}
