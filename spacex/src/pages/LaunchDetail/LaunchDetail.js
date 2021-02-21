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
      {/* {true && ( */}
        <div className="container-r-detail">
          
          <div className="container-r-detail-1">
            <div className="content-container1-detail">
              <div className="rockets-name">
                <h1></h1>
              </div>
              <div className="content-engine">
                <p>First Flight : </p>
                <p>Country : </p>
                <p>Height :  lb / Mass :  kg</p>
                <p>Stages : </p>
                <h2>Engines - </h2>
                <p>Propellant : , </p>
              </div>
              <div className="content-thrust">
                <div className="detail-content-thrust">
                  <h4></h4>
                  <p>Thrust Sea Level : </p>
                </div>
                <div className="detail-content-thrust">
                  <p>Thrust Vacuum : </p>
                </div>
                <div className="detail-content-thrust">
                  <p>Thrust To Weight : </p>
                </div>
                
              </div>
            </div>
            <div className="back-button"><h2>SSPIM</h2></div>
          </div>
          <div className="container-r-detail-2">
            {/* <img className="img-r-detail" src={rockets.flickr_images[0]} /> */}
          </div>
          {/* <h1>{rockets.rocket_name}</h1> */}
        </div>
      {/* )} */}
    </>
  );
}

export default LaunchDetail;
