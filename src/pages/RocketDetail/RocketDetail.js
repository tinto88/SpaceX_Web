import React, { Component, useState, useEffect, version } from "react";
import "./RocketDetail.css";
import { useParams, NavLink } from "react-router-dom";

function RocketDetail() {
  const { rocketId } = useParams();
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocketId}`
      );
      const data = await response.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);

  return (
    <>
      {rockets.flickr_images && (
        <div className="container-r-detail">
          {/* <h1 >RocketDetail</h1> */}
          <div className="container-r-detail-1">
            <div className="content-container1-detail">
              <h1>{rockets.rocket_name}</h1>
              <div className="content-engine">
                <p>First Flight : {rockets.first_flight}</p>
                <p>Country : {rockets.country}</p>
                <p>
                  Height : {rockets.height.lb} lb / Mass : {rockets.mass.kg} kg
                </p>
                <p>Stages : {rockets.stages}</p>
                <h2>Engines - {rockets.engines.type}</h2>
                <p>
                  Propellant : {rockets.engines.propellant_1},{" "}
                  {rockets.engines.propellant_2}
                </p>
              </div>
              <div className="content-thrust">
                <div className="detail-content-thrust">
                  <h4></h4>
                  <p>
                    Thrust Sea Level : {rockets.engines.thrust_sea_level.lbf}
                  </p>
                </div>
                <div className="detail-content-thrust">
                  <p>Thrust Vacuum : {rockets.engines.thrust_vacuum.lbf}</p>
                </div>
                <div className="detail-content-thrust">
                  <p>Thrust To Weight : {rockets.engines.thrust_to_weight}</p>
                </div>
              </div>
              <div className="back-button ">
                <NavLink className="btnTest button-primary rocket-button-back" to={"/rockets"}>
                  Back
                </NavLink>
              </div>
            </div>
            
          </div>
          <div className="container-r-detail-2">
            <img className="img-r-detail" src={rockets.flickr_images[0]} />
          </div>
          {/* <h1>{rockets.rocket_name}</h1> */}
        </div>
      )}
    </>
  );
}

export default RocketDetail;
