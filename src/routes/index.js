import express from "express";
import studentRouter from "./studentRouter.js";
import errorHandler from "../middlewares/errorHandler.js";
import logging from "../middlewares/logging.js";

const router = express.Router();
router.use("/students", studentRouter);
router.use("/contact", function (request, response) {
  response.render("contact", {
    title: "My contacts",
    email: "buseloff@gmail.com",
    phone: "+380664418928",
  });
});
router.use("/", function (request, response) {
  response.render("home.hbs");
});

router.use(logging);
router.use(errorHandler);
export default router;
