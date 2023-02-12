import { Pool } from "pg";

const connPool = new Pool({
    host: "http://postgresql-bomtawep-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com",
    user: "postgress",
    database: "bomtawepdb",
    password: "B@13o01m22",
    port: parseInt("5432" || "5432")
  });
  
export default connPool