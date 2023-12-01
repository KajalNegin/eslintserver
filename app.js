
const path = require('path')
const express = require('express')
const { exec } = require('child_process');
//const { type } = require('os');

const app = express()
const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, 'public');

let respon;

shellCommand()

/*app.get('', (req, res) => {

    console.log(typeof respon);
    res.send(respon);
})*/

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





function shellCommand() {

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
        respon = stdout;

    });

}

