require("dotenv/config");
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
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
