import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./LessonCard.css";

const LessonCard = (props) => {
  return (
    <div className="lesson-card">
      <Link className="card" to={`/lessons/${props._id}`}>
        <div>
          <img src="/assets/file-icon.png" alt="icon of a a paper file" />
          <div className="button-container">
            <NavLink className="edit-link" to={`/lessons/${props._id}/edit`}><button id="card-edit-button">Edit</button></NavLink>
            <NavLink className="delete-link" to={`/lessons/${props._id}/delete`}><button id="card-delete-button">Delete</button></NavLink>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LessonCard;