const fs = require('fs');

function createAndWriteFiles(plainText) {
    
    const path1 = 'C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/encrypted.txt';
    const path2 = 'C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/key.txt';
    const path3 = 'C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/encriptame.txt';

    fs.unlink(path1, (err) => {
        if (err) throw err;
        console.log('File was deleted');
    });

    fs.unlink(path2, (err) => {
        if (err) throw err;
        console.log('File was deleted');
    });

    fs.writeFile( path3, plainText, (err) => {
        if (err) throw err;
        console.log('File was created');
    });
}

module.exports = createAndWriteFiles;