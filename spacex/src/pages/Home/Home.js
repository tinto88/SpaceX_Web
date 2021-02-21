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
          <img className="spacex-logo" src="https://cdn.discordapp.com/attachments/806905833853943840/812812422623789066/Asset_5.png"></img>
          <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/spacexarabsat6a.jpg" className="bg-home"></img>
            {/* <h1>{info.name}</h1> */}
          </div>
            

          <div className="container-quote">
            <div className="container-quote-content">
              <div className="quote">
                <div className="open-symbol-quote">
                  <img className="icon-quote" src="https://cdn.discordapp.com/attachments/806905833853943840/813111494190825512/quote.png"></img>
                </div>
                <div>
                  <p> What I’m trying to do is to make a significant difference in space 
                    flight and help make space flight accessible to almost anyone. </p>
                  <p className="name-quote">- Elon Musk -</p>
                </div>
                <div className="close-symbol-quote">
                  <img className="icon-quote" src="https://cdn.discordapp.com/attachments/806905833853943840/813111485071884308/quote_1.png"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="container-2">
            <div className="items-cont2">
              <div className="founded-1">
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
              <div className="founded-2">
                <div className="detail-founded-2">
                <h1>{info.employees}</h1>
                <h3> EMPLOYEES </h3>
                </div>
                <div className="bar-content"></div>
                <div className="detail-founded-2">
                <h1>{info.vehicles}</h1>
                <h3> VEHICLES </h3>
                </div>
                <div className="bar-content"></div>
                <div className="detail-founded-2">
                <h1>{info.launch_sites}</h1>
                <h3> LAUNCH SITES </h3>
                </div>
                <div className="bar-content"></div>
                <div className="detail-founded-2">
                <h1>{info.test_sites}</h1>
                <h3> TEST SITES </h3>
                </div>
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
                    <p>Chief Executive Officer</p>
                    <p>Chief Technology Officer</p>
                  </div>
                  <div className="text-cont3">
                    <img className="pic-board" src="https://cdn.discordapp.com/attachments/806905833853943840/812782606256439326/Asset_2.png"></img>
                    <h2>{info.coo}</h2>
                    <p>Chief Operating Officer</p>
                  </div>
                  <div className="text-cont3">
                    <img className="pic-board" src="https://cdn.discordapp.com/attachments/806905833853943840/812782610228838420/Asset_3.png"></img>
                    <h2>{info.cto_propulsion}</h2>
                    <p>Chief Technology Officer</p>
                    <p>Propulsion</p>
                  </div>
              </div>
            </div>
          </div>


          <div className="container-4">
              <div className="adress">
                <h2>ADRESS</h2>
                <h3>Road : {info.headquarters.address}</h3>
                <h3>City : {info.headquarters.city}</h3>
                <h3>State : {info.headquarters.state}</h3>
              </div>
              <div className="adress">
                <h2>CONTACT</h2>
                <h3>Website : {info.links.website}</h3>
                <h3>Flickr : {info.links.flickr}</h3>
                <h3>Twitter : {info.links.twitter}</h3>
                <h3>Elon_twitter : {info.links.elon_twitter}</h3>
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
