import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            const userLogin = await axios.post("http://localhost:3001/v1/user/login", user);
            console.log(userLogin.data.user);
            const token = userLogin.data.token;
            const role = userLogin.data.user.role;
            const users = userLogin.data.user;

            localStorage.setItem("token", token)
            localStorage.setItem("role", role)
            localStorage.setItem("user", JSON.stringify(users))

            if (role === "admin") {
                navigate("/product");
            } else if (role === "user") {
                navigate("/home");
            } else {
                navigate("/register")
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    const userHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <Container className="mt-5 col-4">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={userHandle}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={userHandle}
                        placeholder="Password"
                    />
                </Form.Group>

                <Button variant="primary" className='mt-5' type="button" onClick={login}>
                    Login
                </Button>
            </Form>
            <Button variant="primary" className="mt-5" as={Link} to="/register">
                SingUp
            </Button>

        </Container>
    );
};

export default Login;
