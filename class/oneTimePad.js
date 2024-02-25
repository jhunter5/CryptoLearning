const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function letterToIndex(message){
    return message.split('').map(letter => ALPHABET.indexOf(letter));
}

function indexToLetter(indexes){
    return indexes.map(index => ALPHABET[index]);
}

function addMod26(a, b){
    return (a + b) % 26;
}

function subtractMod26(a, b){
    return (a - b + 26) % 26;
}


function oneTimePadEncrypt(plainText, key){
    let plainTextIndexes = letterToIndex(plainText);
    let keyIndexes = letterToIndex(key);
    let cypherTextIndexes = plainTextIndexes.map((plainTextIndex, i) => addMod26(plainTextIndex, keyIndexes[i]));
    return indexToLetter(cypherTextIndexes).join('');
}

function oneTimePadDecrypt(cypherText, key){
    let cypherTextIndexes = letterToIndex(cypherText);
    let keyIndexes = letterToIndex(key);
    let plainTextIndexes = cypherTextIndexes.map((cypherTextIndex, i) => subtractMod26(cypherTextIndex, keyIndexes[i]));
    return indexToLetter(plainTextIndexes).join('');
}

function main(){
    let plainText = "hello";
    let key = "eoxjf";
    let cypherText = oneTimePadEncrypt(plainText, key);
    console.log("------ Encriptacion ------")
    console.log("plainText: ", plainText);
    console.log("cypherText: ", cypherText);
    let plainTextDecrypted = oneTimePadDecrypt(cypherText, key);
    console.log("------ Desencriptacion ------")
    console.log("plainTextDecrypted: ", plainTextDecrypted);
}

main();