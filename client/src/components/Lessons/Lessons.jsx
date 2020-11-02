import React from "react";
import "./Lessons.css";
import { Link } from "react-router-dom";

const Lesson = (props) => {
  return (
    <>
      <Link className="lesson" to={`/posts/${props._id}`}>
        <div className="lesson-title">{`${props.title}`}</div>
        <div className="lesson-subject">{`${props.subject}`}</div>
        <div className="lesson-gradeLevel">{`${props.gradeLevel}`}</div>
        <div className="lesson-description">{props.description}</div>
      </Link>
    </>
  );
};
export default Lesson;