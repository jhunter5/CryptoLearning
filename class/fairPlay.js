function makeMatrix(){
    var matrix = [];
    for(var i = 0; i < 5; i++){
        matrix[i] = [];
        for(var j = 0; j < 5; j++){
            matrix[i][j] = "";
        }
    }
    return matrix;

}

function verifyLetter(letter, matrix){
    for (var i = 0; i < 5; i++){
        for (var j = 0; j < 5; j++){
            if (matrix[i][j] == letter){
                return true;
            }
        }
    }
    return false;
}

function fullMatrix(key, matrix){
    key = key.toUpperCase();
    var alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    i = 0;
    j = 0;
    for (letter of key){
        alphabet = alphabet.replace(letter, "");
        if (verifyLetter(letter, matrix) == false){
            if(letter == "J" || letter == "I"){
                letter = "IJ";
            }
            matrix[i][j] = letter;
            j++;
            if (j == 5){
                j = 0;
                i++;
            }
        }
    }

    for (letter of alphabet){
        if (letter == "J" || letter == "I"){
            letter = "IJ";
        }
        matrix[i][j] = letter;
        j++;
        if (j == 5){
            j = 0;
            i++;
        }
    }

    return matrix;
}


function divideMssage(message){
    let dividedM = new Array();

    for (let i = 0; i < message.length; i+=2){
        if (message[i] == message[i+1]){
            message = message.slice(0, i+1) + "X" + message.slice(i+1);
        }
        if (message.length % 2 != 0){
            message += "X";
        }
        dividedM.push(message.slice(i, i+2));
    }

    return dividedM;
}

function findLetter(letter, matrix){
    for (var i = 0; i < 5; i++){
        for (var j = 0; j < 5; j++){
            if (letter == "J" || letter == "I"){
                if (matrix[i][j] == "IJ"){
                    return [i, j];
                }
            }
            if (matrix[i][j] == letter){
                return [i, j];
            }
        }
    }
}

function fairPlayEncrypt(message, key){
    let matrix = makeMatrix();
    fullMatrix(key, matrix);

    message = message.toUpperCase();
    // message = message.replace("J", "I");
    message = message.replace(/\s/g, "")

    dividedMessage = divideMssage(message);
    
    let encryptedMessage = "";

    for (let pair of dividedMessage){
        
        let firstLetter = pair[0];
        let secondLetter = pair[1];
        
        
        let firstLetterIndex = findLetter(firstLetter, matrix);
        let secondLetterIndex = findLetter(secondLetter, matrix);
         
        if (firstLetterIndex[0] == secondLetterIndex[0]){
            encryptedMessage += matrix[firstLetterIndex[0]][(firstLetterIndex[1] + 1) % 5];
            encryptedMessage += matrix[secondLetterIndex[0]][(secondLetterIndex[1] + 1) % 5];
        } else if (firstLetterIndex[1] == secondLetterIndex[1]){
            encryptedMessage += matrix[(firstLetterIndex[0] + 1) % 5][firstLetterIndex[1]];
            encryptedMessage += matrix[(secondLetterIndex[0] + 1) % 5][secondLetterIndex[1]];
        } else {
            encryptedMessage += matrix[firstLetterIndex[0]][secondLetterIndex[1]];
            encryptedMessage += matrix[secondLetterIndex[0]][firstLetterIndex[1]];
        }
    }
    
    encryptedMessage = encryptedMessage.replace(/(.{2})/g, '$1 ');;
    return encryptedMessage;
}


function fairPlayDecrypt(message, key){
    let matrix = makeMatrix();
    fullMatrix(key, matrix);

    message = message.toUpperCase();
    message = message.replace("J", "I");
    message = message.replace(/\s/g, "")
    

    dividedMessage = divideMssage(message);
    console.log(dividedMessage);
    
    let decryptedMessage = "";

    for (let pair of dividedMessage){
        
        let firstLetter = pair[0];
        let secondLetter = pair[1];
        
        
        let firstLetterIndex = findLetter(firstLetter, matrix);
        let secondLetterIndex = findLetter(secondLetter, matrix);
         
        if (firstLetterIndex[0] == secondLetterIndex[0]){
            decryptedMessage += matrix[firstLetterIndex[0]][(firstLetterIndex[1] - 1 + 5) % 5];
            decryptedMessage += matrix[secondLetterIndex[0]][(secondLetterIndex[1] - 1 + 5) % 5];
        } else if (firstLetterIndex[1] == secondLetterIndex[1]){
            decryptedMessage += matrix[(firstLetterIndex[0] - 1 + 5) % 5][firstLetterIndex[1]];
            decryptedMessage += matrix[(secondLetterIndex[0] - 1 + 5) % 5][secondLetterIndex[1]];
        } else {
            decryptedMessage += matrix[firstLetterIndex[0]][secondLetterIndex[1]];
            decryptedMessage += matrix[secondLetterIndex[0]][firstLetterIndex[1]];
        }
    }
    
    decryptedMessage = decryptedMessage.replace(/(.{2})/g, '$1 ');;
    return decryptedMessage;
}


cypherText = fairPlayEncrypt("THIS SECRET MESSAGE IS ENCRYPTED", "yoanpinzon");

console.log(cypherText)

let que = "IU OU TF DF IR QC IN XR"
plainText = fairPlayDecrypt( que, "yoanpinzon");
console.log(plainText)




