const mysql = require("mysql");
const pool = require("../mySQL/connection");
const { handleSQLError } = require("../mySQL/error");
//creating "controller/FUNCTION"
//'exports' goes at beginning to export that
//function so it can be called in routes.

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting employees...");
};

const getEmployeesById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["users", "emp_no", req.params.id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting employees...");
};

const getEmployeesByFirstName = (req, res) => {
  let sql = "SELECT from ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["employees", "first_name", req.params.first_name]);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting employees...");
};

module.exports = {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName
};
