import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div>
      <div className="navbar" role="navigation">
        <Link to="/dogs">
          <button type="button">Dog Preview</button>
        </Link>
        <Link to="/signup">
          <button type="button">Sign Up</button>
        </Link>
        <Link to="/signin">
          <button type="button">Sign In</button>
        </Link>
        <ReactPlayer
          url="https://raw.githubusercontent.com/jennch/misc/main/home.m4a"
          width="400px"
          height="50px"
          playing={false}
          controls={true}
        />
      </div>

      <section id="section1">
        <div className="main" role="banner">
          <h1 id="header2">
            Ready to meet your new best friend?
            <br />
            Join BarkFinder today!
          </h1>
          <a class="scroll" href="#section2">
            <span></span>Scroll
          </a>
        </div>
      </section>
      <section id="section2">
        <div className="main" id="second" role="main">
          <header>How does it work?</header>
          <p>
            We take dogs from foster homes all over the Bay Area and bring them
            right to your fingertips in the comfort of your own home. So once
            you've created an account, you can sit back, relax, and let us bring
            your future dog right to your computer.
          </p>
        </div>
      </section>
      <Card className="text-center" role="contentinfo">
        <Card.Footer className="color-footer">
          Contact us at dogmatching@gmail.com
        </Card.Footer>
        <Card.Footer className="color-footer">
          Copyright © 2020 Jennifer Chang, Katie Chong, and Kristina Yin. All
          Rights Reserved
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Home;
