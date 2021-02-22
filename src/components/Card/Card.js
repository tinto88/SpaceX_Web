import React, { Component, useState, useEffect } from "react";
import "./styles.css";

function CardHeader(props) {
  const { image } = props;
  var style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <header style={style} id={image} className="card-header">
      <h4 className="card-header--title">News</h4>
    </header>
  );
}
function Button() {
  return (
    <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> Find out more
    </button>
  );
}
function CardBody(props) {
  return (
    <div className="card-body">
      <p className="date">First Flight : {props.firstFlight}</p>

      <h2>{props.title}</h2>

      <p className="body-content">{props.text}</p>

      <Button />
    </div>
  );
}
function Card(props) {
  return (
    <article className="card">
      <CardHeader image={"https://source.unsplash.com/user/erondu/600x400"} />
      <CardBody title={props.title} 
      // text={props.text}
       firstFlight={props.firstFlight}/>
    </article>
  );
}
export default Card;
