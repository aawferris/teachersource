import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
                {/* <img className="lesson-detail-image" src={post.imgURL} alt={post.name} /> */}
                    <div className="detail">
          {/* <div className="name">{post.name}</div> */}
                    <div className='title'>{lesson.title}</div>
                    <div className="description">{lesson.description}</div>
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