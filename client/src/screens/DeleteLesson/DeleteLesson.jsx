import React, { useState, useEffect } from 'react';
import { useParams, Redirect, NavLink, Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getLesson, updateLesson, deleteLesson } from '../../services/lessons';
import './DeleteLesson.css';

const LessonDelete = (props) => {

  const [isUpdated, setUpdated] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchLesson = async () => {
      const lesson = await getLesson(id);
      setLesson(lesson);
    }
    fetchLesson();
  }, [id]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setLesson({
      ...lesson,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateLesson(id, lesson);
    setUpdated(updated);
  }

  if (isUpdated) {
    return <Redirect to={`/lessons/${props.match.params.id}`} />;
  }


  return (
    <Layout>
      <div id="delete-container">
        <h1 id="delete-title">Are you sure you want to delete?</h1>
        <button ><Link className="edit-link" to={`/lessons/${lesson._id}/edit`}>Yes, Delete</Link></button>
        <button className="delete-button" onClick={() => deleteLesson(lesson._id)}>No, Don't Delete</button>
      </div>
    </Layout>
  )

}