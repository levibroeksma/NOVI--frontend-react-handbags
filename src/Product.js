import React from "react";

function Product({tag, title,image,price}) {
    return (
        <article>
            <span>{tag}</span>
            <img src={image} alt={title}/>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>
    )
}
export default Product;