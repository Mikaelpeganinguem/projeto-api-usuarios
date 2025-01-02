const fs = require('fs');
const path = require('path');

const datafile = path.join(__dirname, 'users.json');
const DATABASE = 'users.json';  

function readFile() {
    if (!fs.existsSync(datafile)) {
        fs.writeFileSync(datafile, JSON.stringify([]), 'utf-8');
    }

    const data = fs.readFileSync(datafile, 'utf-8');
    
    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Erro ao parsear JSON:", error);
        return [];
    }
}

function saveData(data) {
    if (Array.isArray(data)) {
        fs.writeFileSync(datafile, JSON.stringify(data, null, 2), 'utf-8');
    } else {
        console.error("Erro: Dados não são um array");
    }
}

module.exports = { readFile, saveData };