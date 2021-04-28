SELECT Groupinfo.name as Group_name, COUNT(Student.id) as Number_of_students FROM Groupinfo LEFT JOIN Student ON Groupinfo.id = Student.id_group GROUP BY Groupinfo.name ORDER BY Number_of_students DESC;