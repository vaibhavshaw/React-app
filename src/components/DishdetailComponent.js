import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
{
  /*import React, { Component } from "react";
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
      const cmmnt = this.props.dish.comments.map(comm => {
        return (
          <div key={comm.id}>
            <p className="m-1">{comm.comment}</p>
            <p className="m-3">
              -- {comm.author},&nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit"
              }).format(new Date(Date.parse(comm.date)))}
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish)}
          </div>
        </div>
      </div>
    );
  }
}
*/
}

function RenderComments({ comment }) {
  if (comment != null) {
    const cmmnt = comment.map(comm => {
      return (
        <div key={comm.id}>
          <p className="m-1">{comm.comment}</p>
          <p className="m-3">
            -- {comm.author},&nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(comm.date)))}
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
function RenderDish({ dish }) {
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

const DishDetail = props => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comment={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
