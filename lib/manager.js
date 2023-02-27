// adding the employee.js info
const employee = require("./employee");

class manager extends employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    // just needed to add the office number and change the role title

    getRole () {
        return "manager"
    }
}

module.exports = manager;