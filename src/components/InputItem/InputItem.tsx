import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./InputItem.scss";

const InputItem: React.FC = () => {
    const [item, setItem] = useState<string>("");
    const { items } = useTypedSelector(state => state.items);
    const { addItem } = useActions();

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addItem(item);
            setItem("");
        }
    }

    return (
        <>
        <input 
            className="input" 
            type="text" 
            placeholder="Insert todo item..." 
            onKeyDown={keyDownHandler}
            value={item}
            onChange={e => setItem(e.target.value)}
        />
        { items.map(i => <div key={i}>{i}</div>)}
        </>
    );
}

export default InputItem;
