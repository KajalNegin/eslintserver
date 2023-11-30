const express = require('express')
const app = express()
const port = 3000





const { exec } = require('child_process');

const commandToExecute = 'npx eslint lwc';
exec(commandToExecute, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.code}`);
        console.error(`Error: ${error.signal}`);
        //return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        //return;
    }

    console.log(`Output: ${stdout}`);
});