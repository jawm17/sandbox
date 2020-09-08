import React, { useState, useEffect } from "react";

export default function Bubble(props) {
    const [dim, setDim] = useState(40);

    const style = {
        bubble: {
            position: "fixed",
            
            left: (40 + props.positionX / 100),
            top: (40 + props.positionY / 100),
            width: dim,
            height: dim
        }
    }

    useEffect(() => {
        console.log(props.positionX);
    });

    return (
        <img style={style.bubble} src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7591f280-3969-4c42-b8e1-703a45165c68/ddnkzl5-412e01ae-7de3-4d18-909f-4582acd227af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzU5MWYyODAtMzk2OS00YzQyLWI4ZTEtNzAzYTQ1MTY1YzY4XC9kZG5remw1LTQxMmUwMWFlLTdkZTMtNGQxOC05MDlmLTQ1ODJhY2QyMjdhZi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7DXQ-zA4Cr-9NCMI0jsN8Ai8S81WUT1DJMS-tOm-HyQ"} alt="pobodys nerfect" />
    )
}