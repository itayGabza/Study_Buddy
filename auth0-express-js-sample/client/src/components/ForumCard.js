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
                <Badge variant="secondary">{props.studyingFor}</Badge>{' '}
                </Card.Title>
                <Card.Text>
                  
                    <Badge variant={props.studyGender=="male"?"male":"female"}>{props.studyGender}</Badge>{' '}
                    <Badge variant={checkLevel(props.studyLevel)}>{props.studyLevel}</Badge>{' '}
                    <Badge variant={props.studyMethod=="zoom"?"success":"frontal"}>{props.studyMethod}</Badge>{' '}
                    <Badge variant="success">{props.studyTime}</Badge>{' '}
                    <Badge variant="warning">{props.groupSize}</Badge>{' '}  
                    <Badge variant="warning"></Badge>{' '} 
                    <br></br>
                      מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף
                    מחפש ללמוד בכיף עם בירה בסוף

                 </Card.Text>
                <Button variant="primary">Contact info</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default ForumCard;