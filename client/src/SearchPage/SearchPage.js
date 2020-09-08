import React, { useEffect, useState, useRef } from "react";
import Buttons from "../Components/Buttons";
import Popup from "../Components/Popup";
import Bubble from "../Components/Bubbly/Bubble";
import "./SearchPageStyle.css";


export default function SearchPage() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [xCoor, setXCoor] = useState();
    const [yCoor, setYCoor] = useState();
    const [discoveryMade, setDiscoverMade] = useState(false);
    const [size, setSize] = useState(125);
    const [left, setLeft] = useState(170);
    const [fontSize, setFontSize] = useState(40);
    let interval = useRef(null);

    const style = {
        searchBox: {
            background: "url(https://mymo-secure-content.s3.us-east-2.amazonaws.com/15989309663050.7647081174685721)",
            backgroundSize: "200vw 200vh",
            backgroundColor: "gray",
            backgroundPositionX: mousePosition.x,
            backgroundPositionY: mousePosition.y,
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: 225,
            width: size,
            height: size,
            borderRadius: 10,
            bottom: 20,
            left: 25,
            backgroundColor: "transparent",
            margin: 0,
        },
        title: {
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: fontSize,
            bottom: 25,
            left: left,
            margin: 0,
        }
    }

    useEffect(() => {
        setSize(80);
        setLeft(125);
        setFontSize(30);
        window.addEventListener("touchmove", touchMove);
        window.addEventListener("touchstart", touchMove);
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mousedown", () => mouseDown());
        // return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    function mouseDown() {
        let up = false;
        window.addEventListener("mouseup", () => (up = true));
        interval = setInterval(() => {
            if (!up) {
                generateTrail();
            }
        }, 40)
    }

    function mouseMove(e) {
        setXCoor(e.clientX);
        setYCoor(e.clientY);
        if (e.clientX > 155 && e.clientX <= 230) {
            if (e.clientY > 262 && e.clientY <= 334) {
                setDiscoverMade(true);
            }
        }
    }

    function touchMove(e) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        if (e.touches[0].clientX > 155 && e.touches[0].clientX <= 230) {
            if (e.touches[0].clientY > 262 && e.touches[0].clientY <= 334) {
                setDiscoverMade(true);
            }
        }
    }

    function generateTrail() {
        console.log(xCoor);
        const bubble = document.createElement("img");

        bubble.style.cssText = `width: 40px; height: 40px; position: fixed; top:${mousePosition.y}; left:${40}`; 
        bubble.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7591f280-3969-4c42-b8e1-703a45165c68/ddnkzl5-412e01ae-7de3-4d18-909f-4582acd227af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzU5MWYyODAtMzk2OS00YzQyLWI4ZTEtNzAzYTQ1MTY1YzY4XC9kZG5remw1LTQxMmUwMWFlLTdkZTMtNGQxOC05MDlmLTQ1ODJhY2QyMjdhZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7DXQ-zA4Cr-9NCMI0jsN8Ai8S81WUT1DJMS-tOm-HyQ");
        document.getElementById("bg").appendChild(bubble);
    }

    function closeModal() {
        setDiscoverMade(false);
    }

    return (
        <div>
            <div id="bg" className="treasureHuntBackground"></div>
            <div className="searchBox" style={style.searchBox}></div>
            <div className="tr"></div>
            <Buttons />
            {discoveryMade ? <Popup type="eth" amount="0.05" closeModal={() => closeModal()} /> : null}
        </div>
    );
}   
