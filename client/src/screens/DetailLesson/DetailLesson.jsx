import React, { useState, useEffect } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getLesson } from '../../services/lessons';
import './DetailLesson.css';

function LessonDetails() {

  const [lesson, setLesson] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchLesson = async () => {
      const lesson = await getLesson(id);
      setLesson(lesson);
      setLoaded(true);
    }
    fetchLesson();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="lesson-detail">
        <div id="details-header">
          <NavLink id="arrow-link" to="/dashboard">
            <img id="arrow" src="/assets/arrow-go-back.png" alt="backpointing arrow that says go back" />
          </NavLink>
        </div>
        <div className="info-box">
          <div className='details-box'>
            <div id='title'>[{lesson.title}]</div>
            <div id='subject'><span>Subject: </span>[{lesson.subject}]</div>
            <div id='grade'><span>Grade Level: </span>[{lesson.gradeLevel}]</div>
            <div id="description"><span>Description: </span>{lesson.description}</div>
            <div id="tags"><span>Tags: </span>{lesson.subject}</div>
          </div>
          <div className="button-container">
            <button className="edit-button"><Link className="edit-link" to={`/lessons/${lesson._id}/edit`}>Edit</Link></button>
            <button className="delete-button"><Link className="delete-link" to={`/lessons/${lesson._id}/delete`}>Delete</Link></button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LessonDetails;