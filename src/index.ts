import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

var cors = require('cors')
dotenv.config();
const app = express();
const bodyParser = require('body-parser')
const route = require('./routes')
var corsOptions = {
    //origin: `${process.env.ALLOW_HOST}:${process.env.ALLOW_PORT}/*`
    origin: `*`
  }

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("home");
});
app.use('/api', cors(corsOptions), route)

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});