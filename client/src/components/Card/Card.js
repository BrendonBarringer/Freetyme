import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";
import { Button } from 'reactstrap';


const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    <Button color="primary" size="sm">contact</Button>{' '}
    {/* <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pass"
    />
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pick"
    /> */}
    
  </div>
);

export default Card;
