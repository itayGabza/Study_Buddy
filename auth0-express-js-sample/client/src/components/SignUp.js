import { Divider } from "@material-ui/core";
import React from "react";


import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const SignUp = () => {

    return (
        <div>
            <Dropdown>
                <h2>?מה אני לומד</h2>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Degree
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Computre Science</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Industrial and managment</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Biology</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <span> </span>

            <Dropdown>
                <h2>?שנת לימוד</h2>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    שנה
            </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <span> </span>
            <Form>
                <Row>
                    <Col xs="auto">
                        <Form.Control placeholder="גיל" />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}


export default SignUp;