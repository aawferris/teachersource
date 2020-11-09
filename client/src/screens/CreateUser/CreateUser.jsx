import React, { useState } from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { Redirect, NavLink } from 'react-router-dom';
import { createUser } from '../../services/users';
import './CreateUser.css';

const CreateLesson = () => {

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
    const userCreate = await createUser(user); // pass in userForm
    // props.setUser(user)
    setCreated({userCreate})
  }

  if (isCreated) { //
    return <Redirect to={`/add-user`} />
  }
  return (
    <Layout>
      <div className="edit-header">
        <NavLink id="arrow-link" to="/users">
          <img id="arrow" src="/assets/arrow-icon.png" alt="backpoiting arrow" />
        </NavLink>
        <h1 id="edit-user-account">Create Account</h1>
      </div>
      <div className="user-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="title-gl-subj-box">
            <div className="title-box">
              <input
                className="input-fullname"
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
                name='subject'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="imgURL-box">
              <input
                className="input-imgURL"
                type="text"
                value={user.imgURL}
                name='imgURL'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="imgURL">Image</label>
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
              <label htmlFor="">Grade Level</label>
            </div>
            <div className="subjects-box">
              <input
                className="input-subjects"
                type="text"
                value={user.subjects}
                name='subjects'
                required
                autoFocus
                onChange={handleChange}
              />
              <label htmlFor="subjects">Subjects</label>
            </div>
          </div>
          <div id="tag-box">
            <input
              className="input-tags"
              type="tag"
              value={user.subjects}
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