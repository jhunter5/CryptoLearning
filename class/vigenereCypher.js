const getInput = require('./module/getInput');

function makeVigenereMatrix() {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var matrix = [];
    for (var i = 0; i < alphabet.length; i++) {
        matrix[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
    }
    return matrix;
}

function keySameLengthAsText(key, text) {
    while (key.length < text.length) {
        key += key;
    }
    return key.slice(0, text.length);
}

function makeBlocks(text, t) {
    text = text.replaceAll(" ", "");
    let blocks = [];
    for (let i = 0; i < text.length; i+=t) {
        blocks.push(text.slice(i, i+t));
    }
    return blocks.join(" ");
}

function vigenereEncrypt(text, key, t) {
    var matrix = makeVigenereMatrix();
    key = keySameLengthAsText(key, text.replace(/[^A-Z]/g, ''));
    let cypheredText = "";
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            let row = text[i].charCodeAt(0) - 65;
            let col = key[keyIndex].charCodeAt(0) - 65;
            cypheredText += matrix[row][col];
            keyIndex++;
        } else {
            cypheredText += text[i];
        }
    }

    cypheredText = makeBlocks(cypheredText, t);
    return cypheredText
}

function vigenereDecrypt(cypherText, key, t){
    var matrix = makeVigenereMatrix();
    key = keySameLengthAsText(key, cypherText.replace(/[^A-Z]/g, ''));
    let text = "";
    let keyIndex = 0;
    for (let i = 0; i < cypherText.length; i++) {
        if (cypherText[i] >= 'A' && cypherText[i] <= 'Z') {
            let row = key[keyIndex].charCodeAt(0) - 65;
            let col = matrix[row].indexOf(cypherText[i]);
            text += String.fromCharCode(col + 65);
            keyIndex++;
        } else {
            text += cypherText[i];
        }
    }

    // text = makeBlocks(text, t);
    text = makeBlocks(text, t);
    return text;

}

async function main(){
    let option = await getInput('1. Encriptar\n2. Desencriptar\n');
    if (option == '1'){
        console.log('-----Encriptación Vigenere-----');
        let cypherText = await getInput('Inserte mensaje a cifrar: ');
        let key = await getInput('Inserte clave: ');
        let t = parseInt(await getInput('Inserte tamaño de bloque: '));
        let encryptedText = vigenereEncrypt(cypherText, key, t);
        console.log('Texto cifrado: ', encryptedText);
    } else {
        console.log('-----Desencriptación Vigenere-----');
        let cypherText = await getInput('Inserte mensaje a descifrar: ');
        let key = await getInput('Inserte clave: ');
        let t = parseInt(await getInput('Inserte tamaño de bloque: '));
        let decryptedText = vigenereDecrypt(cypherText, key, t);
        console.log('Texto descifrado: ', decryptedText);
    }
    

}

main();

