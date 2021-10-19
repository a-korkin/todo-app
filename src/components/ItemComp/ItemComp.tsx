import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { Item } from "../../models/item";
import "./ItemComp.scss";

interface ItemProps {
    item: Item;
}

const ItemComp: React.FC<ItemProps> = ({item}) => {
    const [check, setChecked] = useState<boolean>(item.done);
    const { removeItem } = useActions();

    const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setChecked(checked);
        item.done = checked;
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        removeItem(e.currentTarget.id);
    }

    return (
        <div className="item">
            <div className="item__info">
                <input 
                    className="item__input"  
                    onChange={e => checkHandler(e)}
                    type="checkbox" 
                    name={item.id} 
                    id={item.id} 
                    checked={item.done} 
                />
                <label className="item__label" htmlFor={item.id}>
                    <span className="item__title">{item.title}</span>
                </label>
            </div>
            <button id={item.id} onClick={clickHandler} className="btn btn--danger">
                Delete
            </button>
        </div>
    );
}

export default ItemComp;
