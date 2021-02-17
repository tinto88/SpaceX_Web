import React, { Component, useState, useEffect } from "react";
import "./styles.css";
import Card from "../../components/Card/Card";
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
    <div style={{ backgroundColor: "#341cac" }}>
      <h2>Rockets</h2>
      <div className="card-container">
        {rockets.map((rocket) => (
          <>
            <Card title={rocket.rocket_name} text={rocket.description} firstFlight={rocket.first_flight}/>
          </>
        ))}
      </div>
    </div>
  );
}

export default Rockets;
