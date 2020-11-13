import React from 'react';
import './ItemCarouselDestaque.css';
import { FaCrown } from 'react-icons/fa';
import { BiHappyAlt } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineHeart,AiFillApple,AiFillWindows } from 'react-icons/ai';
// import { Container } from './styles';

function ItemCarouselDestaque() {
  return (
      <>
        <div className="container-item d-flex">
            <div>
                <img src="/images/games/witcher.png" alt="" className="img-fluid img-carousel"/>
            </div>
            <div className="pl-3 mt-4">
                <h6 className="tx-primary">
                    <FaCrown className="h5 icon-crown"/> Top Seller
                </h6>
                <h3 className="text-white">
                    The Witcher 3 : Wild Hunt - Game of the Year Edition
                </h3>
                <div className="d-flex descriptions mt-4 align-items-center">
                    <span>
                        Open World
                    </span>
                    <div className="bullet-primary"></div>
                    <span>
                        RPG
                    </span>
                    <div className="bullet-primary"></div>
                    <span>
                        Story
                    </span>
                    <div className="bullet-primary"></div>
                    <span>
                        Rich
                    </span>
                </div>
                <div className="p-bottom col-1">
                    <h5 className="text-white">
                        $ 39.00
                    </h5>
                    <div className="d-flex justify-content-between ">
                        <div>
                            <button className="btn btn-icon">
                                <FiShoppingBag />
                            </button>
                            <button className="ml-2 btn btn-icon mr-2">
                                <AiOutlineHeart />
                            </button>
                            <AiFillWindows className="icon-default" />
                            <AiFillApple className="icon-default" />
                        </div>
                        <div>
                            <span className="text-white span-avaliacao">
                                <BiHappyAlt /> Very Positive
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default ItemCarouselDestaque;