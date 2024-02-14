function generateRandomKey(size){
    let key = "";
    for (let i = 0; i < size; i++){
        key += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return key;
}
module.exports = generateRandomKey;