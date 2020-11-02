import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import {getLesson, deleteLesson} from '../../services/lessons'
import './DetailLesson.css'

function PostDetails(props) {   

  const [lesson, setLesson] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    const fetchLesson = async () => {
      const lesson = await getLesson(id)
      setLesson(lesson)
      setLoaded(true)
    }
    fetchLesson()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="lesson-detail">
        <div id="details-header">
        <NavLink id="arrow-link" to="/dashboard"> 
          <img id="arrow" src="/assets/arrow-icon.png" alt="backpoiting arrow"/>
        </NavLink>
        <h1 id="details-h1">Lesson Plan Details</h1>
        </div>
        <div className="info-box">
          <div className='details-box'>
            <div id='title'><span>Lesson Title: </span>{lesson.title}</div>
            <div id='grade'><span>Grade Level: </span>{lesson.gradeLevel}</div>
            <div id='subject'><span>Subject: </span>{lesson.subject}</div>
            <div id="description"><span>Description: </span>{lesson.description}</div>
          </div>
        <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/lessons/${lesson._id}/edit`}>Edit</Link></button>
            <button className="delete-button" onClick={() => deleteLesson(lesson._id)}>Delete</button>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default PostDetails;