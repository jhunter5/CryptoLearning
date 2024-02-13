// Modules
const obtainFilePlainText = require('./modules/obtainFilePlainText');
const plainTextToBinary = require('./modules/plainTextToBinary');
const generateKey = require('./modules/generateKey');
const encrypt = require('./modules/encrypt');
const createAndWriteFiles = require('./modules/makeEncryptedFiles');

// Path to the file to encrypt
const PATH = 'C:/Users/juane/OneDrive/Escritorio/dataToEncrypt/encriptame.txt';

// 
let plainText = obtainFilePlainText(PATH);
let binary = plainTextToBinary(plainText);
// console.log(binary);

let key = generateKey(binary);
// console.log(`${key}`);

let cypherText = encrypt(binary, key, binary.length);

// console.log(`${cypherText}`);

// Create and write the encrypted file and the key
// cypherText = binaryToString(cypherText);
// console.log(cypherText);        
// key = binaryToString(key);

createAndWriteFiles(cypherText, key);



// console.log(binaryToString(binary));