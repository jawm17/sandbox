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

    const style = {
        title: {
            fontFamily: 'Fredoka One, cursive',
            backgroundRepeat: "no-repeat",
            backgroundPositionX: x,
            backgroundPositionY: y,
            height: 80,
            fontSize: 45,
            marginLeft: 30,
            marginTop: 40,
            transition: "all 0.5s ease-in-out",
        }
    }

    useEffect(() => {
        setX(0);
        setY(0);
    });

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
        <div>
            <Buttons page="hide" />
            <p style={style.title}>
                Hide Something
            </p>
            <div className="flexDiv">
                <div className="inputDiv">
                    <div className="priceTitle">
                        $0.25 per item
                    </div>
                    <div className="attachment"> + add link</div>
                    <div className="attachment"> + add image</div>
                    <div className="attachment"> + add message</div>
                </div>
            </div>
            {/* <input className="itemName" onChange={(e) => inputChange(e)} value={itemName} />
            <input className="quantity" onChange={(e) => inputChange(e)} value={quantity} />
            <input className="link" onChange={(e) => inputChange(e)} value={link} />
            <input className="heroImg" onChange={(e) => inputChange(e)} value={heroImg} />
            <input className="mainImg" onChange={(e) => inputChange(e)} value={mainImg} />
            <button onClick={() => postItem()}>submit</button> */}
        </div>
    );
}