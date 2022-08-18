import React, { Component } from "react";
import { useAlert } from "react-alert";
import logo from "../../assets/logo/webscript.png";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ReactBootstrap, { InputGroup, Button, Form, Container, Row, Col } from 'react-bootstrap'
import './styl.css';
import '../../App.css';
import { useState } from "react";
import Axios from 'axios';

// const validation = () => {
// return (
const FormExample = () => {
    // const alert = useAlert();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [city, setCity] = useState('');
    const [CNICno, setCNIC] = useState('');
    const [password, setPassword] = useState('');


    const RegisterationSubmittion = () => {
        Axios.post("http://localhost:5000/api/insert", {
            FirstName: firstName,
            LastName: lastName,
            EmailID: userEmail,
            City: city,
            CNIC: CNICno,
            Password: password
        }).then(() => {
            alert("successfull Inserted");
        });

    };

    const [action, setAction] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <Row className="outer-container">

            <Container className="register-container">

                <Row className="loginRow">
                    <Col className="leftSideLogin">
                        <br />
                        <br />
                        <br />

                        <div className="logo">
                            <img className="logoClass" src={logo} alt="webscript" />
                        </div>
                    </Col>
                    <Col xs={8}>

                        <Row>
                            <br />
                            <Col></Col>
                            <Col xs={11}>
                                <br />
                                <br />
                                <br />

                                <h1>Register Now</h1>
                                <br />

                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="First name"
                                                defaultValue=""
                                                onChange={(e) => {
                                                    setFirstName(e.target.value)
                                                }}
                                            />
                                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a First Name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Last name"
                                                defaultValue=""
                                                onChange={(e) => {
                                                    setLastName(e.target.value)
                                                }}
                                            />
                                            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a Last Name.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                            <Form.Label>E-mail</Form.Label>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="E-mail"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                    onChange={(e) => {
                                                        setUserEmail(e.target.value)
                                                    }}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a E-mail.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <br />

                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="City" required
                                                onChange={(e) => {
                                                    setCity(e.target.value)
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid city.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustom04">
                                            <Form.Label>CNIC</Form.Label>
                                            <Form.Control type="text" placeholder="33100-6789786-1" required
                                                onChange={(e) => {
                                                    setCNIC(e.target.value)
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid CNIC.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="Password" placeholder="********" required
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid Password.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <br />

                                    <Form.Group className="mb-3">
                                        <Link to="/login" className="register-link">Already Registered</Link>
                                    </Form.Group>
                                    <Button type="submit" onClick={RegisterationSubmittion} >
                                        {/* Register */}
                                        <a href="/dashboard" >Register</a>

                                        {/* <Link to="/user" >Register</Link> */}
                                    </Button>
                                    {/* <div>{action}</div> */}
                                    {/* <script>
                            function myFunction() {
                                alert('Your are Register successfully.')
                            }
                        </script> */}

                                </Form>
                            </Col>
                            <Col></Col>

                        </Row>
                        <br />
                        <br />
                        <br />
                    </Col>
                </Row>
            </Container >
        </Row>

    );
}
export default FormExample;



