// since the employee is also an engineer you need to add the employee info from employee.js

const employee = require("./employee");

// this will extend the information that employee already has
class engineer extends employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    // need to switch the employee call to engineer
    getRole () {
        return "engineer";
    }
}

module.exports = engineer;