import { Divider } from "@material-ui/core";
import React from "react";
import { useForm } from 'react-hook-form';




import "./SignUp.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
      };

      const validatePhoneNum = (value) => {
          if(value.length != 10){
            return 'Phone Number must be 10 digits';
          }
          return true;
            
        
      }
    return (
        <Form className="entireForm" onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <h1 className="fieldsHeadsSeprater">פרטים אישיים</h1>
                </Col>
            </Row>
            <Row>
                
                <Col>
                    <h3 className="fieldsHeads fieldsHeadsDots">שם משפחה</h3>
                    <Form.Control
                        type="text" 
                        name="lastName" 
                        style={{ textAlign: "right" }} 
                        placeholder="שם משפחה"
                        ref={register({
                            required: 'חובה למלא שם משפחה.'
                          })} 
                    />
                    {errors.lastName && <p className="errorMsg">{errors.lastName.message}</p>}
                </Col>
                <Col>
                    <h3 className="fieldsHeads fieldsHeadsDots">שם פרטי</h3>
                    <Form.Control
                        type="text" 
                        name="firstName" 
                        style={{ textAlign: "right" }} 
                        placeholder="שם פרטי"
                        ref={register({
                            required: 'חובה למלא שם פרטי.'
                          })} 
                    />
                    {errors.firstName && <p className="errorMsg">{errors.firstName.message}</p>}
                </Col>
            </Row>
            <br />

            <Row>
            <Col>
                    <h3 className="fieldsHeads">גיל</h3>
                    <Form.Control
                        type="number" 
                        name="age" 
                        placeholder="גיל"
                        ref={register}
                    />
                </Col>
                <Col>
                    <span className="dropDowns">
                        <h3 className="fieldsHeads">מין</h3>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control 
                            type="text" 
                            name="gender" 
                            as="select" 
                            ref={register}>
                            <option>לא מוגדר</option>
                            <option>נקבה</option>
                            <option>זכר</option>
                            </Form.Control>
                        </Form.Group>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="fieldsHeads">ספר לנו קצת על עצמך</h3>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control 
                        type="text" 
                        name="aboutSelf" 
                        as="textarea" rows={3} 
                        style={{ textAlign: "right" }}
                        placeholder="על עצמי"
                        ref={register}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col >
                    <h3 className="fieldsHeads">העלאת תמונה</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                   {/*  {<FileUpload />} */}
                   <Form.Group >
                        <Form.File 
                        id="exampleFormControlFile1"
                        type="file"
                        name="image" 
                        accept="image/png, image/jpeg"
                        ref={register}
                        />
                    </Form.Group>
                   
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="fieldsHeadsSeprater">דרכי התקשרות</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="fieldsHeads">פייסבוק</h3>
                    <Form.Control 
                    type="text"
                    name="facebook"
                    style={{ textAlign: "right" }} 
                    placeholder="פייסבוק" 
                    ref={register}
                    />
                </Col>

                <Col>
                    <h3 className="fieldsHeads fieldsHeadsDots">טלפון</h3>
                    <Form.Control 
                    type="number"
                    name="phoneNumber"
                    style={{ textAlign: "right" }} 
                    placeholder="טלפון" 
                    ref={register({
                        required: 'Phone Number is required.',
                        pattern: {
                            value: /[0-9]{10}/,
                            message: 'Phone number must be 10 digits'
                        } 
                    })}
                    />
                    {errors.phoneNumber && <p className="errorMsg">{errors.phoneNumber.message}</p>}
                </Col>
                <Col>
                    <h3 className="fieldsHeads fieldsHeadsDots">אימייל</h3>
                    <Form.Control
                          type="text"
                          name="email"
                          ref={register({
                            required: 'Email is required.',
                            pattern: {
                              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                              message: 'Email is not valid.'
                            }
                          })}
                        />
                    {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <h1 className="fieldsHeadsSeprater">פרטיות</h1>
                    <h6 className="fieldsHeads">.על מנת להבטיח את פרטיותך, באפשרותך לבחור אילו פרטים חשופים לשאר המשתמשים</h6>
                </Col>
            </Row>
            <Row >
                <Col>
                <Form.Group className="checkboxes" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      name= "showName"
                      label="ש שם " 
                      ref={register}
                      />
                      <Form.Check
                      type="checkbox"
                      name= "showPicture"
                      label="ש תמונה" 
                      ref={register}
                      />
                      <Form.Check
                      type="checkbox"
                      name= "showContactInfo"
                      label="ש דרכי ההתקשרות שלי " 
                      ref={register}
                      />
                      <Form.Check
                      type="checkbox"
                      name= "showParagraph"
                      label="ש פסקת הרקע שלי " 
                      ref={register}
                      />
                    
                </Form.Group>             
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="fieldsHeadsSeprater">מצב התאמה</h1>
                    <h6 className="fieldsHeads">במצב בו יש התאמה בין שני משתמשים, באפשרותך לבחור אילו פרטי התקשרות יחשפו למשתמש השני.</h6>
                    <h6 className="fieldsHeads">במידה ולא תבחר אף אפשרות, במצב של התאמה, תשלח לך הודעה פרטית באתר.</h6>
                </Col>
            </Row>
            <Row >
                <Col>
                <Form.Group className="checkboxes" controlId="formBasicCheckbox">
                <Form.Check
                      type="checkbox"
                      name= "showParagraph"
                      label="ש טלפון " 
                      ref={register}
                      />
                      <Form.Check
                      type="checkbox"
                      name= "showParagraph"
                      label="ש אימייל " 
                      ref={register}
                      />
                      <Form.Check
                      type="checkbox"
                      name= "showParagraph"
                      label="ש פייסבוק " 
                      ref={register}
                      />
                </Form.Group> 
                </Col>
            </Row>
            <Row>
                <Col className="checkboxes">
                    <Button type="submit" variant="primary">Submit</Button>
                </Col>
            </Row>
        </Form>
    )
}


export default SignUp;