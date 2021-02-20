import React, { Component, useState, useEffect } from "react";
import "./Rockets.css";
import Card from "../../components/Card/Card";
import TestCard from "../../components/TestCard/TestCard";

function Rockets() {
  const [rockets, setRockets] = useState([]);
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/rockets");
      const data = await response.json();
      setRockets(data);
    };
    fetchRockets();
  }, []);

  return (
    <>
      <div className="container-rocket">
        <img className="bg-cont-rockets" 
        src="https://images.unsplash.com/photo-1567416661576-659c4298a2c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"></img>
        <div className="center-rockets">
        <h1>ROCKETS</h1>
        </div>
      </div>
      <div className="container">
        {/* <div className="card-container">
        {rockets.map((rocket) => (
          <>
            <Card title={rocket.rocket_name} text={rocket.description} firstFlight={rocket.first_flight}/>
          </>
        ))}
      </div> */}

        {rockets.map((rocket) => (
          <TestCard rocket={rocket} key={rocket.rocket_id} />
        ))}
      </div>
    </>
  );
}

export default Rockets;
