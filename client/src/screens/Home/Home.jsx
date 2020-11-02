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
            <h1>Welcome!</h1>
            <button id="left-button">Get Started!</button>
            <button id="right-button">Log In</button>
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