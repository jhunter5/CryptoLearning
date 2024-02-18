function caesarEncrypt(message, shiftAmount){
    const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++){
        if (message[i] === " "){
            decryptedMessage += " ";
            continue;
        }
        let newIndex = (ALPHABET.indexOf(message[i]) + shiftAmount + ALPHABET.length) % ALPHABET.length;
        decryptedMessage += ALPHABET[newIndex];
    }
    return decryptedMessage;
}

let message = "ATTACKATONCE"
let shiftAmount = 4;

function caesarDecrypt(message, shiftAmount){
    return caesarEncrypt(message, -shiftAmount);
}

let encryptedMessage = caesarEncrypt(message, shiftAmount);
console.log(encryptedMessage); // THIS SECRET MESSAGE IS VERY IMPORTANT BECAUSE PEOPLE SHOULD KNOW THAT IT IS VERY EASY TO DECRYPT A MESSAGE WHICH IS ENCRYPTED USING CAESAR CIPHER

let plainText = caesarDecrypt(encryptedMessage, shiftAmount);
console.log(plainText); // ATTACKATONCE