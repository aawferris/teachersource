import React from "react";
import "./LessonCard.css";
import { Link } from "react-router-dom";
import img from "./file-icon.png"

const LessonCard = (props) => {
  return (
    <div className="lesson-card">
      <Link className="card" to={`/lessons/${props._id}`}>
        <div>
          <img src={img}/>
        </div>
      </Link>
    </div>
  );
};

export default LessonCard;