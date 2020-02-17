import React from "react";
import Button from "react-bootstrap/Button";
export default function Home() {
  return (
    <div className="home">
      <div id="hero_img">
        <img src="/images/logo.png" />
      </div>

      <div className="heroTitle">
        {" "}
        <span className="red">Japanese </span>Bistro with a twist of{" "}
        <span className="blue">French</span> &{" "}
        <span className="green">Italian</span>
      </div>
      <div className="flex"> 
        <div className="buttonContainerHomePage">
          <Button className="customButton">+126.225.3333</Button>
          <Button className="customButton"> View Menu</Button>
        </div>
      </div>

      <div className = "contactInfoContainer margin">
        <div className="address">
          <div>Orange Cafe</div>
          <div>1535 Broadway</div>
          <div>Vancouver V5M 2M9</div>
        </div>
        <div className="hours">
          <div>Mon- Thur 10AM-10PM</div>
          <div>Fri- Sun 10AM-11PM</div>
          
        </div>
      </div>
    </div>
  );
}
