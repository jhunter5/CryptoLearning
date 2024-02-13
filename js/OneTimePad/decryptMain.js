const obtainFilePlainText = require('./modules/obtainFilePlainText');
const decrypt = require('./modules/decrypt');
const binaryToString = require('./modules/binaryToString');
const makeDecryptedFiles = require('./modules/makeDecryptedFiles')

let cypherText = obtainFilePlainText('C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/encrypted.txt');
// console.log(cypherText);
let key = obtainFilePlainText('C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/key.txt');

let plainTextBinary = decrypt(cypherText, key, cypherText.length);

let plainTextAscii = binaryToString(plainTextBinary);

makeDecryptedFiles(plainTextAscii)

