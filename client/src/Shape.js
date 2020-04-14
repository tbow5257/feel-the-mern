import React, { Fragment, useContext } from 'react';
import { StoreContext } from './CheckboardContext';
import './App.css';

function Shape(props) {
    const { top, bottom } = React.useContext(StoreContext)
    let shapeType;
    console.log(top, bottom);

    if (props.shapeRegion === "top"){
        shapeType = top[0];
    } else if (props.shapeRegion === "bottom") {
        shapeType = bottom[0];
    } else {
        shapeType = ""
    }
    // shape type CSS
    return (
        <div className={shapeType}>
        --
        </div>
    );
}

export default Shape;
