import React, { useState, useEffect } from 'react';
import { useParams, Redirect, Link, NavLink } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getLesson, deleteLesson } from '../../services/lessons';
import './DeleteLesson.css';

const LessonDelete = (props) => {

  const [lesson, setLesson] = useState({
    title: '',
    gradeLevel: '',
    subject: '',
    description: ''
  });

  const [isDeleted, setDeleted] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchLesson = async () => {
      const lesson = await getLesson(id);
      setLesson(lesson);
    }
    fetchLesson();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const deleted = await deleteLesson(id, lesson);
    setDeleted(deleted);
  }

  if (isDeleted) {
    return <Redirect to={`/dashboard`} />;
  }

  return (
    <Layout>
      <div id="delete-container">
        <div id="details-header">
          <NavLink id="arrow-link" to="/dashboard"> 
            <img id="arrow" src="/assets/arrow-icon.png" alt="backpoiting arrow"/>
          </NavLink>
          <h1 id="details-h1">Are you sure you want to delete?</h1>
          </div>
        <div className='details-box'>
            <div id='title'><span>Lesson Title: </span>{lesson.title}</div>
            <div id='grade'><span>Grade Level: </span>{lesson.gradeLevel}</div>
            <div id='subject'><span>Subject: </span>{lesson.subject}</div>
            <div id="description"><span>Description: </span>{lesson.description}</div>
        </div>
        <div id="delete-form-box">
          <form id="delete-button-box" onSubmit={handleSubmit}>
            <button ><Link id="ed-btn" to={`/lessons/${lesson._id}/edit`}>No, Don't Delete</Link></button>
            <button id="del-btn" onClick={() => deleteLesson(lesson._id)}><Link to={`/dashboard`}>Yes, Delete</Link></button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default LessonDelete