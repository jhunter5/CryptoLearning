const fs = require('fs');


function createAndWriteFiles(cypherText, key ) {
    
    const path1 = 'C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/encrypted.txt';
    const path2 = 'C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/key.txt';

    fs.writeFile(path1, cypherText, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    fs.writeFile(path2, key, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    fs.unlink('C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/encriptame.txt', (err) => {
        if (err) throw err;
        console.log('File was deleted');
    });
}


module.exports = createAndWriteFiles;