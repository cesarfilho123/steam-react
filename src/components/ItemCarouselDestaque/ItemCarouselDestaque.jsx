import React from "react";
import "./ItemCarouselDestaque.css";

function ItemCarouselDestaque(props) {
  return (
    <>
      <div className="container-image d-flex justify-content-center">
        <img src={props.image} alt="" className="img-fluid" />
        <div className="container-text">
            <h4 className="display-2 text-center font-weight-bold title-game">
              Nome do Game
            </h4>
            <p className="lead text-white text-center font-weight-bold">
                Optio asperiores error eum, provident sequi aliquam iure nisi reiciendis quod temporibus 
                <br/>
                suscipit deleniti perspiciatis iusto facilis nulla eos porro esse praesentium!
            </p>
            <div className="d-flex justify-content-center">
                <div>
                    <button className="btn btn-hero ">
                        Ver Mais
                    </button>
                </div>
                <div className="ml-4">
                    <button className="btn btn-hero ">
                        Comprar R$ 120,00
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ItemCarouselDestaque;
