import React, { useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Redirect, NavLink } from 'react-router-dom';
import { createUser } from '../../services/users';
import './CreateUser.css';

const CreateUser = () => {

  const [user, setUser] = useState({ //[userForm, setUserForm]
    fullname: '',
    email: '',
    imgURL: '',
    state: '',
    district: '',
    gradeLevel: '',
    subjects: []
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userCreated = await createUser(user);
    setCreated({ userCreated })
  }

  if (isCreated) {
    return <Redirect to={`/dashboard`} />
  }
  return (
    <Layout>
      <div id="create-user-container">
        <div id="create-header">
          <NavLink id="arrow-link" to="/">
            <img id="create-arrow" src="/assets/arrow-icon.png" alt="backpointing arrow" />
          </NavLink>
          <h1 id="create-user">Create Account</h1>
        </div>
        <div id="user-create">
          <form className="user-create-form" onSubmit={handleSubmit}>
            <div id="create-personal-info-box">
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
                <label htmlFor="fullname">Full Name</label>
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
                <label htmlFor="email">School E-mail Adress</label>
              </div>
            </div>
            <div id="state-district-grade-box">
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
                <label htmlFor="state">State</label>
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
                <label htmlFor="district">District</label>
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
              <div id="checkbox-first-row">
                <div id="english-box">
                  <label htmlFor="english">English </label>
                  <input
                    type="checkbox"
                    id="english"
                    value={user.subjects}
                    name='subject'
                    autoFocus
                    onChange={handleChange}
                  />
                </div>
                <div id="reading-box">
                  <label htmlFor="reading">Reading </label>
                  <input
                      type="checkbox"
                      id="reading"
                      value={user.subjects}
                      name='reading'
                      autoFocus
                      onChange={handleChange}
                    />
                </div>
                <div id="writing-box">
                  <label htmlFor="writing">Writing </label>
                  <input
                      type="checkbox"
                      id="writing"
                      value={user.subjects}
                      name='writing'
                      autoFocus
                      onChange={handleChange}
                    />
                </div>
                <div id="music-box">
                  <label htmlFor="music">Music </label>
                  <input
                      type="checkbox"
                      id="music"
                      value={user.subjects}
                      name='music'
                      autoFocus
                      onChange={handleChange}
                    />
                </div>
                <div id="language-box">
                  <label htmlFor="foreign-language">Foreign Language </label>
                  <input
                      type="checkbox"
                      id="foreign-language"
                      value={user.subjects}
                      name='foreign-language'
                      autoFocus
                      onChange={handleChange}
                    />
                </div>
              </div>
              <div id="checkbox-second-row">
                <div id="science-box">
                  <label htmlFor="science">Science </label>
                  <input
                      type="checkbox"
                      id="science"
                      value={user.subjects}
                      name='science'
                      autoFocus
                      onChange={handleChange}
                    />
                </div>
                <div id="math-box">
                  <label htmlFor="math">Math </label>
                  <input
                    type="checkbox"
                    id="math"
                    value={user.subjects}
                    name='math'
                    autoFocus
                    onChange={handleChange}
                  />
                </div>
                <div id="social-box">
                  <label htmlFor="social-studies">Social Studies </label>
                  <input
                    type="checkbox"
                    id="social-studies"
                    value={user.subjects}
                    name='social-studies'
                    autoFocus
                    onChange={handleChange}
                  />
                </div>
                <div id="arts-box">
                  <label htmlFor="arts">Arts </label>
                  <input
                    type="checkbox"
                    id="arts"
                    value={user.subjects}
                    name='arts'
                    autoFocus
                    onChange={handleChange}
                  />
                </div>
                <div id="pe-box">
                  <label htmlFor="physical-education">Physical Education </label>
                  <input
                    type="checkbox"
                    id="physical-education"
                    value={user.subjects}
                    name='physical-education'
                    autoFocus
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div id="other-box">
                <label htmlFor="other">Other </label>
                <input
                  type="text"
                  id="other"
                  value={user.subjects} // this will have to change
                  name='other'
                  autoFocus
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type='submit' className="save-button" id="create-save-button">Save</button>
          </form>
        </div>  
      </div>
    </Layout>
  )
};

export default CreateUser;