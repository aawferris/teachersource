import React, { useState } from 'react'
import './CreateLesson.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createLesson } from '../../services/lessons'

const CreateLesson = (props) => {

  const [lesson, setLesson] = useState({
    title: '',
    subject: '',
    gradeLevel: '',
    description: ''
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setLesson({
      ...lesson,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createLesson(lesson)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/lessons`} />
  }
  return (
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder='Title'
          value={lesson.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-subject"
          placeholder='Subject'
          value={lesson.subject}
          name='subject'
          required
          onChange={handleChange}
        />
        <input
          className="input-grade-level"
          placeholder='Grade Level'
          value={lesson.gradeLevel}
          name='gradeLevel'
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-content"
          rows={10}
          placeholder='Lesson Description'
          value={lesson.description}
          name='description'
          required
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
  )
}

export default CreateLesson