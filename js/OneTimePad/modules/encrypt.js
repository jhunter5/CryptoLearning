function encrypt(plainText, key, size){
    let cypherText = "";
    for (let i = 0; i < size; i++){
        cypherText += String.fromCharCode(plainText.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return cypherText;
}

module.exports = encrypt;