import React, { useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Redirect, NavLink } from 'react-router-dom';
import { createLesson } from '../../services/lessons';
import './CreateLesson.css';

const CreateLesson = () => {

  const [lesson, setLesson] = useState({
    title: '',
    subject: '',
    gradeLevel: '',
    description: ''
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLesson({
      ...lesson,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createLesson(lesson);
    setCreated({ created });
  }

  if (isCreated) {
    return <Redirect to={`/dashboard`} />
  }
  return (
    <Layout>
      <div className="create-lesson-header">
        <NavLink id="arrow-link" to="/dashboard">
          <img id="arrow" src="/assets/arrow-go-back.png" alt="backpoiting arrow" />
        </NavLink>
        <h1 id="edit-lesson-plan">Create Lesson Plan</h1>
      </div>
      <div className="lesson-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="title-gl-subj-box">
            <div className="title-box">
              <input
                className="input-title"
                type="text"
                value={lesson.title}
                name='title'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="grade-box">
              <input
                className="input-grade-level"
                type="text"
                value={lesson.gradeLevel}
                name='gradeLevel'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="gradeLevel">Grade Level</label>
            </div>
            <div className="subject-box">
              <input
                className="input-subject"
                type="text"
                value={lesson.subject}
                name='subject'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="description-box">
            <textarea
              className="textarea-description"
              type="textarea"
              rows={10}
              cols={78}
              value={lesson.description}
              name='description'
              required
              onChange={handleChange}
            />
            <label htmlFor="description">Description</label>
          </div>
          <div id="tag-box">
            <input
              className="input-tags"
              type="tag"
              value={lesson.subject}
              name='tag'
              autoFocus />
            <label htmlFor="tags">Tags</label>
          </div>
          <button type='submit' className="save-button">Save</button>
        </form>
      </div>
    </Layout>
  )
};

export default CreateLesson;