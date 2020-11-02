import React from 'react'
import './Home.css'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="top-box">
          <img id="home-image" src="/assets/pexels-julia.png" alt="kid is watching julia on his computer" />
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
            <img src="/assets/training-card.png" alt="gray training card box"/>
            <img src="/assets/lesson-card.png" alt="gray lesson card box"/>
            <img src="/assets/resources-card.png" alt="gray resource card box"/>
            <img src="/assets/forums-card.png" alt="gray forum card box"/>
          </div>
          <div className="card-containers">
            <h2>Discover Training</h2>
            <h2>Discover Lesson Plans</h2>
            <h2>Discover Resources</h2>
            <h2>Discover Forums</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home