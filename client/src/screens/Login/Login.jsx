import React from 'react';
import { NavLink } from "react-router-dom";
import Layout from '../../components/shared/Layout/Layout';
import './Login.css';

const Login = () => {

  return (
    <Layout>
      <div id="login-main-container">
        <div id="login-header-container">
          <NavLink id="arrow-link" to="/">
              <img id="arrow" src="/assets/arrow-icon.png" alt="backpoiting arrow" />
          </NavLink>
          <h1 id="login-header">Welcome!</h1>
        </div>
        <div id="credentials-box">
          <div id="login-name-box">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="login-email"
              placeholder="Enter your Email"
              required
              autoFocus
            />
          </div>
          <div id="login-password-box">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              required
              autoFocus
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;