import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Filters from './Filters';
import './Filters.css';
import { Jumbotron } from 'react-bootstrap';
import { FormCard } from '../views/Feed';
import { useHistory } from 'react-router-dom';

import './NewRequest.css';
import './jumbo.css';



const NewRequest = (props) => {
  const history = useHistory();
  const onClick = () => {
    const card = new FormCard("buddys for the exam preperation", "Exam preperation", "Male", "Good", "Zoom", "Morning", "4");
    props.addToList(card);
    history.push('/Forming');
  };
  return (
    <div>
      <div class="newRequestForm">
        <Form.Group>
          <Form.Control size="lg" type="text" placeholder="Head Line" />
          <br />
          <Form.Control type="text" placeholder="Description" />
          <br />
          <br />
        </Form.Group>
      </div>
      <div class="bigjumbo">
        <Jumbotron >

          <p>
            <div class="jumbo">
              <Filters sentFromStudyRequest = {true} />
            </div>
          </p>
        </Jumbotron>
      </div>
      <br />
      <br />
      <br />
      <Button onClick={onClick} variant="success" style={{ margin: "10px" }}>Submit</Button>{' '}
    </div>

  )

}

export default NewRequest;