import React from 'react';
import Shape from './Shape'

function Square(props) {
    console.log("props.totalSize", props.totalSize)
    let child;
    if (props.row === props.totalSize-1 || 
        props.row === props.totalSize-2) {
        child = (<Shape shapeRegion="top"/>)      
    } else if (props.row === 0 || props.row === 1) {
        child = (<Shape shapeRegion="bottom"/>)  
    } else {
        child = "--"
    }
    return (
        <div row={props.row} className={props.btype}>
            {child}
        </div>
    );
}

export default Square;
