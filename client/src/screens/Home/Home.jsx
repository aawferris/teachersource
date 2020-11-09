import React from 'react';
import { NavLink } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div></div>
        <div className="top-box">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img id="home-image" src="/assets/pexels-julia.png" alt="kid is watching julia on his computer" />
            </div>
            <div className="carousel-item">
              <img id="home-image" src="/assets/training-card.png" alt="kid is watching julia on his computer" />
            </div>
            <div className="carousel-item">
              <img id="home-image" src="/assets/pexels-julia.png" alt="kid is watching julia on his computer" />
            </div>
            <div className="carousel-item">
              <img id="home-image" src="/assets/pexels-julia.png" alt="kid is watching julia on his computer" />
            </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="text-and-buttons">
            <h1 id="welcome">Welcome!</h1>
            <div id="button-box">
              <NavLink id="started-link" to="/add-user">
                <button id="get-started">Get Started!</button>
              </NavLink>
              <NavLink id="login-link" to="/users">
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