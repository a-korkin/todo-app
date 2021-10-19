import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Item } from "../../models/item";
import InputItem from "../InputItem";
import ItemComp from "../ItemComp";
import "./App.scss";

const App: React.FC = () => {
    const { items } = useTypedSelector(state => state.items);
    const [filterItems, setFilterItems] = useState<Item[]>(items);

    useEffect(() => {
        setFilterItems(items);
    }, [items]);

    const clickFilterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        switch (event.currentTarget.id) {
            case "all":
                setFilterItems(items);
                break;
            case "completed":
                setFilterItems(items.filter(w => w.done));
                break;
            default:
                setFilterItems(items);
                break;          
        }
    }

    return (
        <div className="container">
            <h1 className="title">Todo app</h1>
            <InputItem />
            <div className="filter">
                <button id="all" className="btn btn--filter" onClick={clickFilterHandler}>All</button>
                <button id="completed" className="btn btn--filter" onClick={clickFilterHandler}>Completed</button>
            </div>
            {
                filterItems.map(item => <ItemComp key={item.id} item={item} />)
            }
        </div>
    );
}

export default App;
