const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.get("/", (req, res) => {
  res.send("Hello This is a API");
});

router.get("/zero", (req, res) => {
  res.send("Hello This is zero");
});

// Create users
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Read all
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (e) {
    res.send(e);
  }
});

// Read By ID
// router.get("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const studentData = await Student.findById(_id);

//     if (!studentData) {
//       return res.status(404).send();
//     } else {
//       res.send(studentData);
//     }
//   } catch (e) {
//     res.status(500).send(e);
//   }
// });

// Read By Name
router.get("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const studentData = await Student.find({ name });

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

// Update using ID
// router.patch("/students/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(updateStudents);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// Update using name
router.patch("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const updateStudents = await Student.findOneAndUpdate({ name }, req.body, {
      new: true,
    });
    res.send(updateStudents);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Delete using ID
router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudents = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteStudents);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
