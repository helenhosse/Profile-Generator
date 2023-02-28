const generateHTML = require('./src/generateHTML');

const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const Manager = require('./lib/manager');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please input the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: nameInput => {
                if (isNaN (nameInput)) {
                    console.log ("Please input the manager's ID.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please input the manager's email.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please input the office manager's number.")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
   // console.log(`
   // =================
   // Adding employees to the team
  //  =================
   // `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['engineer', 'intern', 'manager']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please list your employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: nameInput => {
                if (isNaN (nameInput)) {
                    console.log ("Please input the employee's ID.")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please input the employee's email.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please input the employee's github username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the employee's school?",
            when: (input) => input.role === "intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please input the employee's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddedEmployee',
            message: 'Do you need to add more employees?',
            default: false
        }
    ])
    .then(employeeInfo => {
        let {name, id, email, role, github, school, confirmAddedEmployee} = employeeInfo
        let employee;

        if (role === "engineer") {
            employee = new engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "intern") {
            employee = new intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);
        if (confirmAddedEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// const addManager = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the manager's name?",
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log ("Please input the manager's name.");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "What is the manager's ID?",
//             validate: nameInput => {
//                 if (isNaN (nameInput)) {
//                     console.log ("Please input the manager's ID.")
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the manager's email?",
//             validate: email => {
//                 valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//                 if (valid) {
//                     return true;
//                 } else {
//                     console.log ("Please input the manager's email.")
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: "What is the manager's office number?",
//             validate: nameInput => {
//                 if (isNaN(nameInput)) {
//                     console.log ("Please input the office manager's number.")
//                     return false;
//                 } else {
//                     return true;
//                 }
//             }
//         }
//     ])
//     .then(managerInfo => {
//         const {name, id, email, officeNumber} = managerInfo;
//         const manager = new manager (name, id, email, officeNumber);
//         teamArray.push(manager);
//         console.log(manager);
//     })
// };

const writeFile = data => {
    //isn't pulling file, come back to
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have now added all of your team members to your profile!")
        }
    })
};

addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});