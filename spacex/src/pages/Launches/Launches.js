import React, { Component, useState, useEffect } from "react";
import "./Launches.css";
import CardLuanch from "../../components/CardLuanch/CardLuanch";
function Launches() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/launches");
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunches();
  }, []);
  return (
    <div>
      <div className="container-1-luanch">
        <h1>Launches</h1>

        <div className="launch-list">
          {launches.map((launch) => (
            <CardLuanch
            className="luanch-item"
              title={launch.mission_name}
              text={launch.details}
              firstFlight={launch.flight_number}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Launches;
