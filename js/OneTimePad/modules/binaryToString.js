function binaryToString(binary) {
    let text = '';
    let segments = binary.split(' ');
    for (let i = 0; i < segments.length; i++) {
        let ascii = parseInt(segments[i], 2);
        text += String.fromCharCode(ascii);
    }
    // text = text.replace(/[\n\r\s]+/g, '');
    return text;
}

module.exports = binaryToString;