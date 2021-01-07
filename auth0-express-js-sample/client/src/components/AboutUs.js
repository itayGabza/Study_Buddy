import React from 'react';
import "./AboutUs.css"
import AboutUsInfo from "./AboutUsInfo.js";
import Button from 'react-bootstrap/Button';

// function AboutUs() {
//     return (

//        <AboutUsInfo></AboutUsInfo>
//     )
// }

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOpenClick = this.handleClickOpenClick.bind(this);
        this.handleClickCloseClick = this.handleClickCloseClick.bind(this);
        this.state = { isClicked: false };
    }

    handleClickOpenClick() {
        this.setState({ isClicked: true });
    }

    handleClickCloseClick() {
        this.setState({ isClicked: false });
    }

    render() {
        const isClicked = this.state.isClicked;
        return (
            <div className="AboutUsStyle">
                {isClicked
                    ? 
                    <div class="text-center"> 
                        <AboutUsInfo></AboutUsInfo>
                        <div className="infoButtonStyle">
                            <Button variant="danger" class="mx-auto" onClick={this.handleClickCloseClick} >
                                קרא פחות  
                            </Button>
                        </div>
                    </div>
                    : 
                    <div class="text-center"> 
                        <div className="infoButtonStyle">
                            <Button variant="success" onClick={this.handleClickOpenClick} >
                                מזה Study Buddy?
                            </Button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}





export default AboutUs;