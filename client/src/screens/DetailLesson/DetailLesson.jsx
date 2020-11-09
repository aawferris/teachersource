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
          <NavLink id="arrow-link" to="/dashboard">
            <img id="delete-arrow" src="/assets/arrow-go-back.png" alt="backpointing arrow that says go back" />
          </NavLink>
        <div id="detail-info-box">
          <div id='details-box'>
            <div id='title'>{lesson.title}</div>
            <div id='subject'>Subject: {lesson.subject}</div>
            <div id='grade'>Grade Level: {lesson.gradeLevel}</div>
            <div id="delete-desc-box">
              <div id="description">Description: </div>
              <div id="desc-info">{lesson.description}</div>
            </div>
            <div id="delete-tag-box">
              <div id="tags">Tags: </div>
              <div id="tag-info">{lesson.subject}</div>
            </div>
          </div>
          <div className="button-container">
            <Link className="edit-link" to={`/lessons/${lesson._id}/edit`}><button className="edit-button">Edit</button></Link>
            <Link className="delete-link" to={`/lessons/${lesson._id}/delete`}><button className="delete-button">Delete</button></Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LessonDetails;