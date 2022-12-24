import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const bodyParser = require('body-parser')
const route = require('./routes')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("home");
});
app.use('/api', route)

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});