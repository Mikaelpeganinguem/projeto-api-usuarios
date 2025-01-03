const fs = require('fs');
const path = require('path');

const datafile = path.join(__dirname, 'users.json');

function readFile() {
    if (!fs.existsSync(datafile)) {
        fs.writeFileSync(datafile, JSON.stringify([]), 'utf-8');
    }

    const data = fs.readFileSync(datafile, 'utf-8');
    return JSON.parse(data);
}

function saveData(data) {
    fs.writeFileSync(datafile, JSON.stringify(data, null, 2), 'utf-8');    
}

module.exports = { readFile, saveData };