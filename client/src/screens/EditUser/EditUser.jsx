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
  return (
    <Layout>
      <div id="edit-user-container">
        <div className="edit-header">
          <NavLink id="arrow-link" to="/users/:id">
            <img id="arrow" src="/assets/arrow-icon.png" alt="backpoiting arrow" />
          </NavLink>
          <h1 id="edit-user">Edit Account Information</h1>
        </div>
        <div className="user-edit">
          <form className="user-edit-form" onSubmit={handleSubmit}>
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
              <div id="checkbox-first-row">
                <div id="english-box">
                  <label htmlFor="english">English </label>
                  <input
                    type="checkbox"
                    id="english"
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
                    class="checkbox"
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
            <button type='submit' className="save-button">Save</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default UserEdit;