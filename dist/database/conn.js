"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const connPool = new pg_1.Pool({
    host: "http://postgresql-bomtawep-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com",
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432")
});
exports.default = connPool;
