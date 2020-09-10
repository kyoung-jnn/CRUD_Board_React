import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Profile from "./pages/Profile"
function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home}>
      </Route>
      <Route path="/Profile" component={Profile}></Route>
    </React.Fragment>
  );
}

export default App;
