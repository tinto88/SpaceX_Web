import React, { Component, useState, useEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./CardLuanch.css";

function CardLuanchHeader(props) {
  const { image } = props;
  var style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <header style={style} id={image} className="cardLuanch-header">
      {/* <h4 className="cardLuanch-header--title">News</h4> */}
    </header>
  );
}
function Button() {
  let { url } = useRouteMatch();
  return (
    <NavLink className="btnTest button-primary" to={`${url}/}`}>
      Learn More
    </NavLink>
  );
}
function CardLuanchBody(props) {
  return (
    <div className="cardLuanch-body">
      <p className="date">First Flight : {props.firstFlight}</p>

      <h2 className="body-title">{props.title}</h2>

      <p className="body-content">{props.text}</p>

      <Button />
    </div>
  );
}
function CardLuanch(props) {
  return (
    <article className="cardLuanch">
      
      {/* <CardLuanchBody
        title={props.title}
        text={props.text}
        firstFlight={props.firstFlight}
      /> */}
      <div className="cardLuanch-body">
      <CardLuanchHeader
        image={"https://source.unsplash.com/user/erondu/600x400"}
      />
      <p className="date">First Flight : {props.firstFlight}</p>

      <h2 className="body-title">{props.title}</h2>

      {/* <p className="body-content">{props.text}</p> */}

      <Button />
    </div>
    </article>
  );
}
export default CardLuanch;
