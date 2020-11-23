import React from "react";
import "./css/dogpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DogPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");
  return (
    <div className="dogpage" role="main">
      <div className="container-fluid d-flex justify-content-center">
        <div className="navbar" role="navigation">
          <Link to="/userprofile">
            <button type="button2">My Account</button>
          </Link>
          <form className="form" action="/auth/signout" method="post">
            <button type="button2">Sign Out</button>
          </form>
        </div>
        <div className="usercard2">
          <div className="card-header">
            <h1 id="header">Send a heart to your favorite dog!</h1>
          </div>
          <div className="card-body">
            <form id="send" action="/auth/updateLike" method="post">
              <div className="form-group">
                <div className="dog-name">
                  <label for="dogname">Name of the dog:</label>
                  <input
                    type="text"
                    id="dogname"
                    name="dogname"
                    className="form-control"
                    placeholder="Kiara"
                  />
                </div>
              </div>

              {error ? <div className="danger">{error}</div> : ""}
              <div className="submitButtons">
                <div className="form-group">
                  <input
                    type="submit"
                    className="buttons"
                    value="Send Heart!"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogPage;
