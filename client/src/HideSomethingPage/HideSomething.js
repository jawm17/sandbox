import React, { useEffect, useState } from "react";
import itemWharehouse from "../services/itemWharehouse";
import Buttons from "../Components/Buttons";
import "./HideSomething.css";

export default function HideSomething() {
    const [x, setX] = useState(1000);
    const [y, setY] = useState(-1000);
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [link, setLink] = useState("");
    const [heroImg, setHeroImg] = useState("");
    const [mainImg, setMainImg] = useState("");

    useEffect(() => {
        setX(0);
        setY(0);
    }, []);

    function inputChange(e) {
        switch (e.target.className) {
            case "itemName":
                setItemName(e.target.value);
                break;
            case "quantity":
                setQuantity(e.target.value);
            case "link":
                setLink(e.target.value);
                break;
            case "heroImg":
                setHeroImg(e.target.value);
                break;
            default:
                setMainImg(e.target.value);
        }
    }

    function postItem() {
        if (itemName && quantity && link && heroImg && mainImg) {
            itemWharehouse.postItem(itemName, quantity, link, heroImg, mainImg).then(data => {
                console.log(data.message);
            });
        }
    }

    return (
        <div className="hidePage">
            <div className="navBar">
                <div className="homeButton"></div>
                <p className="title" onClick={() => window.location = ("/")}>
                    Mouse Around
            </p>
            </div>
            <div className="flexDiv">
                <div id="about" className="inputDiv">
                    <div className="priceTitle">
                        How it works
                    </div>
                    <div className="howItWorks">
                        People hide stuff. People find stuff. It's just that simple...
                    </div>
                </div>
                <div className="inputDiv">
                    <div className="priceTitle">
                        Hide Something
                    </div>
                    <div className="attatchment" onClick={() => setLink(window.prompt("Link: "))}> + add link</div>
                    <div className="attatchment"> + add image</div>
                    <div className="attatchment"> + add message</div>
                    <div className="nextButton" onClick={() => console.log()}>
                        next
                        <img className="nextIcon" src="https://www.flaticon.com/svg/static/icons/svg/709/709586.svg" alt="button image"></img>
                    </div>
                </div>
            </div>
            <input className="itemName" onChange={(e) => inputChange(e)} value={itemName} />
            <input className="quantity" onChange={(e) => inputChange(e)} value={quantity} />
            <input className="link" onChange={(e) => inputChange(e)} value={link} />
            <input className="heroImg" onChange={(e) => inputChange(e)} value={heroImg} />
            <input className="mainImg" onChange={(e) => inputChange(e)} value={mainImg} />
            <button onClick={() => postItem()}>submit</button>
        </div>
    );
}