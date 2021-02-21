import React, { Component, useState, useEffect } from "react";
import "./Launches.css";
import CardLuanch from "../../components/CardLuanch/CardLuanch";

function Launches() {
  const [launches, setLaunches] = useState([]);
  const [launchYear, setLaunchYear] = useState([]);
  const [RocketName, setRocketName] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  const handleChangeRocketName = (e) => {
    setRocketName(e);
    console.log(RocketName);
  };
  const handleChangeLaunchSuccess = (e) => {
    setLaunchSuccess(e);
    console.log(launchSuccess);
  };
  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches/?rocket_name=" +
          RocketName +
          "&limit=12" +
          "&launch_success=" +
          launchSuccess
      );
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunches();
  }, [RocketName, launchSuccess]);
  return (
    <div>
      <div className="container-1-luanch">
        <div className="buttom-luanch-list">
          <h1 className="filer-title">Year</h1>
          <div className="buttom-luanch-year">
            <div className="buttom-luanch year-item">2006</div>
            <div className="buttom-luanch year-item">2007</div>
            <div className="buttom-luanch year-item">2008</div>
            <div className="buttom-luanch year-item">2009</div>
            <div className="buttom-luanch year-item">2010</div>
            <div className="buttom-luanch year-item">2012</div>
            <div className="buttom-luanch year-item">2013</div>
            <div className="buttom-luanch year-item">2014</div>
            <div className="buttom-luanch year-item">2015</div>
            <div className="buttom-luanch year-item">2016</div>
            <div className="buttom-luanch year-item">2017</div>
            <div className="buttom-luanch year-item">2018</div>
            <div className="buttom-luanch year-item">2019</div>
            <div className="buttom-luanch year-item">2020</div>
          </div>
          <h1 className="filer-title">Rocket Name</h1>
          <div className="buttom-luanch-rockets">
            <div
              className="buttom-luanch rocket-item"
              onClick={() => handleChangeRocketName("Falcon 1")}
            >
              falcon 1
            </div>
            <div
              className="buttom-luanch rocket-item"
              onClick={() => handleChangeRocketName("Falcon 9")}
            >
              falcon 9
            </div>
            <div
              className="buttom-luanch rocket-item"
              onClick={() => handleChangeRocketName("Falcon Heavy")}
            >
              falcon heavy
            </div>
            <div
              className="buttom-luanch rocket-item"
              onClick={() => handleChangeRocketName("Star Ship")}
            >
              starship
            </div>
          </div>
          <h1 className="filer-title">Launch Success</h1>
          <div className="buttom-luanch-success">
            <div
              className="buttom-luanch"
              onClick={() => handleChangeLaunchSuccess("true")}
            >
              launch success
            </div>
            <div
              className="buttom-luanch"
              onClick={() => handleChangeLaunchSuccess("false")}
            >
              launch failed
            </div>
          </div>

          {/* <div className="buttom-luanch">Button 4</div> */}
        </div>

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
