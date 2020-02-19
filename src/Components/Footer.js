import React from "react";
import Button from "react-bootstrap/Button"
export default function Footer() {
  return (
    <div>
      
      <div>
        <h1>Book A Table</h1>
        <div className="flex">
        <div className="bookTableButton">
          <Button className="customButton">+126.225.3333</Button>
        </div>
      </div>
      </div>
      
      <h1>Orange Cafe</h1>
      <div>
        <h2>open</h2>

        <ul>Mon- Thu 10AM-10PM</ul>
        <ul>Fri- Sun 10AM-11PM</ul>
      </div>
      <div>
        <h2>close</h2>
        <ul>Tuesdays</ul>
        <ul>Statutory Holidays</ul>
      </div>
      <div>
        <h2>tel</h2>
        <ul>+126.225.3333</ul>
      </div>
      <div>
        <h2>email</h2>
        <ul>orangecafe@gmail.com</ul>
      </div>

      <div>1535 Broadyway Vancouver, V5M 2M9</div>

      <div>
        <img src ="./sdf.png" alt = "facebook"></img>
        <img src ="./sdf.png" alt = "instagram"></img>
        <img src ="./sdf.png" alt = "twitter"></img>
      </div>
    </div>
  );
}
