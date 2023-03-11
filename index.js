//const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const inquirer = ('inquirer');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const Intern = require('./lib/Intern');

const teamArry = [];



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



