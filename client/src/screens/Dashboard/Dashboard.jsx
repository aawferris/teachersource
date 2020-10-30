import React from 'react'
import './Home.css'
import DisplayLesson from '../../components/DisplayLesson/DisplayLesson'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <DisplayLesson />
      </div>
    </Layout>
  )
}

export default Home