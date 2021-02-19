import React, { Component, useState, useEffect } from "react";
import style from "./styles.css";
import earthImg from "../../img/earthhorizon.png";
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
  /*parallax()*/
  return (
    <div className="container">
      {info.links && info.headquarters && (
        <>
          <div className="container-1-home">
            {/* <h1>{info.name}</h1> */}
            <h1 className="title-text"
            // style={{transform: `translateY(${offsetY * 0.5}px)`}}
            >
              SPACEX
            </h1>
          </div>
          <img className="img-earth" src={earthImg} />

          <div className="container-2">
          <div className="items-cont2">
              <h2>ceo cto : {info.ceo}</h2>
              <h2>coo : {info.coo}</h2>
              <h2>cto_propulsion : {info.cto_propulsion}</h2>
            </div>
            <div className="items-cont2 founder">
              <h1>Founded by {info.founder}</h1>
              <h2>In {info.founded}</h2>
              <h2>{info.summary}</h2>
            </div>
            <div className="items-cont2">
              <h1>SSPIM</h1>
            </div>
          </div>

          <div className="container-3">
            <div>
              <div className="number-info">
                <h2 className="items-num-info">employees : {info.employees}</h2>
                <h2 className="items-num-info">vehicles : {info.vehicles}</h2>
                <h2 className="items-num-info">launch_sites : {info.launch_sites}</h2>
                <h2 className="items-num-info">test_sites : {info.test_sites}</h2>
              </div>
              <div className="adress">
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
          </div>

        </>
      )}
    </div>
  );
}
/*function parallax(){
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
} */

export default Home;
