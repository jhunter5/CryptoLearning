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
    return decryptedMessage.split(" ").join("");
}


function caesarDecrypt(message, shiftAmount){
    return caesarEncrypt(message, -shiftAmount);
}

function main(){
    let plainText = "RETURN TO ROME"
    let shiftAmount = 3;
    let encryptedMessage = caesarEncrypt(plainText, shiftAmount);
    console.log("-------Encrypting-------")
    console.log("Plain Text: ",plainText) // RETURN TO ROME
    console.log("Encrypted Message: ",encryptedMessage); // UHWXQW WR URPH

    console.log("-------Decrypting-------")
    encryptedMessage = "WKLVL VHAWU HPHOB LQVHF XUHHQ FUBSW LRQGR QRWXV HLWWR SURWH FWYDO XDEOH LQIRU PDWLR Q"
    shiftAmount = 3;
    let decryptedMessage = caesarDecrypt(encryptedMessage, shiftAmount);
    console.log("Encrypted Message: ",encryptedMessage);
    console.log("Decrypted Message: ",decryptedMessage);
}

main();