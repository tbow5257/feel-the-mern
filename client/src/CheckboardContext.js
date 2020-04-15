import React, {useState} from 'react';

export const StoreContext = React.createContext(null);

export default ({children}) => {

    const [top, setTop] = React.useState("red-circle")
    const [bottom, setBottom] = React.useState("black-circle")

    const store = {
        top: [top, setTop],
        bottom: [bottom, setBottom],
    };

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
