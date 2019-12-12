//creating "controller/FUNCTION"
//'exports' goes at beginning to export that
//function so it can be called in routes.

exports.getEmployees = (req, res) => {
  res.send("getting employees...");
};

exports.getEmployeesById = (req, res) => {
  res.send("getting employees...");
};

exports.getEmployeesByFirstName = (req, res) => {
  res.send("getting employees...");
};
