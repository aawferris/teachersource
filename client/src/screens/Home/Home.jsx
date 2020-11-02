import React from 'react'
import './Home.css'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="top-box">
          <img id="home-image" src="/assets/pexels-julia.png" alt="" />
          <div className="text-and-buttons">
            <h1 id="welcome">Welcome!</h1>
            <div id="button-box">
              <button id="left-button">Get Started!</button>
              <button id="right-button">Log In</button>
            </div>
          </div>
        </div>
        <div className="bottom-box">
          <div id="card-box">
            <img src="/assets/training-card.png" />
            <img src="/assets/lesson-card.png" />
            <img src="/assets/resources-card.png" />
            <img src="/assets/forums-card.png" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home