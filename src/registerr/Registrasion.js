// RegistrationForm.js
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./RegistrationForm.css"; // Tambahkan CSS kustom untuk styling

function RegistrationForm() {
  return (
    <Container className="registration-container">
      <Row className="justify-content-center">
        <Col md={6} className="form-section">
          <h2 className="text-center">Registration Form</h2>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Second Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your second name" />
            </Form.Group>

            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 w-100">
              Register
            </Button>
          </Form>
        </Col>
        <Col md={6} className="rocket-section">
          <div className="rocket-image">
            {/* Gambar Roket */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RegistrationForm;
