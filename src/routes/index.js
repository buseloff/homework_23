import express from "express";
import studentRouter from "./studentRouter.js";
import errorHandler from "../middlewares/errorHandler.js";
import logging from "../middlewares/logging.js";

const router = express.Router();
router.use("/students", studentRouter);
router.use(logging);
router.use(errorHandler);
export default router;
