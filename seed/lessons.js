const db = require("../db/connection");
const Lesson = require("../models/lesson");

db.on("error", console.error.bind(console, "MongDB connection error:"));

const main = async () => {
  const lessons = [
    {
      title: "Lesson 1",
      subject: "Earth Science",
      gradeLevel: "8th",
      description:
        "This is a lesson about tectonic fault shifts and how they cause earthqueaks, volcanos, and other geothermic activity.",
    },
    {
      title: "Lesson 2",
      subject: "Maths",
      gradeLevel: "8th",
      description:
        "This is a lesson about the quadratic equation and how it looks on a graph.",
    },
  ];
  await Lesson.insertMany(lessons);
  console.log("Created lessons!");
};
const run = async () => {
  await main();
  db.close();
};

run();
