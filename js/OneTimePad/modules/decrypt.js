
function xor(a, b) {
    return (a === b) ? '0' : '1';
}

function decrypt(cypherText, key, size) {
    let plainText = '';
    for (let i = 0; i < size; i++) {
        if (cypherText[i] === ' ' && key[i] === ' ') {
            plainText += ' ';
        } else
        plainText += xor(cypherText[i], key[i]);
    }
    return plainText;
}

module.exports = decrypt;