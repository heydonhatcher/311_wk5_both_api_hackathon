const mysql = require("mysql");
const pool = require("../mySQL/connection");
const { handleSQLError } = require("../mySQL/error");
//creating "controller/FUNCTION"
//'exports' goes at beginning to export that
//function so it can be called in routes.

const getTitles = (req, res) => {
  pool.query("SELECT * FROM titles LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting employees...");
};

const getTitlesById = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["titles", "emp_no", req.params.id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  //res.send("getting employees...");
};

module.exports = {
  getTitles,
  getTitlesById
};
