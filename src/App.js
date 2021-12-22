import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Home from "./components/pages/home/home";

function App() {
  return (
    <div>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/products">
        <Home />
      </Route>
    </div>
  );
}

export default App;
