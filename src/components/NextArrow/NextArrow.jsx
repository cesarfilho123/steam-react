import React from 'react';
import {MdChevronRight} from "react-icons/md";
import './NextArrow.css';
// import { Container } from './styles';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style}}
            onClick={onClick}
        >
            <MdChevronRight />
        </div>
    );
}

export default NextArrow;