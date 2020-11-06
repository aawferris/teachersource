const Lesson = require("../models/lesson");
const User = require("../models/user");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const lesson = await Lesson.findById(id);
    if (lesson) {
      return res.json(lesson);
    }
    res.status(404).json({ message: "Lesson not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLesson = async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json(lesson); // use this to model for the user create - - tkae the user obj we get (in React and put it in State) -- in the app.js (for accessibility)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateLesson = async (req, res) => {
  const { id } = req.params;
  await Lesson.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, lesson) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!lesson) {
        return res.status(404).json(lesson);
      }
      res.status(200).json(lesson);
    }
  );
};

const deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Lesson.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Lesson deleted");
    }
    throw new Error("Lesson not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// .populate("lessons"); -- FOR ITERATION 3

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user); // use this to model for the user create - - tkae the user obj we get (in React and put it in State) -- in the app.js (for accessibility)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, req.body, { new: true }, (error, user) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!user) {
      return res.status(404).json(user);
    }
    res.status(200).json(user);
  });
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLesson,
  getLessons,
  getLesson,
  updateLesson,
  deleteLesson,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
