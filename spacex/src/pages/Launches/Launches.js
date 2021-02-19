import React, { Component, useState, useEffect } from "react";
import "./styles.css";

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

        {launches.map((launch) => (
          <h4>{launch.mission_name}</h4>
        ))}
      </div>
    </div>
  );
}

export default Launches;
