import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderComments(comment) {
    if (comment != null) {
      const cmmnt = this.props.commentDish.map(comm => {
        return (
          <div key={comm.id}>
            <p className="m-1">{comm.comment}</p>
            <p className="m-3">
              -- {comm.author},&nbsp;{comm.date}
            </p>
          </div>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{cmmnt}</ul>
        </div>
      );
    } else return <div />;
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div />;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.commentDish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
