"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conPool = require("../../database");
const updateEmpPool = (request, response) => {
    const { id } = request.params;
    const { p_id, emp_img_id, fname, lname, gender, birthdate, regisdate } = request.body;
    const sysDate = new Date();
    if (id == null || id == "") {
        response.status(503).send(`Please put id in your request to update id: $id .`);
    }
    else {
        conPool.query('UPDATE bomorder.employee SET p_id = ($1), emp_img_id = ($2), fname = ($3), lname = ($4), gender = ($5), birthdate = ($6), regisdate = ($7), updated = ($8) where id = ($9)', [p_id, emp_img_id, fname, lname, gender, birthdate, regisdate, sysDate, id], (error, results) => {
            if (error) {
                throw error;
            }
            else {
                response.status(200).send("Employee are updated");
            }
        });
    }
};
module.exports = {
    updateEmpPool
};
