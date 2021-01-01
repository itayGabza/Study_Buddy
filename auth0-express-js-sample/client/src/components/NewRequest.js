import React, { TextInput } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./NewRequest.css";

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            בקשת למידה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div class="newRequestForm">
              <Form.Group>
                <Form.Control
                  className="Headline"
                  type="text"
                  placeholder="כותרת"
                />
                <br />
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="תיאור הבקשה"
                  className="Description"
                />
                <br />
                <br />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="buttonD" onClick={this.props.onHide}>
            סגור
          </Button>
          <Button className="buttonD" onClick={this.props.onHide}>
            שגר בקשה
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class NewRequest extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
          class="ButtonW"
        >
          פרסם פוסט
        </Button>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NewRequest />, rootElement);

export default NewRequest;