import React, { useState, useEffect } from 'react'
import './EditLesson.css'
import { useParams, Redirect } from 'react-router-dom'
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
    const updated = await updateLesson(id, post)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/lessons/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <div className="lesson-edit">
        {/* <div className="image-container">
          <img className="edit-post-image" src={post.imgURL} alt={post.title} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              type="text"
              placeholder='Image Link'
              value={post.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div> */}
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            type="text"
            placeholder='Title'
            value={lesson.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            type="textarea"
            rows={10}
            cols={78}
            placeholder='Desciption'
            value={lesson.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className="save-button">Save</button>
        </form>
      </div>
    </Layout>
  )
}

export default LessonEdit