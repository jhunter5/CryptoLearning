function generateRandomBinaryKey(binary) {
    let key = "";
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === ' ') {
            key += ' ';
        } else {
            key += Math.floor(Math.random() * 2);
        }
    }
    return key;
}

module.exports = generateRandomBinaryKey;