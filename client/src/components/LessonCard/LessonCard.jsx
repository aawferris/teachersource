import React from "react";
import "./LessonCard.css";
import { Link } from "react-router-dom";

const LessonCard = (props) => {
  return (
    <div className="lesson-card">
      <Link className="card" to={`/lessons/${props._id}`}>
        <div>View</div>
      </Link>
    </div>
  );
};

export default LessonCard;