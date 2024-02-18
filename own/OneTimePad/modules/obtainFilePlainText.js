const fs = require('fs');

function obtainFilePlainText(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data;
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

module.exports = obtainFilePlainText;