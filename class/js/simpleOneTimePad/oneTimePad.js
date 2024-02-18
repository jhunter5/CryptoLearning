
let plainText = "Odio la clase de sistemas de informacion"

let key = generateRandomKey(plainText.length);

let cypherText = encrypt(plainText, key, plainText.length);

console.log("cypherText: ", cypherText);

let plainTextDecrypted = decrypt(cypherText, key, plainText.length);

console.log("plainTextDecrypted: ", plainTextDecrypted);


function generateRandomKey(size){
    let key = "";
    for (let i = 0; i < size; i++){
        key += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return key;
}

function encrypt(plainText, key, size){
    let cypherText = "";
    for (let i = 0; i < size; i++){
        cypherText += String.fromCharCode(plainText.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return cypherText;
}


function decrypt(cypherText, key, size){
    let plainText = "";
    for (let i = 0; i < size; i++){
        plainText += String.fromCharCode(cypherText.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return plainText;
}