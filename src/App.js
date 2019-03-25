import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import "./App.css";
import { DISHES } from "./shared/dishes";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

const store = ConfigureStore();

class App extends Component {
  // constructor(props) {
  //   super(props);
  //  this.state = {
  //  dishes: DISHES
  // };
  // }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
