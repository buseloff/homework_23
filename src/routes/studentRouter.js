import express from "express";
import {
  createStudent,
  updateStudentByPk,
  getStudentByPk,
  deleteStudentByPk,
  getStudents,
  createStudentForm,
} from "../controllers/studentController.js";

const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const studentRouter = express.Router();

studentRouter.post("/create", urlencodedParser, createStudent);
studentRouter.post("/edit", urlencodedParser, updateStudentByPk);
studentRouter.get("/create", createStudentForm);
studentRouter.get("/edit/:studentId", getStudentByPk);
studentRouter.get("/", getStudents);
studentRouter.post("/delete/:studentId", urlencodedParser, deleteStudentByPk);

export default studentRouter;
