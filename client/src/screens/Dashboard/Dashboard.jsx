import React from 'react';
import { NavLink } from "react-router-dom";
import DisplayLesson from '../../components/DisplayLesson/DisplayLesson';
import Layout from '../../components/shared/Layout/Layout';
import './Dashboard.css';

const Dashboard = () => {

  return (
    <Layout>
      <div className="dashboard-container">
        <h1 id="dashboard-header">My Dashboard</h1>
        <div className="my-lessons">
          <h3 className="lp-subtitle">My Lesson Plans</h3>
          <div className="my-lesson-icons">
            <DisplayLesson />
            <div className="create-new-box">
              <NavLink to="/add-lesson">
                <img id="lesson-button" src="/assets/add-lesson-plan.png" alt="plus sign in a box" />
              </NavLink>
              <button id="upload-new-btn">Upload New</button>
            </div>
          </div>
        </div>
        <div className="saved-lesson-plans">
          <h3 className="lp-subtitle">Saved Lesson Plans</h3>
          <div className="saved-lessons-box">
            <img id="lesson1" src="/assets/saved-lesson1.png" alt="Lesson 1" />
            <img id="lesson2" src="/assets/saved-lesson2.png" alt="Lesson 2" />
          </div>
          <div id="button-div-box">
            <button id="unsave-btn">Unsave</button>
            <button id="unsave-btn2">Unsave</button>
          </div>
        </div>
        <div className="training-box">
          <h3 className="lp-subtitle">Training and Courses</h3>
          <div id="training-img-box">
            <img id="training" src="/assets/training1.png" alt="Training" />
          </div>
          <div id="train-btn-box">
            <button id="resume-btn">Resume</button>
            <button id="remove-btn">Remove</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;