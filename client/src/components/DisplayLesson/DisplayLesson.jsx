import React, { Component } from "react";
import "./DisplayLesson.css";
import LessonCard from "../LessonCard/LessonCard";
import { getLessons } from "../../services/lessons";

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
            key={index}
          />
        ) : null
      );

     return(
       <div className="lesson-cards">
        <div className="cards">{CARDS}</div>
      </div>
    );
  }
}

export default DisplayLesson;
