import React, { useState, useEffect } from "react";
import itemWharehouse from "../services/itemWharehouse";
import "./PopupStyle.css";

export default function Popup(props) {
    const [left, setLeft] = useState(-50);
    const [message, setMessage] = useState("");

    const style = {
        shaded: {
            position: "fixed",
            zIndex: 40,
            width: "150vw",
            height: "150vh",
            top: -10,
            left: -10,
            backgroundColor: "rgb(0,0,0)", /* Fallback color */
            backgroundColor: "rgba(0,0,0,0.6)", /* Black w/ opacity */
        },
        flexArea: {
            position: "fixed",
            zIndex: 40,
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0
        },
        popup: {
            marginTop: 20,
            maxWidth: 600,
            width: "97vw",
            height: "92vh",
            borderRadius: 5,
            backgroundColor: "white",
            transition: "all 0.3s ease-in-out",
            textAlign: "center",
            fontFamily: 'Fredoka One, cursive',
            fontSize: 40,
            backgroundColor: "white"
        },
        img: {
            width: "100%",
            height: 180,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
        },
        close: {
            position: "fixed",
            top: 30,
            left: left,
            width: 20,
            height: 20
        }
    };

    useEffect(() => {
        console.log(props.info.id);
        setMessage(`You found ${props.info.quantity} ${props.info.itemName}`);
        updateItem();
        setLeft(document.getElementById("popup").getBoundingClientRect().left);
    }, []);

    function updateItem() {
        itemWharehouse.setDiscovered(props.info.id).then(data => {
            console.log(data);
        });
    }

    return (
        <div>
            <div style={style.shaded}>
                <div style={style.flexArea}>
                    <div id="popup" style={style.popup}>
                        <div className="backdropArea">
                            <img style={style.img} src={props.info.heroImg || "https://www.photohdx.com/images/2016/09/blue-technology-pattern-background.jpg"} alt="backdrop"></img>
                        </div>
                        <img className="roundImg" src={props.info.mainImg} alt="round photo"></img>
                        <img className="closeIcon" style={style.close} onClick={() => props.closeModal()} src="https://www.flaticon.com/svg/static/icons/svg/1450/1450571.svg" alt="close icon"></img>
                        <div className="message">
                            {message}
                        </div>
                        <div className="area">
                            <div className="claimPrize" onClick={() => window.location.href = props.info.link}>
                                Claim prize
                            <img className="linkIcon" src="https://mymo-secure-content.s3.us-east-2.amazonaws.com/15992565776800.7710307302014743" alt="External link"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
