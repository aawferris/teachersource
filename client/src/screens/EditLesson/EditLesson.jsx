import React, { useState, useEffect } from 'react'
import './EditLesson.css'
import { useParams, Redirect, NavLink } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getLesson, updateLesson } from '../../services/lessons'

const LessonEdit = (props) => {

  const [lesson, setLesson] = useState({
    title: '',
    gradeLevel: '',
    subject: '',
    description: ''
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchLesson = async () => {
      const lesson = await getLesson(id)
      setLesson(lesson)
    }
    fetchLesson()
  }, [id])


  const handleChange = (event) => {
    const { name, value } = event.target
    setLesson({
      ...lesson,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let { id } = props.match.params
    const updated = await updateLesson(id, lesson)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/lessons/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <div className="edit-header">
        <NavLink id="arrow-link" to="/dashboard"> 
          <img id="arrow" src="/assets/arrow-icon.png" alt="backpoiting arrow"/>
        </NavLink>
        <h1 id="edit-lesson-plan">Edit Lesson Plan</h1>
      </div>
      <div className="lesson-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="title-gl-subj-box">
            <div className="title-box">
              <input
                className="input-title"
                type="text"
                // placeholder='Title'
                value={lesson.title}
                name='title'
                required
                autoFocus
                onChange={handleChange}
              />
              <label for="title">Title</label>
            </div>
            <div className="grade-box">
              <input
                className="input-grade-level"
                type="text"
                // placeholder='Grade Level'
                value={lesson.gradeLevel}
                name='gradeLevel'
                required
                autoFocus
                onChange={handleChange}
              />
              <label for="gradeLevel">Grade Level</label>
            </div>
            <div className="subject-box">
                <input
                  className="input-subject"
                  type="text"
                  // placeholder='Subject'
                  value={lesson.subject}
                  name='subject'
                  required
                  autoFocus
                  onChange={handleChange}
                  />
                <label for="subject">Subject</label>
              </div>
            </div> 
          <div className="description-box">
            <textarea
              className="textarea-description"
              type="textarea"
              rows={10}
              cols={78}
              // placeholder='Desciption'
              value={lesson.description}
              name='description'
              required
              onChange={handleChange}
            />
            <label for="description">Description</label>
          </div>
          <div id="tag-box">
            <input
              className="input-tags"
              type="tag"
              value={lesson.subject}
              name='tag'
              autoFocus/>
            <label for="tags">Tags</label>
          </div>
          <button type='submit' className="save-button">Save</button>
        </form>
      </div>
    </Layout>
  )
}
export default LessonEdit