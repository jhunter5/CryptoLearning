// Modules
const obtainFilePlainText = require('./modules/obtainFilePlainText');
const generateKey = require('./modules/generateKey');
const encrypt = require('./modules/encrypt');
const createAndWriteFiles = require('./modules/makeEncryptedFiles');

// Path to the file to encrypt
const PATH = 'C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/encriptame.txt';

// 
let plainText = obtainFilePlainText(PATH);

let key = generateKey(plainText.length);

let cypherText = encrypt(plainText, key, plainText.length);

// Create and write the encrypted file and the key
createAndWriteFiles(cypherText, key);
