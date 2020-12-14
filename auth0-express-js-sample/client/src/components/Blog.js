import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [names, setNames] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const backend_url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backend_url}/test`)
      .then((res) => {
        setNames(res.data);
        alert("second alert");
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [backend_url]);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : 
            // {names.map((name, index) => (
            // <li key={index}>
            //  <h1>{name}</h1>
            // </li>}

            // names is not an array, so names.map is invalid, causing a crash.
            // names get "res.data" (line 14) which currently is a long string of HTML tags.
            // I don't know what you wanted to achieve, so I commented the whole "names.map" section above to avoid the crash.

            <div />
        }
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Blog;
