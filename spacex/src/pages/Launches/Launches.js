import React, { Component, useState, useEffect } from "react";
import "./Launches.css";
import CardLuanch from "../../components/CardLuanch/CardLuanch";

function Launches() {
  const [toggled, setToggled] = useState({
    2006: false,
    2007: false,
    2008: false,
    2009: false,
    2010: false,
    2012: false,
    2013: false,
    2014: false,
    2015: false,
    2016: false,
    2017: false,
    2018: false,
    2019: false,
    2020: false,
    true: false,
    false: false,
    "Falcon 1": false,
    "Falcon 9": false,
    "Falcon Heavy": false,
    "Star Ship": false,
  });
  const [launches, setLaunches] = useState([]);
  const [launchYear, setLaunchYear] = useState([]);
  const [RocketName, setRocketName] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  const handleChangeLaunchSuccess = (e) => {
    setToggled({
      ...toggled,
      true: false,
      false: false,
      [e]: !toggled[e],
    });
    if (toggled[e] == true) {
      setLaunchSuccess("");
    } else if (toggled[e] == false) {
      setLaunchSuccess(e);
    }
  };
  const handleChangeRocketName = (e) => {
    setToggled({
      ...toggled,
      "Falcon 1": false,
      "Falcon 9": false,
      "Falcon Heavy": false,
      "Star Ship": false,
      [e]: !toggled[e],
    });
    if (toggled[e] == true) {
      setRocketName("");
    } else if (toggled[e] == false) {
      setRocketName(e);
    }
  };
  const handleChangeLaunchYear = (e) => {
    setToggled({
      ...toggled,
      2006: false,
      2007: false,
      2008: false,
      2009: false,
      2010: false,
      2012: false,
      2013: false,
      2014: false,
      2015: false,
      2016: false,
      2017: false,
      2018: false,
      2019: false,
      2020: false,
      [e]: !toggled[e],
    });
    if (toggled[e] == true) {
      setLaunchYear("");
    } else if (toggled[e] == false) {
      setLaunchYear(e);
    }
  };
  // const toggleHandle = (e) => {
  //   console.log(true);
  // };
  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(
        "https://api.spacexdata.com/v3/launches/?rocket_name=" +
          RocketName +
          // "&limit=12" +
          "&launch_success=" +
          launchSuccess +
          "&launch_year=" +
          launchYear
      );
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunches();
  }, [RocketName, launchSuccess, launchYear]);
  return (
    <div>
      <div className="container-1-luanch-start">
        <div className="name-launch"><h1>LAUNCHS</h1></div>
      </div>
      <div className="container-space"></div>
      <div className="container-1-luanch">
        <div className="buttom-luanch-list">
          <h1 className="filer-title">Year</h1>
          <div className="buttom-luanch-year">
            <div
              className={`buttom-luanch year-item ${
                toggled["2006"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2006")}
            >
              2006
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2007"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2007")}
            >
              2007
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2008"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2008")}
            >
              2008
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2009"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2009")}
            >
              2009
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2010"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2010")}
            >
              2010
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2012"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2012")}
            >
              2012
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2013"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2013")}
            >
              2013
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2014"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2014")}
            >
              2014
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2015"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2015")}
            >
              2015
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2016"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2016")}
            >
              2016
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2017"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2017")}
            >
              2017
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2018"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2018")}
            >
              2018
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2019"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2019")}
            >
              2019
            </div>
            <div
              className={`buttom-luanch year-item ${
                toggled["2020"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchYear("2020")}
            >
              2020
            </div>
          </div>
          <h1 className="filer-title">Rocket Name</h1>
          <div className="buttom-luanch-rockets">
            <div
              className={`buttom-luanch rocket-item ${
                toggled["Falcon 1"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeRocketName("Falcon 1")}
            >
              falcon 1
            </div>
            <div
              className={`buttom-luanch rocket-item ${
                toggled["Falcon 9"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeRocketName("Falcon 9")}
            >
              falcon 9
            </div>
            <div
              className={`buttom-luanch rocket-item ${
                toggled["Falcon Heavy"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeRocketName("Falcon Heavy")}
            >
              falcon heavy
            </div>
            <div
              className={`buttom-luanch rocket-item ${
                toggled["Star Ship"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeRocketName("Star Ship")}
            >
              starship
            </div>
          </div>
          <h1 className="filer-title">Launch Success</h1>
          <div className="buttom-luanch-success">
            <div
              className={`buttom-luanch ${
                toggled["true"] ? "toggle-launch" : ""
              } `}
              onClick={() => handleChangeLaunchSuccess("true")}
            >
              launch success
            </div>
            <div
              className={`buttom-luanch ${
                toggled["false"] ? "toggle-launch" : ""
              } `}
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
              date={launch.launch_year}
              success={launch.success}
              rocket={launch.rocket.rocket_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Launches;
