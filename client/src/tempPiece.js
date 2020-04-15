import React, { useContext } from 'react';
import { StoreContext } from './CheckboardContext';
import './App.css';
import { FaCircle } from 'react-icons/fa';

function Shape(props) {
    let shapeType;
    let shapeType;
    console.log(topColor, topColor);

    if (props.shapeRegion === "top"){
        shapeType = topColor[0];
    } else if (props.shapeRegion === "bottom") {
        shapeType = bottomColor[0];
    } else {
        shapeType = ""
    }
    // shape type CSS
    return (
        <div className="hehe">
            <FaCircle style={{ color: 'blue'}}/>
        </div>
    );
}

export default Shape;
