import React from "react";
import "./InputItem.scss";

const InputItem: React.FC = () => {

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        
        if (event.key === "Enter") {
            console.log("test");
        }
    }

    return (
        <input 
            className="input" 
            type="text" 
            placeholder="Insert todo item..." 
            onKeyDown={keyDownHandler}
        />
    );
}

export default InputItem;
