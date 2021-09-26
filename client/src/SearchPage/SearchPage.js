import React, { useEffect, useState, useRef } from "react";
import itemWharehouse from "../services/itemWharehouse";
import Buttons from "../Components/Buttons";
import Popup from "../Components/Popup";
import "./SearchPageStyle.css";


export default function SearchPage() {
    const [itemObject, setItemObject] = useState({});
    const [xCoor, setXCoor] = useState();
    const [yCoor, setYCoor] = useState();
    const [discovery, setDiscovery] = useState(false);
    const [itemAvailable, setItemAvailable] = useState(false);
    let randomPoint;
    let randomPoint2;
    const [width, setWidth] = useState(document.documentElement.clientWidth);
    const [height, setHeight] = useState(document.documentElement.clientHeight);
    const minecraftBlock = "https://vignette.wikia.nocookie.net/minecraft/images/4/43/SandNew.png/revision/latest?cb=20190910000231";
    const macCursor = "https://cdn.pixabay.com/photo/2014/04/02/14/06/point-306186_1280.png";
    let particles = [];
    const sizes = [15, 20, 25, 35, 45];
    let interval = useRef(null);

    const style = {
        searchBox: {
            background: "url(https://ak.picdn.net/shutterstock/videos/1026842039/thumb/9.jpg)",
            backgroundColor: "gray",
            backgroundPositionX: xCoor,
            backgroundPositionY: yCoor,
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: 225,
            width: 80,
            height: 80,
            borderRadius: 10,
            bottom: 20,
            left: 25,
            backgroundColor: "transparent",
            margin: 0,
        },
        title: {
            fontFamily: 'Fredoka One, cursive',
            position: "fixed",
            fontSize: 80,
            bottom: 25,
            left: 125,
            margin: 0,
        },
    }

    useEffect(() => {
        document.getElementById("detectionZone").addEventListener("touchmove", touchMove);
        document.getElementById("detectionZone").addEventListener("touchstart", () => mouseMove);
        document.getElementById("detectionZone").addEventListener("mousemove", mouseMove);
        document.getElementById("detectionZone").addEventListener("mousedown", (downEvent) => mouseDown(downEvent));
        window.addEventListener("resize", setPoints);
        interval = setInterval(() => {
            updateTrails();
        }, 20);
        getPrize();
        setPoints();
    }, []);

    function setPoints() {
        randomPoint = document.documentElement.clientWidth * Math.random();
        randomPoint2 = document.documentElement.clientHeight * Math.random(); 
    }

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
        console.log(randomPoint + "  " + randomPoint2)
        if (e.clientX > randomPoint && e.clientX <= randomPoint + 15) {
            if (e.clientY > randomPoint2 && e.clientY <= randomPoint2 + 15) {
                discoveryMade();
            }
        }
    }

    function mouseDown(downEvent) {
        let up = false;
        let e = "";
        window.addEventListener("mouseup", () => (up = true));
        document.getElementById("detectionZone").addEventListener("mousemove", (event) => (e = event));
        interval = setInterval(() => {
            if (!up && particles.length < 35) {
                generateTrail(e);
            }
        }, 40)
    }

    function generateTrail(e) {
        if (e) {
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            const speedHorz = Math.random() * 10;
            const speedUp = Math.random() * 25;
            const spinVal = Math.random() * 360;
            const spinSpeed = ((Math.random() * 35)) * (Math.random() <= .5 ? -1 : 1);
            const top = (e.clientY - size / 2);
            const left = (e.clientX - size / 2);
            const direction = Math.random() <= .5 ? -1 : 1;
            const bubble = document.createElement("img");
            bubble.setAttribute("style", `width: ${size}px; height: ${size}px; position: fixed; top:${top}px; left:${left}px;`);
            bubble.setAttribute("src", macCursor);
            bubble.setAttribute("class", "bubble");
            document.getElementById("detectionZone").appendChild(bubble);
            particles.push(
                {
                    element: bubble,
                    size,
                    speedHorz,
                    speedUp,
                    spinVal,
                    spinSpeed,
                    top,
                    left,
                    direction,
                });

        } else return;
    }

    function updateTrails() {
        particles.forEach((p) => {
            // update propeties
            p.left = p.left - (p.speedHorz * p.direction);
            p.top = p.top - p.speedUp;
            p.speedUp = Math.min(p.size, p.speedUp - 1);
            p.spinVal = p.spinVal + p.spinSpeed;

            // check if particle has gone off screen
            if (p.top >= height + p.size) {
                particles = particles.filter((o) => o !== p);
                p.element.remove();
            }
            // enter properties
            // transition: position 0.3s;
            p.element.setAttribute("style", `
                position: fixed;
                top: ${p.top}px;
                left: ${p.left}px;
                width: ${p.size}px;
                heigth: ${p.size}px;
            `);
        });
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
                            console.log("Item in queque");
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
        setPoints();
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
            <Buttons />
            {discovery && itemAvailable ? <Popup info={itemObject} closeModal={() => closeModal()} /> : null}
        </div>
    );
}   
