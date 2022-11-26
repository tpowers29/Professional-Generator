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
        name:"license"
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
   const readmeFile = `
# Title: ${response.title}

## Table of Contents
* [Description](#description)
* [Installation](#instalation)
* [Usage](#usage) 
* [License](#license) 
* [Email](#email)
* [Github](#github)
* [Contribution](#contribution)
* [Testing](#testing)
   
### Description
${response.description}

### Installation
${response.installation}

### Usage
${response.usage}

### License
${response.license}
![GitHub license](https://img.shields.io/badge/license-${response.license}-green.svg)

### Email
${response.email}

### Github
${response.github}

### Contribution
${response.contribution}

### Testing
${response.testing}
   `
   fs.writeFileSync("README.md",readmeFile,function(err){
    if(err) console.log("Err in generating readme",err)
   })
   console.log("README Completed")
})
