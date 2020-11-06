const db = require("../db/connection");
const Lesson = require("../models/lesson");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongDB connection error:"));

const main = async () => {
  const user1 = new User({
    username: "jeff.e",
    email: "jeffy@gmail.com",
    lessons: [],
  });
  await user1.save();
  const user2 = new User({
    username: "cint.ia",
    email: "cintia@gmail.com",
    lessons: [],
  });
  await user2.save();

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

  user1.lessons = await Lesson.find({ userId: user1 });
  await user1.save();
  user2.lessons = await Lesson.find({ userId: user2 });
  await user2.save();
};
const run = async () => {
  await main();
  db.close();
};

run();
