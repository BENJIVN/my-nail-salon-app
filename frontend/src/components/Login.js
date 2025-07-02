import React, {useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login attempet with:', {email, password});
        //Send a requst to the server here with tokens

    }
    return (
        <>  
            {/* Login Form */}
            <Container>
                <Row className='justify-content-md-center mt-5'>
                    <Col xs={12} md={6}>
                        <h2 className="text-center mb-4">Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Button variant ="primary" type="submit" className="btn btn-primary btn-sm w-100">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;
