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
        <div className="cardz-box">
          <button className="cardz"><h3 className="card-text">Discover Training</h3></button>
          <button className="cardz"><h3 className="card-text">Discover Lesson Plans</h3></button>
          <button className="cardz"><h3 className="card-text">Discover Resources</h3></button>
          <button className="cardz"><h3 className="card-text">Discover Forums</h3></button>
        </div>
      </div>
    </Layout>
  )
}

export default Home