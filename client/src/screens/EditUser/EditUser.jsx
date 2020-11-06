import React, { useState, useEffect } from 'react';
import { useParams, Redirect, NavLink } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import { getUser, updateUser } from '../../services/users';
import './EditUser.css';

const UserEdit = (props) => {

  const [user, setUser] = useState({
    fullname: '',
    email: '',
    imgURL: '',
    state: '',
    district: '',
    gradeLevel: '',
    subjects: [],
  });

  const [isUpdated, setUpdated] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(id);
      setUser(user);
    }
    fetchUser();
  }, [id]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateUser(id, user);
    setUpdated(updated);
  }

  if (isUpdated) {
    return <Redirect to={`/users/${props.match.params.id}`} />;
  }

  if (isDeleted) {
    return <Redirect to={`/`} />; // I'll need the correct filepath once created
  }

  return (
    <Layout>
      <div className="edit-header">
        <NavLink id="arrow-link" to="/users/:id">
          <img id="arrow" src="/assets/arrow-icon.png" alt="backpoiting arrow" />
        </NavLink>
        <h1 id="edit-user">Edit Account Information</h1>
      </div>
      <div className="user-edit">
        <form className="user-edit-form" onSubmit={handleSubmit} setDelete={setDeleted}>
          <div id="personal-info-box">
            <div className="name-box">
              <input
                className="input-name"
                type="text"
                value={user.fullname}
                name='fullname'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="name">Full Name </label>
            </div>
            <div className="email-box">
              <input
                className="input-email"
                type="text"
                value={user.email}
                name='email'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="email">Email </label>
            </div>
            <div className="state-box">
              <input
                className="input-state"
                type="text"
                value={user.state}
                name='state'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="state">State </label>
            </div>
            <div className="district-box">
              <input
                className="input-district"
                type="text"
                value={user.district}
                name='district'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="district">District </label>
              </div>
              <div className="grade-box">
              <input
                className="input-grade-level"
                type="text"
                value={user.gradeLevel}
                name='gradeLevel'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="gradeLevel">Grade Level</label>
            </div>
          </div>
          <div id="checkboxes-box">
            <div className="subject-box">
                <input
                  type="checkbox"
                  id="english"
                  value={user.subjects}
                  name='subject'
                  autoFocus
                  onChange={handleChange}
                />
            <label htmlFor="english">English </label>
            <input
                type="checkbox"
                id="reading"
                value={user.subjects}
                name='reading'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="reading">Reading </label>
            <input
                type="checkbox"
                id="writing"
                value={user.subjects}
                name='writing'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="writing">Writing </label>
            <input
                type="checkbox"
                id="music"
                value={user.subjects}
                name='music'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="music">Music </label>
            <input
                type="checkbox"
                id="foreign-language"
                value={user.subjects}
                name='foreign-language'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="foreign-language">Foreign Language </label>
            <input
                type="checkbox"
                id="science"
                value={user.subjects}
                name='science'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="science">Science </label>
            <input
                type="checkbox"
                id="math"
                value={user.subjects}
                name='math'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="math">Math </label>
            <input
                type="checkbox"
                id="social-studies"
                value={user.subjects}
                name='social-studies'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="social-studies">Social Studies </label>
            <input
                type="checkbox"
                id="arts"
                value={user.subjects}
                name='arts'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="arts">Arts </label>
            <input
                type="checkbox"
                id="physical-education"
                value={user.subjects}
                name='physical-education'
                autoFocus
                onChange={handleChange}
              />
            <label htmlFor="physical-education">Physical Education </label>
            <input
                type="text"
                id="other"
                value={user.subjects}
                name='other'
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="other">Other </label>
            </div>
          </div>
          <button type='submit' className="save-button">Save</button>
        </form>
      </div>
    </Layout>
  );
}
export default UserEdit;