import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col xs="auto" className="text-center">
          <h1>Welcome to the Tiffani Nails Database!</h1>
          <p>This is the homepage cuz</p>
        </Col> 
        </Row>
    </Container>
  );
}

export default Home;
