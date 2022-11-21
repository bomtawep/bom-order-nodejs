import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

const createTableStr = `
CREATE TABLE public.accounts
(
    id SERIAL,
    username text,
    Password text,
    CONSTRAINT accounts_pkey PRIMARY KEY (id)
);`;
const insertTableStr = `insert into accounts(username, password) values ('bomtawep', 'B@13o01m22');`;
const selectTableStr = `
  select * from accounts `;

const app = express();
dotenv.config(); //Reads .env file and makes it accessible via process.env

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("home");
});
app.get("/connect", (req: Request, res: Response, next: NextFunction) => {
  res.send("Connect database");
  conDB();
  console.log('Connected database in Host: ', process.env.DB_HOST, 
  ', User: ', process.env.DB_USER, ', Database: ', process.env.DB_NAME, 
  ', Password: ', process.env.DB_PASSWORD, ', Port: ', process.env.DB_PORT);
});
app.get("/create", (req: Request, res: Response, next: NextFunction) => {
  console.log("Begin creating table ");
  createTable(createTableStr).then(result => {
    console.log('Created table: ', result);
  });
  res.send("Create table");
});
app.get("/insert", (req: Request, res: Response, next: NextFunction) => {
  console.log("Begin inserting table ");
  insertTable(insertTableStr).then(result => {
    console.log('Inserted table');
  });
  res.send("Insert table");
});

app.get("/disconnect", (req: Request, res: Response, next: NextFunction) => {
  res.send("Disconnect database");
  disconDB();
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432")
});

app.get("/list", (req: Request, res: Response, next: NextFunction) => {
  res.send("All role and Account");
  listTable(`select * from accounts;`);
});


  
const createTable = async (create: any) => {
  try {
    pool.query(create);
    console.log('End create table');
  } catch (err) {
    console.log(err);
  }
}
const conDB = async () => {
  try {
    await pool.connect();
    console.log('Connected database');
  } catch (err) {
    console.log(err);
  }
}
const insertTable = async (insert: any) => {
  try {
    pool.query(insert);
    console.log('End insert table');
  } catch (err) {
    console.log(err);
  }
}
const listTable = async (listStr: any) => {
  try {
    pool.query(listStr, (err, res) => {
      if (err) {
          console.error(err);
          return;
      }
      for (let row of res.rows) {
          console.log(row);
      }
    });
  } catch (err) {
    console.log(err);
  }
}
const disconDB = async () => {
  try {
    await pool.end();
    console.log('Disconnected database');
  } catch (err) {
    console.log(err);
  }
}