import React, { useState }from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ForumCard.css';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import { PhotoSizeSelectLargeOutlined } from '@material-ui/icons';
const backend_url = process.env.REACT_APP_BACKEND_URL;



const Course = (props) => {

    return (
        <div>
            {console.log(props.course)}
           <h1>{props.course}</h1>
        </div>
    )
}

export default Course; 