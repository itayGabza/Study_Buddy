import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ForumCard.css';
import Badge from 'react-bootstrap/Badge';

const ForumCard = (props) => {
    return (
        <div class="cardEdit">
        <Card >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Title>
                <Badge variant="secondary">{props.objective}</Badge>{' '}
                </Card.Title>
                <Card.Text>
                    <Badge variant="primary">{props.gender}</Badge>{' '}
                    <Badge variant="info">{props.level}</Badge>{' '}
                    <Badge variant="success">{props.location}</Badge>{' '}
                    <Badge variant="danger">{props.studyingTime}</Badge>{' '}
                    <Badge variant="warning">{props.groupSize}</Badge>{' '}  
                    <Badge variant="warning"></Badge>{' '}        
                 </Card.Text>
                <Button variant="primary">Contact info</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default ForumCard;