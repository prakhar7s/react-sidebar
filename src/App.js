import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="app">
      <Menu backgroundColor={"#000"} color={"rgba(156,163,175,0.9)"} />
      <Menu backgroundColor={"#fff"} color={"rgba(55,65,81,1)"} />
      <Menu backgroundColor={"navy"} color={"#ffffffc9"} />
    </div>
  );
}

export default App;
