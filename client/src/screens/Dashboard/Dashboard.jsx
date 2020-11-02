import React from 'react'
import './Dashboard.css'
import DisplayLesson from '../../components/DisplayLesson/DisplayLesson'
import Layout from '../../components/shared/Layout/Layout'
import CreateLesson from '../CreateLesson/CreateLesson'

const Dashboard = (props) => {

  return (
    <Layout>
      <div className="dashboard-container">
        <h1>My Dashboard</h1>
        <div className="my-lessons">
          <h3>My Lesson Plans</h3>
          <div className="my-lesson-icons">
            <DisplayLesson />
            <button><a href="./add-lesson">Create Lesson</a></button>
          </div>
        </div>
        <div className="saved-lesson-plans">
          <h3>Saved Lesson Plans</h3>
          <DisplayLesson />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard;