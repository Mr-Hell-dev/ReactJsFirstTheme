import { Switch, Route } from "react-router-dom";
import './App.css';
import Pages from "./Pages/Pages.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
function App() {
  return (
    <div className="my-container">
      <Navbar />
      <Switch>
        <Route path="/" component={Pages} />
      </Switch>
    </div>
  );
}

export default App;
