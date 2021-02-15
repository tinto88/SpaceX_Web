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
    <div>
      <h2>Home</h2>
      <h1>{info.name}</h1>
      <h2>Founder : {info.founder}</h2>
      <h2>founded : {info.founded}</h2>
      <h2>summary : {info.summary}</h2>
      <h2>ceo cto : {info.ceo}</h2>
      <h2>coo : {info.coo}</h2>
      <h2>cto_propulsion : {info.cto_propulsion}</h2>
      <h2>valuation : {info.valuation}</h2>
      <h2>employees : {info.employees}</h2>
      <h2>vehicles : {info.vehicles}</h2>
      <h2>launch_sites : {info.launch_sites}</h2>
      <h2>test_sites : {info.test_sites}</h2>
      
    </div>
  );
}

export default Home;
