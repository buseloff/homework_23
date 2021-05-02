import { Student } from "../db/models";

export async function createStudent(req, res, next) {
  try {
    //console.log(req.body);
    const created_student = await Student.create({
      ...req.body,
      id_group: req.body.group,
    });
    if (created_student) {
      const student_data = created_student.get();
      //console.log(student_data);
      //return res.status(201).send(student_data);
      return res.redirect("http://localhost:3000/students");
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function updateStudentByPk(req, res, next) {
  try {
    //console.log(req.body);
    const [updateRowsCount, updateRows] = await Student.update(
      {
        ...req.body,
        id_group: req.body.group,
      },
      {
        where: {
          id: req.body.id,
        },
        returning: true,
      }
    );
    if (updateRowsCount) {
      const student_data = updateRows; //[results, metadata]
      //console.log(student_data);
      //return res.status(201).send(student_data);
      return res.redirect("http://localhost:3000/students");
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getStudentByPk(req, res, next) {
  try {
    const found_student = await Student.findByPk(req.params.studentId);
    if (found_student) {
      //console.log(found_student);
      //return res.status(201).send(found_student);
      return res.render("edit.hbs", {
        student: found_student,
      });
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function deleteStudentByPk(req, res, next) {
  console.log(req.params);
  try {
    const found_student = await Student.destroy({
      where: {
        id: req.params.studentId,
      },
    });
    if (found_student) {
      //console.log(found_student);
      //return res.sendStatus(204);
      return res.redirect("http://localhost:3000/students");
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}
export async function getStudents(req, res, next) {
  try {
    const found_students = await Student.findAll({ raw: true });
    if (found_students) {
      //console.log(found_students);
      //return res.status(201).send(found_students);
      return res.render("index.hbs", {
        students: found_students,
      });
    }
    return next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function createStudentForm(req, res, next) {
  await res.render("create.hbs");
}
