import React, { useState }from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ForumCard.css';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { PhotoSizeSelectLargeOutlined } from '@material-ui/icons';
const backend_url = process.env.REACT_APP_BACKEND_URL;



const ForumCard = (props) => {

    const[click, setClick] = useState(true);
    const[contactDetails, setContactDetails] = useState('');
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    const checkLevel = (level) => {
        if (level === "good") {
            return "success"
        } else if (level === "medium") {
            return "warning"
        }
        else {
            return "danger"
        }
    }

    const handleOpenDetails = () => {
       setClick(false);
       axios.get(`${backend_url}/students/findall?email=A@a`)
        .then((res) =>{
            setContactDetails(res.data);
            PhotoSizeSelectLargeOutlined(true);
        })
        .catch(err =>{
            setError(err.message);
            setLoad(true);
        })
    }
    const handleCloseDetails = () => {
        setClick(true);
    }

    var checkStudyingFor = (studyingFor) => {
        console.log("studyingFor", studyingFor)
        if ((studyingFor === "exam") || (studyingFor === "test")) {
            return "למידה למבחן"
        } else if ((studyingFor === "homeWork") || (studyingFor === "assignment")) {
            return "שיעורי בית"
        } else {
            return "אחר"
        }
    }



    const checkTimeName = (time) => {
        if (time === "morning") {
            return "בוקר"
        } else if (time === "afterNoon") {
            return "אחר הצהריים"
        } else if (time === "noon") {
            return "צהריים"
        } else {
            return "ערב"
        }
    }

    const checkLevelname = (checkLevel) => {
        if (checkLevel === "good") {
            return "שולט בחומר"
        } else if (checkLevel === "medium") {
            return "בינוני בחומר"
        }
        else {
            return "מתקשה בחומר"
        }
    }


    const isClicked = click;
    return (
        <div class="cardEdit">
            {console.log("Props of study request")}
            {console.log(props)}
            {/* 
        The names of the props are according to the backend data. 
        Change the names after updating the backend. 
        */}
            <Card className="bootstrapCard" >
                <Card.Body>
                    <div className="cardHeadline">
                        <div class="row">

                            <div class="col-9 text-right">
                                <Card.Title>{props.headLine}</Card.Title>
                                <Card.Title>
                                    <Badge variant="secondary">{checkStudyingFor(props.studyingFor)}</Badge>{' '}
                                </Card.Title>
                                <Badge variant={props.gender === "male" ? "male" : "female"}>{props.gender === "male" ? "גברים" : "נשים"}</Badge>{' '}
                                <Badge variant={checkLevel(props.studyLevel)}>{checkLevelname(props.studyLevel)}</Badge>{' '}
                                <Badge variant={props.studyMethod === "zoom" ? "zoom" : "warning"}>{props.studyMethod === "zoom" ? "Zoom" : "פרונטלי"}</Badge>{' '}
                                <Badge variant="success">{checkTimeName(props.studyTime)}</Badge>{' '}
                                <Badge variant="warning">{props.groupSize <= 4 ? props.groupSize : "+5"}</Badge>{' '}
                                <Badge variant="warning"></Badge>{' '}
                            </div>
                            <div class="col-3  text-left">
                                Name שלי
                                <Card.Title><Badge pill variant={props.myGender === "male" ? "male" : "female"}>{props.myGender === "male" ? "גבר" : "אישה"}</Badge>{' '}</Card.Title>
                            </div>
                        </div>
                    </div>

                    <Card.Text>


                        <text>
                            {props.reqDescription}
                        </text>

                    </Card.Text>
                    {click
                    ?
                    <Button variant="primary" onClick={handleOpenDetails}>פרטים ליצירת קשר</Button>
                    :
                    <div>
                        
                        <h1>supppppp</h1>
                        <h1>supppppp</h1>
                    <Button variant="primary" onClick={handleCloseDetails}>סגור פרטים</Button>
                    </div>
                }
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default ForumCard;