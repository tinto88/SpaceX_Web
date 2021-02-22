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
// function Button() {
//   let { url } = useRouteMatch();
//   return (
//     <NavLink className="btnTest button-primary" to={`${url}/detail/${props.rocket.rocket_id}`}>
//       Learn More
//     </NavLink>
//   );
// }
// function CardLuanchBody(props) {
//   return (
//     <div className="cardLuanch-body">
//       <p className="date">First Flight : {props.firstFlight}</p>

//       <h2 className="body-title">{props.title}</h2>

//       <p className="body-content">{props.text}</p>

//       <Button />
//     </div>
//   );
// }
function CardLuanch(props) {
  let { url } = useRouteMatch();
  return (
    <article className="cardLuanch">
      
      {/* <CardLuanchBody
        title={props.title}
        text={props.text}
        firstFlight={props.firstFlight}
      /> */}
      <div className="cardLuanch-body">
      {/* <CardLuanchHeader
        image={"https://source.unsplash.com/user/erondu/600x400"}
      /> */}
      <p className="date">ID : {props.firstFlight}</p>

      <h2 className="body-title">{props.title}</h2>
      <h2 className="body-title">{props.date}</h2>
      {/* <p className="body-content">{props.text}</p> */}

      {/* <Button /> */}
      <NavLink className="btnTest button-primary" to={`${url}/detail/${props.firstFlight}`}>
      Learn More
    </NavLink>
    </div>
    </article>
  );
}
export default CardLuanch;
