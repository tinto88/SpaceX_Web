import React, { Component, useState, useEffect } from "react";
import "./CardLuanch.css";

function CardLuanchHeader(props) {
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
function CardLuanchBody(props) {
  return (
    <div className="card-body">
      <p className="date">First Flight : {props.firstFlight}</p>

      <h2 className="body-title">{props.title}</h2>

      <p className="body-content">{props.text}</p>

      <Button />
    </div>
  );
}
function CardLuanch(props) {
  return (
    <article className="card">
      <CardLuanchHeader
        image={"https://source.unsplash.com/user/erondu/600x400"}
      />
      <CardLuanchBody
        title={props.title}
        text={props.text}
        firstFlight={props.firstFlight}
      />
    </article>
  );
}
export default CardLuanch;
