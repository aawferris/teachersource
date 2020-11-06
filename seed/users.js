const db = require("../db/connection");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongDB connection error:"));

const main = async () => {
  const user1 = new User({
    fullname: "Klein Felder",
    email: "kf_guess@gmail.com",
    imgURL:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png",
    state: "Of Jones",
    district: "Nine",
    gradeLevel: "Sophmore",
    subjects: ["Math", "Science"],
  });

  await user1.save();
  const user2 = new User({
    fullname: "Maury Posa",
    email: "spreadyourwingsandfly@yahoo.com",
    imgURL:
      "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/68.png",
    state: "Narnia",
    district: "The Closet",
    gradeLevel: "9th",
    subjects: ["History", "English"],
  });
  await user2.save();

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
