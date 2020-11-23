import React, { useEffect, useState, useMemo } from "react";
import "./css/table.css";
import dogimage from "./Images/buffer.jpg";
import { Container, Card } from "react-bootstrap";
import TableContainer from "./TableContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from "./filters";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const Table = () => {
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
  });

  const renderRowSubComponent = (row) => {
    const { name, picLink } = row.original;
    return (
      <div>
        <Card style={{ width: "18rem", margin: "0 auto" }}>
          <Card.Img top src={picLink} alt="Card image cap" />
          <Card.Body>
            <Card.Title>
              <strong>{`${name}`} </strong>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander", // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "⬆️️" : "📷"}
          </span>
        ),
      },
      {
        Header: "Breed",
        accessor: "breed",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: SelectColumnFilter,
      },
      {
        Header: "Age",
        accessor: "age",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },

      {
        Header: "Gender",
        accessor: "gender",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "Hearts💖",
        accessor: "likes",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
    ]
    // []
  );

  if (loaded) {
    return (
      <div>
        <body>
          <div className="navbar" role="navigation">
            <Link to="/dogpage">
              <button type="button2"> Send a 💖</button>
            </Link>
            <Link to="/userprofile">
              <button type="button2">My Account</button>
            </Link>
            <form className="form" action="/auth/signout" method="post">
              <button type="button2">Sign Out</button>
            </form>
          </div>
          <main>
            <Container style={{ marginTop: 100 }}>
              <h1>Help adopt one of these dogs!</h1>
              <TableContainer
                columns={columns}
                data={dogs}
                renderRowSubComponent={renderRowSubComponent}
              />
            </Container>
          </main>
        </body>
      </div>
    );
  } else {
    return (
      <div>
        <div className="navbar" role="navigation">
          <Link to="/">
            <button type="button2">Home</button>
          </Link>
          <Link to="/signup">
            <button type="button2">Sign Up</button>
          </Link>
          <Link to="/signin">
            <button type="button2">Sign In</button>
          </Link>
        </div>
        <main>
          <Container>
            <h1>Loading page</h1>
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
};

export default Table;
