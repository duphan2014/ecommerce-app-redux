import React from "react";
import { useContext } from "react";

const ThemeContext = React.createContext('light');

function ThemeButton(){
    const theme = useContext(ThemeContext);
    return <button className={theme}>Theme</button>
}

export default ThemeButton;