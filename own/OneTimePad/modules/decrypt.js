function decrypt(cypherText, key, size){
    let plainText = "";
    for (let i = 0; i < size; i++){
        plainText += String.fromCharCode(cypherText.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return plainText;
}

module.exports = decrypt;