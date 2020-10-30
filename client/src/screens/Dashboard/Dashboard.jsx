import React from 'react'
import './Dashboard.css'
import DisplayLesson from '../../components/DisplayLesson/DisplayLesson'
import Layout from '../../components/shared/Layout/Layout'
import CreateLesson from '../CreateLesson/CreateLesson'

const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <DisplayLesson />
        <button><a href="./add-lesson">Create Lesson</a></button>
      </div>
    </Layout>
  )
}

export default Home