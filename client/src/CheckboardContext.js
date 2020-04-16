import React, { useState } from "react"

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    const [topColor, setTopColor] = React.useState("color1")
    const [bottomColor, setBottomColor] = React.useState("color2")

    const [topShape, setTopShape] = React.useState("shape1")
    const [bottomShape, setBottomShape] = React.useState("shape2")

    const store = {
        topColor: [topColor, setTopColor],
        bottomColor: [bottomColor, setBottomColor],
        topShape: [topShape, setTopShape],
        bottomShape: [bottomShape, setBottomShape],
    }

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}
