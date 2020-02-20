import React from "react";
import Button from "react-bootstrap/Button";
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
        <div className="footerCard">
          <h2>open</h2>
          <div>Mon- Thu 10AM-10PM</div>
          <div>Fri- Sun 10AM-11PM</div>
        </div>
        <div className="footerCard">
          <h2>close</h2>

          <div>Tuesdays</div>
          <div>Statutory Holidays</div>
        </div>

        <div className="footerCard">
          <h2>tel</h2>
          <div>+126.225.3333</div>
        </div>
        
        <div className="footerCard">
          <h2>email</h2>
          <div>orangecafe@gmail.com</div>
        </div>
      </div>
      <div>1535 Broadyway Vancouver, V5M 2M9</div>

      <div>
        <img src="./sdf.png" alt="facebook"></img>
        <img src="./sdf.png" alt="instagram"></img>
        <img src="./sdf.png" alt="twitter"></img>
      </div>
    </div>
  );
}
