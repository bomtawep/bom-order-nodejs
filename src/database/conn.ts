import { Pool } from "pg";

const connPool = new Pool({
    host: "http://postgresql-bomtawep-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com",
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
  });
  
export default connPool