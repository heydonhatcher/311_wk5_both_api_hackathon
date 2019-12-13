const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "34.70.131.85",
        user: "root",
        password: "googlecrap",
        datebase: "employees"
      });
      return this.pool;
    }
    return this.pool;
  }
}

<<<<<<< HEAD
const instance = new Connection()
=======
const instance = new Connection();
>>>>>>> afe99000a2b9a9081aa9d5b10cc6ea92c6b83184

module.exports = instance;
