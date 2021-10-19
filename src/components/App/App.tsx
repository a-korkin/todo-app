import { useTypedSelector } from "../../hooks/useTypedSelector";
import InputItem from "../InputItem";
import ItemComp from "../ItemComp";
import "./App.scss";

const App: React.FC = () => {
    const { items } = useTypedSelector(state => state.items);

    return (
        <div className="container">
            <h1 className="title">Todo app</h1>
            <InputItem />
            {
                items.map(item => <ItemComp key={item.id} item={item} />)
            }
        </div>
    );
}

export default App;
