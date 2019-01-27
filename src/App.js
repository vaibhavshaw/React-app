import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dishes";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //  this.state = {
  //  dishes: DISHES
  // };
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
