import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import "./components/NavBar/NavBar.css";
import "./components/ItemListContainer/ItemListContainer.css";

const saludoApp = "Greetings";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={saludoApp} />
    </>
  );
}

export default App;
