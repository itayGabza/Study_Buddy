
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

import './Feed.scss'
import ForumCard from '../components/ForumCard';
// import DropDown from '../components/DropDown';
import SearchComp from '../components/Search/SearchComp';

import Filters from '../components/Filters';
import NewRequest from '../components/NewRequest';
import Loading  from "../components/loading";
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ForumCard.css';
import '../components/jumbo.css';
const backend_url = process.env.REACT_APP_SERVER_URL;





const formCardsData = [];
// new FormCard("Home Assignment 3", "Home Work", "Male", "Good", "Zoom", "Morning", "4"),
// new FormCard("Home Assignment 6", "Home Work", "Good", "3"),
// new FormCard("Studying for final exam", "Exam preperation", "Good", "2")



const Feed = () => {
  const [StudyRequstQery, setStudyRequstQuery] = useState('')
  const { isAuthenticated } = useAuth0();
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [forumCards, setForumCards] = useState(formCardsData);
  const [studyRequest, setStudyRequest] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const HandleStudyRequests = (data) => {
    console.log("data", data)
    const studyRequestsToRender = data.map(formCard =>

      <ForumCard {...formCard} />

    );
    setForumCards(studyRequestsToRender)
  }


  useEffect(() => {
    console.log(backend_url.concat('/api/studyRequests').concat(StudyRequstQery))
    axios
      .get(`${backend_url}`.concat('/api/studyRequests').concat(StudyRequstQery))
      .then((res) => {
        HandleStudyRequests(res.data)

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [StudyRequstQery]);// useEffect apply when StudyRequstQery change. 

  const changeStudyRequstQuery = (r) => {
    setStudyRequstQuery(r);

  }


  const compsToRender = forumCards.map(formCard =>

    <ForumCard {...formCard} />
  );


  return ( /*isAuthenticated ?*/

    <div className='feed'>
     

      <NewRequest/>
      {/* <DropDown
        degrees={degrees}
        courses={selectedDegree && selectedDegree.courses}
        selectedDegree={selectedDegree}
        selectedCourse={selectedCourse}
        onDegreeSelectClick={handleDegreeSelectClick}
        onCourseSelectClick={handleCourseSelectClick}
      /> */}
      <SearchComp />


      <h4> Select Filters:</h4>
      <div class="bigjumbo">
        <Jumbotron >

          <Filters changeStudyRequstQuery={changeStudyRequstQuery} sentFromStudyRequest={false} />
        </Jumbotron>
      </div>

      {loading === true ?
        (<Loading/>)
      :(<div>
            <h4> תוצאות החיפוש: {forumCards.length}</h4>
            {forumCards}
          </div>)
      }
    </div> /*:
    
    <text className="feedText">Login to see the feed </text>*/)
};

export default Feed

