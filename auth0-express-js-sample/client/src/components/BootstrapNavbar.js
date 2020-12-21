import React from 'react'
import AuthNav from "./auth-nav";
import {NavLink,} from "react-router-dom";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Interactive from 'react-interactive';
import { HashLink } from 'react-router-hash-link';

class BootstrapNavbar extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                            <Navbar.Brand href={`/#section-one`}>Study buddy</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {/* <Interactive className="ml-auto" as={HashLink} smooth className="nav-link" */}
                                    <Interactive as={HashLink} smooth className="nav-link"
                                        activeClassName="router-link-exact-active" to={`/#section-one`}>בית </Interactive>
                                    <Interactive as={HashLink} smooth className="nav-link"
                                        activeClassName="router-link-exact-active" to={`/#post`}>פרסום פוסט </Interactive>
                                    <Interactive as={HashLink} smooth className="nav-link"
                                        activeClassName="router-link-exact-active" to={`/#feed`}>מציאת שותפים </Interactive>
                                    <Interactive as={HashLink} smooth className="nav-link"
                                        activeClassName="router-link-exact-active" to={`/#section-two`}>הצוות</Interactive>
<                                   Interactive as={HashLink} smooth className="nav-link"
                                        activeClassName="router-link-exact-active" to={`/#SignUp`}>הירשם</Interactive>
                                    <NavLink
                                        to="/profile"
                                        exact
                                        className="nav-link"
                                        activeClassName="router-link-exact-active"
                                    >

                                        Profile
    </NavLink>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <div className="auth">
                                    <AuthNav />
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />

                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;