import React, { Component, useState, useEffect } from "react";
import style from "./styles.css";

function Home() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetch("https://api.spacexdata.com/v3/info");
      const data = await response.json();
      setInfo(data);
    };
    fetchInfo();
  }, []);
  return (
    <div className="container">
      {info.links && info.headquarters && (
        <>
          <div className="container-1">
            {/* <h1>{info.name}</h1> */}
            <h1 className="title-text">SPACEX</h1>
          </div>
          <div className="container-2">
            <h2>Founder : {info.founder}</h2>
            <h2>founded : {info.founded}</h2>
            <h2>summary : {info.summary}</h2>
            <h2>ceo cto : {info.ceo}</h2>
            <h2>coo : {info.coo}</h2>
            <h2>cto_propulsion : {info.cto_propulsion}</h2>
          </div>
          <div className="container-3">
            <h2>Home</h2>
            <h1>{info.name}</h1>
          </div>
          <div>
            <h2>valuation : {info.valuation}</h2>
            <h2>employees : {info.employees}</h2>
            <h2>vehicles : {info.vehicles}</h2>
            <h2>launch_sites : {info.launch_sites}</h2>
            <h2>test_sites : {info.test_sites}</h2>
            <div>
              <h2>headquarters Adress : </h2>
              <h3>address : {info.headquarters.address}</h3>
              <h3>city : {info.headquarters.city}</h3>
              <h3>state : {info.headquarters.state}</h3>
            </div>
            <div>
              <h2>Contact : </h2>
              <h3>website : {info.links.website}</h3>
              <h3>flickr : {info.links.flickr}</h3>
              <h3>twitter : {info.links.twitter}</h3>
              <h3>elon_twitter : {info.links.elon_twitter}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
