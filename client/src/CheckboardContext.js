import React, {useState} from 'react';

export const StoreContext = React.createContext(null);

export default ({children}) => {

    const [topColor, setTopColor] = React.useState("red-circle");
    const [bottomColor, setBottomColor] = React.useState("black-circle");

    const [topShape, setTopShape] = React.useState("circle");
    const [bottomShape, setBottomShape] = React.useState("triangle");

    const store = {
        topColor: [topColor, setTopColor],
        bottomColor: [bottomColor, setBottomColor],
        topShape: [topShape, setTopShape],
        bottomShape: [bottomShape, setBottomShape],
    };

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};
