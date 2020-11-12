import React, { useState, useEffect } from 'react';
import { useParams, Redirect, NavLink, Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap'
import Layout from '../../components/shared/Layout/Layout';
import { getLesson, deleteLesson } from '../../services/lessons';
import './DeleteLesson.css';

const DeleteLesson = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <img id="delete-lesson-arrow" src="/assets/arrow-go-back.png" alt="backpoiting arrow" />
          </NavLink>
          <h1 id="delete-h1">Are you sure you want to delete?</h1>
        </div>
        <div className='details-box'>
          <div id='title'><span>Lesson Title: </span>{lesson.title}</div>
          <div id='grade'><span>Grade Level: </span>{lesson.gradeLevel}</div>
          <div id='subject'><span>Subject: </span>{lesson.subject}</div>
          <div id="description"><span>Description: </span>{lesson.description}</div>
        </div>
        <div id="delete-form-box">
          <form id="delete-button-box" onSubmit={handleSubmit}>
            <button id="ed-btn"><Link to={`/lessons/${lesson._id}/edit`}>No, Don't Delete</Link></button>
              <Button id="bootstrap-delete-button" onClick={handleShow}>
            Yes, Delete
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title variant="danger">¡Alert!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this lesson? You cannot undo this action.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Cancel
                </Button>
                <Link to='/dashboard'><Button variant="danger" onClick={() => deleteLesson(lesson._id)} >I'm sure</Button></Link>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default DeleteLesson