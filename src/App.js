import "./App.css";
import { Navbar } from "./components/Navbar";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";

const App = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar />
      <Router>
        <Homepage path="/" />
      </Router>
    </div>
  );
};

export default App;
