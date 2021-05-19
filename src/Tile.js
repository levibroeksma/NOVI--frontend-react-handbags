import React from "react";

function Tile(props) {
    return (
        <section>
            <img src={props.image} alt={props.imgTitle}/>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    )
}

export default Tile;