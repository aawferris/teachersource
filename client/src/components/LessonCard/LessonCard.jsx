import React from "react";
import "./LessonCard.css";
import { Link, NavLink } from "react-router-dom";
// import img from "./file-icon.png"

const LessonCard = (props) => {
  return (
    <div className="lesson-card">
      <Link className="card" to={`/lessons/${props._id}`}>
        <div>
          <img src="/assets/file-icon.png" alt="icon of a a paper file" />
          <div className="button-container">
             <NavLink className="edit-link" to={`/lessons/${props._id}/edit`}><button className="edit-button">Edit</button></NavLink>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LessonCard;