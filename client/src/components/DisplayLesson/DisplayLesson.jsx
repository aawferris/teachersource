import React, { Component } from "react";
import LessonCard from "../LessonCard/LessonCard";
import { getLessons } from "../../services/lessons";
import "./DisplayLesson.css";

class DisplayLesson extends Component {
  constructor() {
    super();
    this.state = {
      lessons: [],
    };
  }

  async componentDidMount() {
    const lessons = await getLessons();
    this.setState({ lessons });
  }

  render() {
    const CARDS = this.state.lessons
      .map((lesson, index) =>
        index < 8 ? (
          <LessonCard
            _id={lesson._id}
            name={lesson.title}
            subject={lesson.subject}
            gradeLevel={lesson.gradeLevel}
            key={index}
          />
        ) : null
      );

    return (
      <div className="lesson-cards">
        <div className="cards">{CARDS}</div>
      </div>
    );
  }
}

export default DisplayLesson;
