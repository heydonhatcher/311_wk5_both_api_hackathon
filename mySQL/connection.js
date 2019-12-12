const mysql = require('mysql');

class Connection {
    constructor() {
        if(!this.pool) {
            console.log('creating connection...')
            this.pool = mysql.createPool({
                connectionLimit: 100, 
                host: '34.70.131.85',
                user:'root', 
                password: 'googlecrap',
                datebase: 'employees'
            })
            return this.pool
        }
        return this.pool
    }
}

const instance = new Connections()

module.exports = instance;