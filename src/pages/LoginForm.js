import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

function LoginForm() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.email && credentials.password) {
            console.log('Logged in:', credentials);
            navigate('/Homepage');
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #006A67, #000B58)'
        }}>
            <Container className="d-flex justify-content-center align-items-center">
                <Card className="p-4" style={{
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    backgroundColor: '#fff'
                }}>
                    <h2 className="text-center mb-4" style={{ color: '#000B58' }}>Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-4 w-100"
                            style={{
                                backgroundColor: '#006A67',
                                border: 'none',
                                padding: '10px 0',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#004AAD'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#006A67'}
                        >
                            Login
                        </Button>
                    </Form>
                    <div className="text-center mt-3">
                        <span>Don't have an account? </span>
                        <Link to="/Registrationform" style={{ color: '#006A67', fontWeight: 'bold' }}>Sign up</Link>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default LoginForm;

