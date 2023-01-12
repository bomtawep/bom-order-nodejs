"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
var cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
const bodyParser = require('body-parser');
const route = require('./routes');
var corsOptions = {
    //origin: `${process.env.ALLOW_HOST}:${process.env.ALLOW_PORT}/*`
    origin: `*`
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.get("/", (req, res, next) => {
    res.send("home");
});
app.use('/api', cors(corsOptions), route);
app.listen(process.env.PORT, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
});
