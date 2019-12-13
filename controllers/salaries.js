const mysql = require("mysql");
const pool = require("../mySQL/connection");
const { handleSQLError } = require("../mySQL/error");
//creating "controller/FUNCTION"
//'exports' goes at beginning to export that
//function so it can be called in routes.

const getSalaries = (req, res) => {
  pool.query("SELECT * FROM salaries LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting Salaries...");
};

const getSalariesById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["salaries", "emp_no", req.params.id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting Salaries...");
};

const getSalariesBySalary = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["salaries", "salary", req.params.salary]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting Salaries...");
};

module.exports = {
  getSalaries,
  getSalariesById,
  getSalariesBySalary
};
