import React, {useState} from 'react';

export const StoreContext = React.createContext(null);

export default ({children}) => {

    const [topColor, setTopColor] = React.useState("red-circle")
    const [bottomColor, setBottomColor] = React.useState("black-circle")

    const store = {
        topColor: [topColor, setTopColor],
        bottomColor: [bottomColor, setBottomColor],
    };

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
