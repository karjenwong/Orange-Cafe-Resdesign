import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Home() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="home">
      <section className="heroSection beige">
        <div id="hero_img">
          <img src="/images/logo.png" alt="" />
        </div>

        <div className="heroTitle">
          {" "}
          <span className="red">Japanese </span>Bistro with a twist of{" "}
          <span className="blue">French</span> &{" "}
          <span className="green">Italian</span>
        </div>
        <div className="flex">
          <div className="buttonContainer">
            <Button className="customButton">+126.225.3333</Button>
            <Button className="customButton"> View Menu</Button>
          </div>
        </div>

        <div className="contactInfoContainer ">
          <div className="address">
            <div>Orange Cafe</div>
            <div>1535 Broadway</div>
            <div>Vancouver V5M 2M9</div>
          </div>
          <div className="hours">
            <div>
              <span>Mon- Thru </span>
              <span>10AM-10PM</span>
            </div>
            <div>
              <span>Fri- Sun </span>
              <span>10AM-11PM</span>
            </div>
            <div>
              <span>Tuesday </span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="homepageInformationContainer margin">
        <div className="marginTop ">
          <div id="conceptImage" className="cardImage"></div>

          <div className="flex homeCard">
            <h1>Concept</h1>
            <p>
              Our bistro serves a combination of Japanese, Italian & French
              comfort food with the emphasis on homemade quality and simplicity.
            </p>
            <p>
              From Pasta to Tonkatsu, our diverse menu offerings include salads,
              pasta, rice dishes and also cakes which are great for pairing with
              a cup of latte.
            </p>
          </div>
        </div>

        <div className="marginTop ">
          <div id="pastaImage" className="cardImage"></div>

          <div className="flex homeCard">
            <h1>Pasta</h1>
            <p>
              There's really nothing better than a quality bowl of pasta to make
              all your troubles float away. And having a bowl of WAFU (Japanese
              Style) pasta is simply the best. Our pasta is a perfect fusion of
              Japanese and Italian cuisine, guaranteed to mellow your hearts.
            </p>
          </div>
        </div>

        <div className="marginTop ">
          <div id="cakeImage" className="cardImage"></div>
          <div className="flex homeCard">
            <h1>Cake</h1>
            <p>
              Why wait for a special occasion just to enjoy a slice of something
              special? Whether you have a reason to celebrate or not, we think
              life is better when there are cakes, especially our
              French-inspired cakes.
            </p>
          </div>
        </div>
      </section>

      <section id="linksContainer" className=" beige">
        <div className=" margin">
          <div className="facebookContainer white">
            <h1>Instagram</h1>
            <div>
              <img
                className="facebookPlaceHolder"
                src="/images/instagramPlaceholder.png"
                alt=""
              />
            </div>
          </div>

          <div className="facebookContainer white">
            <h1>Facebook</h1>
            <div>
              <img
                className="facebookPlaceHolder"
                src="/images/facebookPage.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="buttonContainer">
            <Button className="customButton">Directions</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
