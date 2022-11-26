const inquirer = require("inquirer")
const fs = require("fs") 

var questions = [
    {
        type:"input",
        message: "Enter Project Title",
        name:"title"
    },
    {
        type:"input",
        message: "Enter Project Description",
        name:"description"
    },
    {
        type:"input",
        message: "Enter Project Installation",
        name:"installation"
    },
    {
        type:"input",
        message: "Enter Project Usage",
        name:"usage"
    },
    {
        type:"list",
        message: "Enter Project Licence",
        choices:["MIT","ISC","GPL","APACHE2.0","BP","None"],
        name:"licence"
    },
    {
        type:"input",
        message: "Enter Project Email Address",
        name:"email"
    },
    {
        type:"input",
        message: "Enter Project Github username",
        name:"github"
    },
    {
        type:"input",
        message: "Enter Project Contribution Guidelines",
        name:"contribution"
    },
    {
        type:"input",
        message: "Enter Project Testing",
        name:"testing"
    }
]

inquirer.prompt(questions)
.then(response => {
    console.log(response)
})
