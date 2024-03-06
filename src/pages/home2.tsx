import "../assets/styles/App.css";
import { Link } from "react-router-dom";
import { useCounter } from "../store/counter";

import TitleBar from "../components/layout/header";
import Cards from "@components/cards/cards";

function App() {
  const [counter, counterAction] = useCounter();

  return (
    <div className="App">
      <TitleBar></TitleBar>

      <div className="app">
        <Cards />
      </div>
    </div>
  );
}

export default App;
