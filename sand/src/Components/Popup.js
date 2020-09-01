import React, { useState, useEffect } from "react";

export default function Popup(props) {
    const [initHeight, setInitHeight] = useState(10);
    const [initWidth, setInitWidth] = useState(10);
    const [open, setOpen] = useState(true);
    const [message, setMessage] = useState("");

    const style = {
        shaded: {
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            backgroundColro: "rgb(0,0,0)", /* Fallback color */
            backgroundColor: "rgba(0,0,0,0.6)", /* Black w/ opacity */
        },
        popup: {
            marginTop: 30,
            maxWIdth: 400,
            width: "97vw",
            height: "93vh",
            borderRadius: 5,
            backgroundColor: "white",
            transition: "all 0.3s ease-in-out",
        }
    }

    useEffect(() => {
        setInitHeight(350);
        setInitWidth(400);
        if (props.type === "eth") {
            if (props.amount) {
                setMessage(`You've found ${props.amount} Ethereum!!!`)
            }
        }
    })

    function closePopup() {
        setOpen(false);
    }

    if (open) {
        return (
            <div>
                <div style={style.shaded}>
                    <div style={style.popup}>
                        {message}
                        <img src="https://cdn.podbay.fm/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2QzdDNvemZ0bWRtaDNpLmNsb3VkZnJvbnQubmV0L3Byb2R1Y3Rpb24vcG9kY2FzdF91cGxvYWRlZC8xNTE0NzM3LzE1MTQ3MzctMTU1MzU2MjA3MjkyMy0xZTIwNDY4ZTkyOWM0LmpwZyIsImZhbGxiYWNrIjoiaHR0cHM6Ly9pczQtc3NsLm16c3RhdGljLmNvbS9pbWFnZS90aHVtYi9Qb2RjYXN0czEyMy92NC84NS81Ny8xYi84NTU3MWI0ZC1mNjliLTI1OWMtYzRmYi0xZTNiMzc5YmVkODEvbXphXzc1NTM3MjQyNDMxMTAxMTIyMjcuanBnLzYwMHg2MDBiYi5qcGcifQ.kSy_DB1ai7Loj2qkUwOCsDasoBihdroHe3EVDANcSRU.jpg?width=400&height=400"></img>
                        <div onClick={() => closePopup()}>x</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }

}
