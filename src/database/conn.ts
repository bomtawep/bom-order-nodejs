import { Pool } from "pg";

const connPool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "bomtawepdb",
    password: "B@13o01m22",
    port: parseInt("5432" || "5432")
  });

export default connPool