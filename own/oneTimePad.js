
let plainText = "Attack the enemy at dawn";
let key = generateRandomKey(plainText.length);
let cypherText = encrypt(plainText, key, plainText.length);

console.log("------ Encriptacion ------")
console.log("plainText: ", plainText);
console.log("cypherText: ", cypherText);

let plainTextDecrypted = decrypt(cypherText, key, plainText.length);

console.log("------ Desencriptacion ------")
console.log("plainTextDecrypted: ", plainTextDecrypted);


function generateRandomKey(size){
    let key = "";
    for (let i = 0; i < size; i++){
        key += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return key;
}

function encrypt(plainText, key){
    let cypherText = "";
    for (let i = 0; i < plainText.length; i++){
        cypherText += String.fromCharCode(plainText.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return cypherText;
}


function decrypt(cypherText, key){
    let plainText = "";
    for (let i = 0; i < cypherText.length; i++){
        plainText += String.fromCharCode(cypherText.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return plainText;
}
