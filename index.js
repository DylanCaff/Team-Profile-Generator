//const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const inquirer = ('inquirer');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const Intern = require('./lib/Intern');

const teamArry = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?"
        },
    ])
        .then(managerInput => {
            const { managerName, managerId, managerOfficeNumber } = managerInput;

            const manager = new Manager(managerName, managerId, managerOfficeNumber);

            teamArry.manager = teamArry;
        })
};


const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern', "I don't want to add anymore team members"]
        },
    ])
};







const writeFile = data => {
    fs.writeFile('./dist.index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been created!")
        }
    })
};



