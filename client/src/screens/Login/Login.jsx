import React from 'react';
import { NavLink } from "react-router-dom";
import { Form, Button, FormGroup } from 'react-bootstrap'
import Layout from '../../components/shared/Layout/Layout';
import './Login.css';

const Login = () => {

  return (
    <Layout>
      <div id="login-main-container">
        <div id="login-header-container">
          <NavLink id="arrow-link" to="/">
              <img id="arrow" src="/assets/arrow-go-back.png" alt="backpoiting arrow" />
          </NavLink>
          <h1 id="login-header">Welcome!</h1>
        </div>
        <div id="credentials-box">
          <Form>
            <Form.Group id="email-box" controlId="formBasicEmail">
              <Form.Label id="email-label">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button id="login-btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;