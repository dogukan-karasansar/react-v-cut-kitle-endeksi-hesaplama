import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Container from "./components/container";

function App() {
  return (
    <div className="App">
      <Router>
        <Container />
      </Router>
    </div>
  );
}

export default App;
