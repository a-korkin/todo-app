import React, { useState } from "react";
import { v4 as uuidv4, NIL as NILL_UUID } from "uuid";
import { useActions } from "../../hooks/useActions";
import { Item } from "../../models/item";
import "./InputItem.scss";

const InputItem: React.FC = () => {
    const [item, setItem] = useState<Item>({ id: NILL_UUID, title: "", done: false });
    const { addItem } = useActions();

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addItem(item);
            setItem({
                id: NILL_UUID,
                title: "",
                done: false
            });
        }
    }

    const inputChangeHandler = (value: string) => {
        const it = {
            id: uuidv4(),
            title: value,
            done: false
        };

        setItem(it);
    }

    return (
        <input 
            className="input" 
            type="text" 
            placeholder="Insert todo item..." 
            onKeyDown={keyDownHandler}
            value={item.title}
            onChange={e => inputChangeHandler(e.target.value)}
        />
    );
}

export default InputItem;
