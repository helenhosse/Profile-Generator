// need to import the information from employee.js
const employee = require("./employee");

//extending the info from employee section
class intern extends employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    // switching out roles from employee section
    getRole () {
        return "intern";
    }
}

module.exports = intern;