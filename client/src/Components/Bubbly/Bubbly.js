import React, { useState, useEffect } from "react";
import Bubble from "./Bubble.js";

export default function Bubbly(props) {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("yes");
            setBubbles([
                ...bubbles,
                {
                  positionY: props.positionY,
                  positionX: props.positionX
                }
              ]);
          }, 100);
          return () => clearInterval(interval);
    });

    return (
        <div>
            {bubbles.map(bubble => {
                return <Bubble positionX={bubble.positionX} positionY={bubble.positionY} key={Math.random()}/>
            })}
        </div>
    );

}