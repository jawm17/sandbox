import React, { useEffect, useState, useRef } from "react";
import itemWharehouse from "../services/itemWharehouse";
import Buttons from "../Components/Buttons";
import Popup from "../Components/Popup";
import Bubble from "../Components/Bubbly/Bubble";
import "./SearchPageStyle.css";


export default function SearchPage() {
    const [itemObject, setItemObject] = useState({});
    const [xCoor, setXCoor] = useState();
    const [yCoor, setYCoor] = useState();
    const [discovery, setDiscovery] = useState(false);
    const [size, setSize] = useState(80);
    const [left, setLeft] = useState(125);
    const [fontSize, setFontSize] = useState(80);
    const [itemAvailable, setItemAvailable] = useState(false);
    let interval = useRef(null);

    const style = {
        searchBox: {
            background: "url(https://pbs.twimg.com/media/EXMInTxXkAAaWjC.jpg)",
            backgroundSize: "200vw 200vh",
            backgroundColor: "gray",
            backgroundPositionX: xCoor,
            backgroundPositionY: yCoor,
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
        getPrize();
        document.getElementById("detectionZone").addEventListener("touchmove", touchMove);
        document.getElementById("detectionZone").addEventListener("touchstart", touchMove);
        document.getElementById("detectionZone").addEventListener("mousemove", mouseMove);
        document.getElementById("detectionZone").addEventListener("mousedown", () => mouseDown());
    }, []);

    function touchMove(e) {
        setXCoor(e.touches[0].clientX);
        setYCoor(e.touches[0].clientY);
        if (e.touches[0].clientX > 155 && e.touches[0].clientX <= 230) {
            if (e.touches[0].clientY > 262 && e.touches[0].clientY <= 334) {
                discoveryMade();
            }
        }
    }

    function mouseMove(e) {
        setXCoor(e.clientX);
        setYCoor(e.clientY);
        if (e.clientX > 155 && e.clientX <= 230) {
            if (e.clientY > 262 && e.clientY <= 334) {
                discoveryMade();
            }
        }
    }

    function mouseDown() {
        let up = false;
        let e = "";
        window.addEventListener("mouseup", () => (up = true));
        document.getElementById("detectionZone").addEventListener("mousemove", (event) => (e = event));
        interval = setInterval(() => {
            if (!up) {
                generateTrail(e);
            }
        }, 40)
    }

    function generateTrail(e) {
        if (e) {
            const bubble = document.createElement("img");
            bubble.style.cssText = `width: 40px; height: 40px; position: fixed; top:${e.clientY}px; left:${e.clientX}px`;
            bubble.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7591f280-3969-4c42-b8e1-703a45165c68/ddnkzl5-412e01ae-7de3-4d18-909f-4582acd227af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzU5MWYyODAtMzk2OS00YzQyLWI4ZTEtNzAzYTQ1MTY1YzY4XC9kZG5remw1LTQxMmUwMWFlLTdkZTMtNGQxOC05MDlmLTQ1ODJhY2QyMjdhZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7DXQ-zA4Cr-9NCMI0jsN8Ai8S81WUT1DJMS-tOm-HyQ");
            bubble.setAttribute("class", "bubble");
            document.getElementById("detectionZone").appendChild(bubble);
        }
    }

    function getPrize() {
        itemWharehouse.getItems().then(data => {
            const { message, document } = data;
            if (!message) {
                if (document[0]) {
                    for (var i = 0; i < document.length; i++) {
                        if (!document[i].discovered) {
                            setItemObject({
                                "id": document[i]._id,
                                "itemName": document[i].itemName,
                                "quantity": document[i].quantity,
                                "link": document[i].link,
                                "heroImg": document[i].heroImg,
                                "mainImg": document[i].mainImg
                            });
                            setItemAvailable(true);
                            return;
                        }
                    }
                }
            } else {
                console.log("Error Occured");
            }
        })
    }

    function discoveryMade() {
        setDiscovery(true);
    }

    function closeModal() {
        setDiscovery(false);
        setItemAvailable(false);
        setItemObject({});
        getPrize();
    }

    return (
        <div>
            <div id="detectionZone" className="detectionZone"></div>
            <div className="searchBox" style={style.searchBox}></div>
            <div className="tr"></div>
            <Buttons />
            {discovery && itemAvailable ? <Popup info={itemObject} closeModal={() => closeModal()} /> : null}
        </div>
    );
}   
