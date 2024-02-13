function plainTextToBinary(string) {
    return string
        .split("")
        .map((char) => char.charCodeAt(0).toString(2))
        .join(" ");
}

// bits = textToBinary(data);
module.exports = plainTextToBinary;