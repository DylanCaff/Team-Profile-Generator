const Employee = require("./Employee");

class Enigneer  extends Employee {
    constructor (name, id, email, github) {

        super (name, id, email, github);

        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Enigneer;