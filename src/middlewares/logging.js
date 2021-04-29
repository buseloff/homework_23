const fs = require("fs");
export default function (request, response, next) {

  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let data = `${hour}:${minutes}:${seconds} ${request.method} ${
    request.url
  } ${request.get("user-agent")}`;
  console.log(data);
  fs.appendFile("server.log", data + "\n", function (error) {
    if (error) throw error; // если возникла ошибка

    console.log("Запись файла завершена.");
  });
  next();
}
