// src/views/profile.js

import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const [requests, setRequests] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const backend_url = process.env.REACT_APP_SERVER_URL;

  useEffect((email) => {
    axios
      .get(`${backend_url}/requsts/:A@a`)
      .then((res) => {
        setRequests(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, [backend_url]);

 /*  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : 
             {requests.map((request, index) => (
             <li key={index}>
              <h1>{request}</h1>
             </li>
           ))}
        }
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }

}; */

return (
  <h1> sup</h1>
)}
export default Profile;


/*
<div>
<div className="row align-items-center profile-header">
  <div className="col-md-2 mb-3">
    <img
      src={picture}
      alt="Profile"
      className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
    />
  </div>
  <div className="col-md text-center text-md-left">
    <h2>{name}</h2>
    <p className="lead text-muted">{email}</p>
  </div>
</div>
<div className="row">
  <pre className="col-12 text-light bg-dark p-4">
    {JSON.stringify(user, null, 2)}
  </pre>
</div>
</div>   
// */