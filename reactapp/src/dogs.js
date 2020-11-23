import "./css/dogs.css";
import Slider from "./Slider";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dogimage from "./Images/buffer2.jpg";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPosts = async () => {
    console.log("getting posts");
    try {
      await fetch("/posts")
        .then((res) => res.json())
        .then((result) => {
          setDogs(result);
          setLoaded(true);
        });
      console.log("dogs", dogs);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getPosts();
  }); // Only run the first time

  if (loaded) {
    return (
      <div>
        <div className="navbar" role="navigation">
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button type="button">Sign In</button>
          </Link>
        </div>
        <div className="App" role="main">
          <Slider images={dogs} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="navbar" role="navigation">
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button type="button">Sign In</button>
          </Link>
        </div>
        <main>
          <Container>
            <h1 id="h2">Loading page</h1>
            <Image
              src={dogimage}
              alt="dog says thank you for waiting as the page loads"
              fluid
            />
          </Container>
        </main>
      </div>
    );
  }
}
export default Dogs;
