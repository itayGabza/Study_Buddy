import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [names, setNames] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const backend_url = process.env.REACT_APP_BACKEND_URL;

 /*  useEffect(() => {
    axios
      .get(`${backend_url}/test`)
      .then((res) => {
        setNames(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [backend_url]); */

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) :
          /*   // {names.map((name, index) => (
            // <li key={index}>
            //  <h1>{name}</h1>
            // </li>} */
          <div />
        }
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Blog;
