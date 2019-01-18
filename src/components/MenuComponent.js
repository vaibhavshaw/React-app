import React, { Component } from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
      commentDish: null
    };
  }
  onSelectedDish(dish, comment) {
    this.setState({ selectedDish: dish, commentDish: comment });
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onSelectedDish(dish, dish.comments)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
          {/* <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
      </div>  */}
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/*<div className="row">
         <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>  */}
        <DishDetail
          selectedDish={this.state.selectedDish}
          commentDish={this.state.commentDish}
        />
      </div>
    );
  }
}

export default Menu;
