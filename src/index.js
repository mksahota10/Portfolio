import React from "react";
import ReactDOM from "react-dom";
//react router
import{BrowserRouter, Switch} from "react-router-dom"
// Components imports
import App from "./App";
// CSS imports
import "./css/index.css";

// order, browser, Switch and app
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <App />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
