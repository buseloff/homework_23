import express from "express";
import {
  createStudent,
  updateStudentByPk,
  getStudentByPk,
  deleteStudentByPk,
  getStudents,
} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/create", createStudent);
studentRouter.patch("/:studentId", updateStudentByPk);

studentRouter.get("/:studentId", getStudentByPk);
studentRouter.get("/", getStudents);
studentRouter.delete("/:studentId", deleteStudentByPk);

export default studentRouter;
