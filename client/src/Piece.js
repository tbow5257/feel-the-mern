import React, { useContext, cloneElement } from "react"
import { StoreContext } from "./CheckboardContext"
import "./App.css"
import Circle from "./assets/Circle"
import Triangle from "./assets/Triangle"

const shapesCollection = {
    shape1: <Circle />,
    shape2: <Triangle />,
}

const colorCollection = {
    color1: "#FF0000",
    color2: "#000000",
}

function Piece(props) {
    const { topColor, bottomColor, topShape, bottomShape } = React.useContext(
        StoreContext
    )
    let shapeColor
    let shapeType

    if (props.shapeRegion === "top") {
        shapeType = topShape[0]
        shapeColor = topColor[0]
    } else if (props.shapeRegion === "bottom") {
        shapeType = bottomShape[0]
        shapeColor = bottomColor[0]
    } else {
        shapeColor = ""
    }

    return (
        <div>
            {cloneElement(shapesCollection[shapeType], {
                fill: colorCollection[shapeColor],
            })}
        </div>
    )
}

export default Piece
