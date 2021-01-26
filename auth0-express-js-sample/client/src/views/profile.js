// src/views/profile.js

import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ForumCard from "../components/ForumCard";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const [requests, setRequests] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const backend_url = process.env.REACT_APP_BACKEND_URL;

  useEffect((email) => {
    axios.get(`${backend_url}/requests/A@a`)
      .then((res) => {
        console.log(res);
        console.log("Supppppppp");
        setRequests(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if(load){
    return(
      <div>
        {
          error ? <li>{error.message}</li>
          :
          requests.forEach((request) => 
            <ForumCard 
           studyMethod={request.studyMethod}
           studyGender={request.gender}
           studyLevel={request.studyLevel}
           studyTime={request.studyTime}
           groupSize={request.groupSize}
           studyMethod={request.studyMethod}
            />
          )}
      </div>
    )}
  else{
    return <h1>Supp</h1>
  }
  
  
};

export default Profile;
