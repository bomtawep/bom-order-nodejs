"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const createTableStr = `
CREATE TABLE public.accounts
(
    id SERIAL,
    username text,
    Password text,
    CONSTRAINT accounts_pkey PRIMARY KEY (id)
);`;
const insertTableStr = `insert into public.accounts(username, password) values ('asd', 'B@13o01m22');`;
const selectTableStr = `
  select * from accounts `;
const app = (0, express_1.default)();
dotenv_1.default.config(); //Reads .env file and makes it accessible via process.env
app.get("/", (req, res, next) => {
    res.send("home");
});
app.get("/connect", (req, res, next) => {
    res.send("Connect database");
    conDB();
    console.log('Connected database in Host: ', process.env.DB_HOST, ', User: ', process.env.DB_USER, ', Database: ', process.env.DB_NAME, ', Password: ', process.env.DB_PASSWORD, ', Port: ', process.env.DB_PORT);
});
app.get("/create", (req, res, next) => {
    console.log("Begin creating table ");
    createTable(createTableStr).then(result => {
        console.log('Created table: ', result);
    });
    res.send("Create table");
});
app.get("/insert", (req, res, next) => {
    console.log("Begin inserting table ");
    insertTable(insertTableStr).then(result => {
        console.log('Inserted table');
    });
    res.send("Insert table");
});
app.get("/disconnect", (req, res, next) => {
    res.send("Disconnect database");
    disconDB();
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
});
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
});
app.get("/list", (req, res, next) => {
    const title = 'All role and Account';
    listTable(selectTableStr, res, title);
});
const createTable = (create) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        pool.query(create);
        console.log('End create table');
    }
    catch (err) {
        console.log(err);
    }
});
const conDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pool.connect();
        console.log('Connected database');
    }
    catch (err) {
        console.log(err);
    }
});
const insertTable = (insert) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        pool.query(insert);
        console.log('End insert table');
    }
    catch (err) {
        console.log(err);
    }
});
const listTable = (listStr, resp, titleMsg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        pool.query(listStr, (err, res) => {
            if (err) {
                console.error(err);
                return;
            }
            const listResp = [];
            for (let row of res.rows) {
                listResp.push(row);
            }
            console.log(listResp);
            resp.send(listResp);
        });
    }
    catch (err) {
        console.log(err);
    }
});
const disconDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pool.end();
        console.log('Disconnected database');
    }
    catch (err) {
        console.log(err);
    }
});
