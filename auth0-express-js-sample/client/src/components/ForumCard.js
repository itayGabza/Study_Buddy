import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ForumCard.css';
import Badge from 'react-bootstrap/Badge';



const ForumCard = (props) => {

    const checkLevel = (level) =>{
        if (level==="good") {
            return "success"
        } else if (level ==="medium"){
            return "warning"
        }
        else {
            return "danger"
        }
    }

    const checkStudyingFor = (studyingFor) =>{
        if (studyingFor=="test") {
            return "למידה למבחן"
        } else if (studyingFor =="other"){
            return "אחר"
        } else {
            return "שיעורי בית"
        }
    }

    

    const checkTimeName = (time) =>{
        if (time==="morning") {
            return "בוקר"
        } else if (time ==="afterNoon"){
            return "אחר הצהריים"
        } else if (time ==="noon"){
            return "צהריים"
        } else {
            return "ערב"
        }
    }

    const checkLevelname = (checkLevel) =>{
        if (checkLevel==="good") {
            return "שולט בחומר"
        } else if (checkLevel ==="medium"){
            return "בינוני בחומר"
        }
        else {
            return "מתקשה בחומר"
        }
    }



    return (
        <div class="cardEdit">
        {console.log(props)}
        {/* 
        The names of the props are according to the backend data. 
        Change the names after updating the backend. 
        */}
        <Card className="bootstrapCard" >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Title>
                <Badge variant="secondary">{checkStudyingFor(props.studyingFor)}</Badge>{' '}
                </Card.Title>
                <Card.Text>
                  
                    <Badge variant={props.studyGender=="male"?"male":"female"}>{props.studyGender=="male"?"גברים":"נשים"}</Badge>{' '}
                    <Badge variant={checkLevel(props.studyLevel)}>{checkLevelname(props.studyLevel)}</Badge>{' '}
                    <Badge variant={props.studyMethod=="zoom"?"success":"frontal"}>{props.studyMethod=="zoom"?"פרונטלי":"זום"}</Badge>{' '}
                    <Badge variant="success">{checkTimeName(props.studyTime)}</Badge>{' '}
                    <Badge variant="warning">{props.groupSize}</Badge>{' '}  
                    <Badge variant="warning"></Badge>{' '} 
                    <br></br>
                      מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף

                 </Card.Text>
                <Button variant="primary">פרטים ליצירת קשר</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default ForumCard;