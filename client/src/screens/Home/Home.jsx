import React from 'react';
import { NavLink } from 'react-router-dom'
import Carousel from "react-bootstrap/Carousel"
import Layout from '../../components/shared/Layout/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div></div>
        <div className="top-box">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/pexels-julia.png"
              alt="boy sitting at computer"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/pexels-august.png"
              alt="woman helping child"
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100"
              src="/assets/pexels-cameron.png"
              alt="taking notes in front of computer"
            />
            </Carousel.Item>
            <Carousel.Item>
          <img
              className="d-block w-100"
              src="/assets/pexels-rfstudio.png"
              alt="girl writing in notebook"
            />
          </Carousel.Item>
        </Carousel>
        <div className="text-and-buttons">
          <h1 id="welcome">Welcome!</h1>
          <div id="button-box">
            <NavLink id="started-link" to="/add-user">
              <button id="get-started">Get Started!</button>
            </NavLink>
            <NavLink id="login-link" to="/login">
              <button id="login-button">Log In</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="cardz-box">
        <button className="cardz"><h3 className="card-text">Discover Training</h3></button>
        <button className="cardz"><h3 className="card-text">Discover Lesson Plans</h3></button>
        <button className="cardz"><h3 className="card-text">Discover Resources</h3></button>
        <button className="cardz"><h3 className="card-text">Discover Forums</h3></button>
      </div>
    </div>
    </Layout>
  );
}

export default Home;