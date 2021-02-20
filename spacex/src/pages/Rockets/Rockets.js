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
