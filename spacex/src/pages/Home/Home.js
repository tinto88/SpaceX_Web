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
          <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/spacexarabsat6a.jpg" className="bg-home"></img>
            {/* <h1>{info.name}</h1> */}
            <h1 className="title-text"
            // style={{transform: `translateY(${offsetY * 0.5}px)`}}
            >
              SPACEX
            </h1>
          </div>

          <div className="container-quote">
            <div className="quote">
              <q>What I’m trying to do is to make a significant difference in space 
                flight and help make space flight accessible to almost anyone.</q>
            </div>
          </div>

          <div className="container-2">
            <div className="items-cont2">
              <div className="founded">
              <h1>Founded by {info.founder}</h1>
              <h3>In {info.founded}</h3>
              <h3>{info.summary}</h3>
              </div>
            </div>
            <div className="items-cont2">
              <div className="elonmusk">
                <img className="img-elonmusk" src="https://i.pinimg.com/564x/12/31/30/12313078f9e0814d5c03dfb96fef890e.jpg"></img>
              </div>
            </div>
          </div>

          <div className="container-5">
            <div className="items-cont5">
              <div className="cont5-twoCl">
                <img className="img-elonmusk" src="https://pbs.twimg.com/media/Dkl9gkUU8AEmNLb.jpg"></img>
              </div>
            </div>
            <div className="items-cont5">
              <div className="founded">
                <h3>employees : {info.employees}</h3>
                <h3>vehicles : {info.vehicles}</h3>
                <h3>launch_sites : {info.launch_sites}</h3>
                <h3>test_sites : {info.test_sites}</h3>
                </div>
            </div>
          </div>

          <div className="container-3">
            <div className="bg-cont3">
              <div className="bg-cont3-top"></div>
            </div>
            <div className="bg-cont3">
              <div className="bg-cont3-bottom">
            </div>
              <div className="card-board">
                <div className="text-cont3">
                    <img className="pic-board" src="https://cdn.discordapp.com/attachments/806905833853943840/812782300823027732/Asset_1.png"></img>
                    <h2>{info.ceo}</h2>
                    <p>CEO/CTO</p>
                  </div>
                  <div className="text-cont3">
                    <img className="pic-board" src="https://cdn.discordapp.com/attachments/806905833853943840/812782606256439326/Asset_2.png"></img>
                    <h2>{info.coo}</h2>
                    <p>COO</p>
                  </div>
                  <div className="text-cont3">
                    <img className="pic-board" src="https://cdn.discordapp.com/attachments/806905833853943840/812782610228838420/Asset_3.png"></img>
                    <h2>{info.cto_propulsion}</h2>
                    <p>CTO Propulsion</p>
                  </div>
              </div>
            </div>
          </div>


          <div className="container-4">
              <div className="adress">
                <h2>headquarters Adress : </h2>
                <h3>address : {info.headquarters.address}</h3>
                <h3>city : {info.headquarters.city}</h3>
                <h3>state : {info.headquarters.state}</h3>
              </div>
              <div className="adress">
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
/*function parallax(){
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
} */

export default Home;
