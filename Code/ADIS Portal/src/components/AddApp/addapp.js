import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import ReactBootstrap, { InputGroup, Button, Form, Container, Row, Col } from 'react-bootstrap'
// import './styl.css';
import '../../App.css';
import { useState } from "react";
import Axios from 'axios';

const AddApps = () => {


    const [softwareName, setSoftwareName] = useState('');
    const [softwareTitle, setSoftwareTitle] = useState('');
    const [softwareKeyword, setSoftwareKeyword] = useState('');
    const [softwareImage, setSoftwareImage] = useState('');
    // const [CNICno, setCNIC] = useState('');
    // const [password, setPassword] = useState('');


    const SoftwareAdditionSubmittion = () => {
        Axios.post("http://localhost:5000/dataapi/insert", {
            SoftwareName: softwareName,
            SoftwareTitle: softwareTitle,
            SoftwareKeyword: softwareKeyword,
            SoftwareImage: softwareImage,
            // CNIC: CNICno,
            // Password: password
        }).then(() => {
            alert("successfull Inserted");
        });

    };


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
        <Container className="addapp-container">
            <br />
            <Row>
                <br />
                <Col></Col>
                <Col xs={10}>
                    <h1>Add Data</h1>
                    <br />

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name"
                                    defaultValue=""
                                    onChange={(e) => {
                                        setSoftwareName(e.target.value)
                                    }}
                                />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Set Title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Set Title"
                                    defaultValue=""
                                    onChange={(e) => {
                                        setSoftwareTitle(e.target.value)
                                    }}
                                />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a Title.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Upload Icon</Form.Label>
                                <InputGroup hasValidation>
                                    {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                    <Form.Control
                                        type="file"
                                        placeholder="Upload Icon"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                        onChange={(e) => {
                                            setSoftwareImage(e.target.value)
                                        }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a Icon.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <br />

                        <Row className="mb-3">
                            <Form.Group as={Col} md="15" controlId="validationCustom03">
                                <Form.Label>Keyword</Form.Label>
                                <Form.Control type="text" placeholder="Keyword" required
                                    onChange={(e) => {
                                        setSoftwareKeyword(e.target.value)
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Keyword.
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group> */}
                            {/* <Form.Group as={Col} md="5" controlId="validationCustom05">
                                <Form.Label>Upload File</Form.Label>
                                <Form.Control type="file" placeholder="Zip" required />
                                <Form.Control.Feedback type="invalid">
                                    Please Upload a File.
                                </Form.Control.Feedback>
                            </Form.Group> */}
                        </Row>
                        <br />

                        {/* <Form.Group className="mb-3">
                            <Link to="/login" className="register-link">Already Registered</Link>
                        </Form.Group> */}
                        <Button type="submit" onClick={SoftwareAdditionSubmittion} >Save</Button>
                    </Form>
                </Col>
                <Col></Col>

            </Row>

        </Container>

    );
}

export default AddApps;