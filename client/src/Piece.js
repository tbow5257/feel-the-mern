import React, { useContext } from 'react';
import { StoreContext } from './CheckboardContext';
import './App.css';
import { FaCircle } from 'react-icons';

const shapes = {
    shape1: <FaCircle />
}

function Piece(props) {

    const { topColor, 
            bottomColor, 
            topShape, 
            bottomShape } = React.useContext(StoreContext);
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

export default Piece;
