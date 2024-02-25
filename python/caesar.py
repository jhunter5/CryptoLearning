ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def caesarEncrypt(message, k):
    message = message.upper()
    result = ''
    for letter in message:
        if letter in ALPHABET:
            letter_index = (ALPHABET.find(letter) + k) % len(ALPHABET)
            result = result + ALPHABET[letter_index]
        else:
            result = result + letter
    return result

def caesarDecrypt(message, k):
    return caesarEncrypt(message, -k)


message = "WKLVL VHAWU HPHOB LQVHF XUHHQ FUBSW LRQGR QRWXV HLWWR SURWH FWYDO XDEOH LQIRU PDWLR Q"
k = 3

print(caesarDecrypt(message, k))