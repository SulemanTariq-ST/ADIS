import React, { Component } from "react";
import logo from "../../assets/logo/webscript.png";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import FormExample from "./validation.js";
// import { Linking, Text, StyleSheet } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import ReactBootstrap, { InputGroup, Navbar, Button, Nav, NavDropdown, Form, Container, Row, Col } from 'react-bootstrap'
// import './styl.css';
import '../../App.css';
import homePage from '../Main/home.js';
import { useState } from "react";
import Axios from 'axios';
import HomePage from '../../pages/homePage.js';
import UserPage from '../../pages/UserPages.js';



// const validation = () => {
// return (
const FormLogin = () => {

    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');


    // const LoginSubmittion = () => {
    // //   var  EmailID = userEmail;
    // //   var  Password = password;
    //   if (userEmail === "suleman@gmail.com" || password === "54321") {
    //     <Link to="/dashboard" ></Link> 
    //     // <HomePage />

    //   } else {
    //     // <UserPage />

    //     <Link to="/user" ></Link>          
    //   }
    // };

    const LoginSubmittion = () => {
        Axios.post("http://localhost:5000/login/api", {
            EmailID: userEmail,
            Password: password

        }).then(() => {
            alert("successfull Login");
        });

    };

    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };
    // const styles = StyleSheet.create({
    //     bold: {fontWeight: 'bold'},
    //     italic: {fontStyle: 'italic'},
    //     underline: {textDecorationLine: 'underline'}
    // })

    return (
        <Row className="outer-container">
            <Container className="login-container">
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
                            <Col xs={10}>
                                <Form>
                                    <br />
                                    <br />
                                    <br />
                                    <h1 className="offset-sm-5">Sign In</h1>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required type="email" placeholder="Enter email"
                                            onChange={(e) => {
                                                setUserEmail(e.target.value)
                                            }}
                                        />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a E-mail.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control required type="password" placeholder="Password"
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a E-mail.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <a href="/register" className="register-link">Register Now</a>
                                        {/* <Link to="/register" className="register-link">Register Now</Link> */}
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={LoginSubmittion} >
                                        <a href="/user" >Login</a> 
                                        {/* Login */}
                                        {/* <Link to="/dashboard" >Login</Link> */}
                                    </Button>
                                </Form>
                            </Col>
                            <Col></Col>

                        </Row>
                        <br />
                        <br />
                        <br />
                    </Col>
                </Row>

            </Container>
        </Row>
    );
}

export default FormLogin;






