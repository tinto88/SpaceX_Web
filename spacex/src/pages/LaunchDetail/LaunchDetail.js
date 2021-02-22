import React, { Component, useState, useEffect, version } from "react";
import "./LaunchDetail.css";
import { useParams } from "react-router-dom";

function LaunchDetail() {
  const { launchId } = useParams();
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${launchId}`
      );
      const data = await response.json();
      setLaunches(data);
    };
    fetchLaunches();
  }, []);

  return (
    <>
      { launches.links && (
        <div className="container-l-detail">

          <div className="container-l-detail-1">
            <div className="l-content-container1-detail">
              <div className="launch-name">
                <h1>{launches.mission_name} - {launches.launch_year}</h1>
              </div>
              <div className="content-launch-1">
                <p>Launch Date UTC : {launches.launch_date_utc}</p>
                <p>Launch Date Local : {launches.launch_date_local}</p>
                <p>Details : {launches.details}</p>
              </div>
              <div className="content-launch-success">
                <div className={`success-detail ${launches.launch_success == true ? "status-success" : launches.launch_success == false ? "status-failed" : ""}`}>
                  {/* <p>{launches.launch_success == true
                  ? <div className={`success-detail ${launches.launch_success == true ? "status-success" : ""}`}>Success</div> : <>Failed</> }</p> */}
                  {launches.launch_success == true ? <>Success</> : launches.launch_success == false ? <>Failed</> : ""}
                </div>
                <div className="success-detail">
                  <p>Rocket</p>
                </div>
              </div>
            </div>
            <div className="back-button-launch"><h2>BACK</h2></div>
          </div>
          <div className="container-l-detail-2">
            {launches.links.flickr_images.length == 0
              ? <><img className="img-l-detail" src={launches.links.mission_patch} /></> : <><img className="img-l-detail" src={launches.links.flickr_images[0]} /></>}
            {/* {<img className="img-l-detail" src={launches.links.flickr_images[0]} />} */}
          </div>
          {/* <h1>{rockets.rocket_name}</h1> */}
        </div>
      )}
    </>
  );
}

export default LaunchDetail;
