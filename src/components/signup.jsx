import React, { useRef } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export default function Signup() {
    const emailref = useRef();
    const passwordref = useRef();   
    const passwordconfirmref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordref.current.value !== passwordconfirmref.current.value) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Email:", emailref.current.value);
    };

    return (
        <>
            <Card style={{ maxWidth: "400px", margin: "50px auto", padding: "20px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" ref={emailref} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordref} placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPasswordConfirm" className="mb-3">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordconfirmref} placeholder="Confirm Password" />
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100">
                            Sign up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3">
                Already have an account? Login
            </div>
        </>
    );
}
