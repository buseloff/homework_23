require("dotenv/config");
module.exports = {
  development: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "students",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
    seederStorage: "sequelize",
    seederStorageTableName: "sequelize_data", //SequelizeData
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "students",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "students",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
