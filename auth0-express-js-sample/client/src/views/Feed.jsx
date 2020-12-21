
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import './Feed.scss'
import ForumCard from '../components/ForumCard';
// import DropDown from '../components/DropDown';
import SearchComp from '../components/Search/SearchComp';

import Filters from '../components/Filters';
import NewRequest from '../components/NewRequest';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ForumCard.css';
import '../components/jumbo.css';
import useVisiblityToggler from '../hooks/useVisiblityToggler'
export class FormCard {
  constructor(title, objective, gender, level, location, studyingTime, groupSize) {
    this.title = title;
    this.objective = objective;
    this.gender = gender;
    this.level = level;
    this.location = location;
    this.studyingTime = studyingTime;
    this.groupSize = groupSize;
  }
}
class Degree {
  constructor(name, courses) {
    this.name = name;
    this.courses = courses;
  }
}

const degreesData = [
  new Degree("Industrial Engineering and Management", ['Culculus', 'Economics', 'Linear Regression', 'Object Oriented Programming', 'Statistics']),
  new Degree("Computer Science", ['Intro to CS', 'Linear Algebra', 'Linear Algebra2', 'Culculus2', 'SPL']),
  new Degree("Physics", ['Math-For-Physicens', 'Physics1 ', 'Physics2', 'Thermodynamics', 'Statics'])
];


const formCardsData = [
  new FormCard("Home Assignment 3", "Home Work", "Male", "Good", "Zoom", "Morning", "4"),
  new FormCard("Home Assignment 6", "Home Work", "Good", "3"),
  new FormCard("Studying for final exam", "Exam preperation", "Good", "2")
];



const Feed = () => {
  const { isAuthenticated } = useAuth0();
  const [selectedDegree, setSelectedDegree] = useState(degreesData[0])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [degrees, setDegrees] = useState(degreesData);
  const [forumCards, setForumCards] = useState(formCardsData);
  const [ContactCardComponent, toggleCardVisiblity] = useVisiblityToggler(
    <NewRequest addToList={forumCard => {
      setForumCards([...forumCards, forumCard]);
    }} />,
    false
  );

  useEffect(() => {
    // const selectedDegree = degreesData[0];
    // setSelectedDegree(degreesData[0]);
  }, [])
  const handleCourseSelectClick = (e) => {
    const name = e.target.text;
    if (name) {

      const selectedCourse = selectedDegree.courses.find(c => c === name);
      setSelectedCourse(selectedCourse);
    }
  };

  const handleDegreeSelectClick = (e) => {
    // const name = getAttributeName(e, 'text');
    const name = e.target.text;
    if (name) {

      const selectedDegree = degrees.find(c => c.name === name);
      setSelectedDegree(selectedDegree);
      setSelectedCourse(selectedDegree.courses[0]);


    }
  };

  const compsToRender = forumCards.map(formCard =>
    <ForumCard {...formCard} />
  );


  return ( /*isAuthenticated ?*/

    <div className='feed'>
      <Button variant="success" style={{ float: "center" }} onClick={toggleCardVisiblity}>Create New Request</Button>

      {ContactCardComponent}
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

          <p>
            <div class="jumbo">
              <Filters />
            </div>
          </p>
        </Jumbotron>
      </div>
      <h4> Results
                Found:</h4>
      {compsToRender}
    </div> /*:
    <text className="feedText">Login to see the feed </text>*/)
};

export default Feed

