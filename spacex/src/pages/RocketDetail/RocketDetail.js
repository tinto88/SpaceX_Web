import React, { Component, useState, useEffect } from "react";
import "./RocketDetail.css";
import { useParams } from "react-router-dom";

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
            <p>sss</p>
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
