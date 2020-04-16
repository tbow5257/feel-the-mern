import React from "react"
import Piece from "./Piece"

function Square(props) {
    let child
    if (
        props.row === props.totalSize - 1 ||
        props.row === props.totalSize - 2
    ) {
        child = <Piece shapeRegion="bottom" />
    } else if (props.row === 0 || props.row === 1) {
        child = <Piece shapeRegion="top" />
    } else {
        child = ""
    }
    return (
        <div row={props.row} className={props.btype}>
            {child}
        </div>
    )
}

export default Square
