import mysql from "mysql";
import "dotenv/config";

const port = process.env.DB_PORT || 3306;

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: port,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default db;
