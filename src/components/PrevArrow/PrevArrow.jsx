import React from 'react';
import {MdChevronLeft} from "react-icons/md";
import './PrevArrow.css';
// import { Container } from './styles';

function PrevNext(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <MdChevronLeft />
        </div>
    );
}

export default PrevNext;