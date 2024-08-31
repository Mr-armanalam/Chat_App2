import React,{ createContext } from "react";

const clickContext = createContext();

export const useClickContext = () => {
    return React.useContext(clickContext);
}
 export const ClickContextProvider = ({ children }) => {
    const [clicked, setClicked] = React.useState(false);
    return (
        <clickContext.Provider value={{ clicked, setClicked }}>
            {children}
        </clickContext.Provider>
    );
}