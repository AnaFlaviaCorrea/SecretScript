function encrypt() {
    const inputText = document.getElementById('inputText').value;

    
    if (/[A-Z0-9!@#$%^&*(),.?":{}|<>]/.test(inputText)) {
        alert('Apenas letras minúsculas são permitidas!');
        return;
    }

    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (/[a-z]/.test(char)) {
            const cipher = {
                'e': 'enter',
                'i': 'imes',
                'a': 'ai',
                'o': 'ober',
                'u': 'ufat',
            };
            encryptedText += cipher[char];
        } else {
            encryptedText += char;
        }
    }
  
    document.getElementById('result').value = encryptedText;
}


function decrypt() {
    const inputText = document.getElementById('result').value;
    const decipher = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let decryptedText = '';
    let currentWord = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        if (char === 'e' && inputText.slice(i, i + 5) === 'enter') {
            decryptedText += decipher['enter'];
            i += 4;
        } else if (char === 'i' && inputText.slice(i, i + 4) === 'imes') {
            decryptedText += decipher['imes'];
            i += 3;
        } else if (char === 'a' && inputText.slice(i, i + 2) === 'ai') {
            decryptedText += decipher['ai'];
            i++;
        } else if (char === 'o' && inputText.slice(i, i + 4) === 'ober') {
            decryptedText += decipher['ober'];
            i += 3;
        } else if (char === 'u' && inputText.slice(i, i + 4) === 'ufat') {
            decryptedText += decipher['ufat'];
            i += 3;
        } else {
            decryptedText += char;
        }

    }

    document.getElementById('result').value = decryptedText;
    return decryptedText;
}
function copyText() {
    const element = document.getElementById("result");
    const textToCopy = element.value; 
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch((error) => {
            console.error("Erro ao copiar texto:", error);
            alert("Erro ao copiar texto. Por favor, tente novamente.");
        });
}
$(document).ready(function(){
    $("#btn").click(function(){
        $("#inputText").fadeOut(300).fadeIn(300);
    });
});
function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').value = '';
}



// Path: scripts/script.js