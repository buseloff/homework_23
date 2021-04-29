const { Groupinfo, Student } = require("./db/models");
const { QueryTypes, Op } = require("sequelize");
//import db from "./db/models";
const db = require("./db/models");

import router from "./routes";
const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/*
const getAllGroupsWithStudents = async () => {
  try {
    await Groupinfo.findAll({
      attributes: ["name", "id"],
      raw: true,
      logging: false,
    }).then(async (groupinfosArray) => {
      console.log("Groups with all their students:");
      for (let i = 0; i < groupinfosArray.length; i++) {
        console.log(
          `Group ${groupinfosArray[i].name} has the following students:`
        );
        await Student.findAll({
          attributes: { exclude: ["id", "id_group"] },
          raw: true,
          logging: false,
          where: {
            id_group: groupinfosArray[i].id,
          },
        }).then((allStudents) => {
          if (allStudents)
            allStudents.map((student, index) =>
              console.log(
                `Student ${index + 1}: ${student.name} ${
                  student.surname
                }, age: ${student.age}, email: ${student.email}`
              )
            );
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const getStudentsByGroupId = async (inputId) => {
  try {
    await Student.findAll({
      include: {
        model: Groupinfo,
        as: "group",
        required: true,
      },
      where: {
        id_group: {
          [Op.eq]: inputId,
        },
      },
      raw: true,
      logging: false,
    }).then(async (studentsArray) => {
      console.log(`Group with id = ${inputId} has the following students:`);
      studentsArray.map((student, index) => {
        console.log(
          `Student №${index + 1}: ${student.name} ${student.surname}, age: ${
            student.age
          }, email: ${student.email},  group ${student["group.name"]}`
        );
      });
    });
  } catch (e) {
    console.log(e);
  }
};

console.log(
  "--------------------------------------------------------------------"
);
//Все функции закомментированные можно запускать, они работают!!!!!!!!

getAllGroupsWithStudents().then(async () => {
  await console.log(
    "--------------------------------------------------------------------"
  );
  getStudentsByGroupId(3);
});

const getStudentById = async (id) => {
  try {
    return await Student.findByPk(id, { raw: true, logging: false });
  } catch (e) {
    throw e;
  }
};

getStudentById(3).then(console.log).catch(console.err);

const getAdultStudents = async () => {
  try {
    return await Student.findAll({
      attributes: { exclude: ["GroupinfoId", "groupId"] },
      where: {
        age: {
          [Op.gte]: 18,
        },
      },
      raw: true,
      logging: false,
    });
  } catch (e) {
    throw e;
  }
};

getAdultStudents().then(console.log).catch(console.err);

const updateStudent = async (update_data, condition) => {
  try {
    await Student.update(update_data, {
      where: condition,
    });
  } catch (e) {
    throw e;
  }
};

updateStudent({ email: "newemail@gmail.com" }, { id: 3 })
  .then(console.log)
  .catch(console.err);

const deleteStudent = async (condition) => {
  try {
    await Student.destroy({
      where: condition,
    });
  } catch (e) {
    throw e;
  }
};

deleteStudent({ id: 3 }).then(console.log).catch(console.err);
const groupsWithNumberOfStudents = async () =>
  await db.sequelize.query(
    'SELECT "Groupinfo"."name" as Group_name, COUNT("Student"."id") as Number_of_students FROM "Groupinfo" LEFT JOIN "Student" ON "Groupinfo"."id" = "Student"."id_group" GROUP BY "Groupinfo"."name" ORDER BY Number_of_students DESC',
    { type: QueryTypes.SELECT, logging: false, raw: true }
  );
groupsWithNumberOfStudents().then(console.log).catch(console.err);*/
