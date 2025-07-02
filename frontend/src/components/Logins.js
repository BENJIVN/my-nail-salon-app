//all necessary elements for user authentication
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
};

return (
    <Container>
        <Row className='justify-content-md-center mt-6'>
            <Col xs={12} md={6}>
                <h2 className="text-center mb-4">Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.label>Email address</Form.label>
                        <Form.control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.targert.value)}>
                        </Form.control>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Container>
)