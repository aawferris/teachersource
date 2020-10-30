import React from 'react'
import './Home.css'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="greeting-and-action-buttons">
          <h1>Welcome!</h1>
          <button>Get Started!</button>
          <button>Log In</button>
        </div>
        
      </div>
    </Layout>
  )
}

export default Home