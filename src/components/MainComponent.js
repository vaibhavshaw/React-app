import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
      commentDish: null
    };
  }

  onSelectedDish(dishId, comment) {
    this.setState({ selectedDish: dishId, commentDish: comment });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="\">Ristorante Con Fusion</NavbarBrand>
          </div>
    </Navbar>  */}
        <Header />
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId, comment) => this.onSelectedDish(dishId, comment)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />*/}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
