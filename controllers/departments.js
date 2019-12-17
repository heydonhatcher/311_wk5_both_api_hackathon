const mysql = require("mysql");
const pool = require("../mySQL/connection");
const { handleSQLError } = require("../mySQL/error");
//creating "controller/FUNCTION"
//'exports' goes at beginning to export that
//function so it can be called in routes.

const getDepartmentByDeptNo = (req, res) => {
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["departments", "dept_no", req.params.dept_no]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
  
};

module.exports = {
  getDepartmentByDeptNo
};
