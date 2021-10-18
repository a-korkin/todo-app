import InputItem from "../InputItem";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className="container">
            <h1 className="title">Todo app</h1>
            <InputItem />
        </div>
    );
}

export default App;
