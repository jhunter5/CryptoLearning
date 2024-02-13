
function xor(a, b) {
    return (a === b) ? '0' : '1';
}

function encrypt(plainText, key, size) {
    let encrypted = '';
    for (let i = 0; i < size; i++) {
        if (plainText[i] === ' ' && key[i] === ' ') {
            encrypted += ' ';
        } else
        encrypted += xor(plainText[i], key[i]);
    }
    return encrypted;
}

module.exports = encrypt;