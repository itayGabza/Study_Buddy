// src/views/profile.js

import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ForumCard from "../components/ForumCard";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const formCardsData = [];
  var [StudyRequstQery, setStudyRequstQuery] = useState("");
  const { isAuthenticated } = useAuth0();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [forumCards, setForumCards] = useState([]);
  const [studyRequest, setStudyRequest] = useState(formCardsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const backend_url = process.env.REACT_APP_BACKEND_URL;

  const HandleStudyRequests = (data) => {
    console.log("data!!!!!!!!!!!", data);
    const studyRequestsToRender = data.map(formCard =>

      <ForumCard {...formCard} />
    );
    setForumCards(studyRequestsToRender);
  };

  useEffect(() => {
    if (StudyRequstQery == "") {
      StudyRequstQery = "/findall?email=A@a";
    }
    console.log("query", StudyRequstQery);
    console.log(backend_url.concat("/requests").concat(StudyRequstQery));
    axios
      .get(`${backend_url}`.concat("/requests").concat(StudyRequstQery))
      .then((res) => {
        HandleStudyRequests(res.data);

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [StudyRequstQery]); // useEffect apply when StudyRequstQery change.

  const changeStudyRequstQuery = (r) => {
    setStudyRequstQuery(r);
  };

  const compsToRender = forumCards.map((formCard) => (
    <ForumCard {...formCard} />
  ));


  return (

    <div>
      <div className="h4Style">
        <h4> תוצאות החיפוש: {forumCards.length}</h4>
      </div>

      {forumCards}
    </div>
  )

};

export default Profile;






