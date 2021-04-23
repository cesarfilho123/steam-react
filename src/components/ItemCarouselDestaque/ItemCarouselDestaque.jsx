import React from "react";
import "./ItemCarouselDestaque.css";

function ItemCarouselDestaque(props) {
  return (
    <>
      <div className="container-image">
        <img src={props.image} alt="" className="img-fluid" />
      </div>
    </>
  );
}

export default ItemCarouselDestaque;
