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
            
            if (cipher.hasOwnProperty(char)) {
                encryptedText += cipher[char];
            } else {
                encryptedText += char; 
            }
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
    let i = 0;

    while (i < inputText.length) {
        let found = false;

        // Verifica se existe algum código criptografado a partir da posição atual
        for (let code in decipher) {
            if (inputText.startsWith(code, i)) {
                // Se encontrado, adiciona a letra correspondente e atualiza o índice
                decryptedText += decipher[code];
                i += code.length;
                found = true;
                break;
            }
        }

        // Se nenhum código foi encontrado, mantém o caractere original
        if (!found) {
            decryptedText += inputText[i];
            i++;
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
$(document).ready(function () {
    $("#btn").click(function () {
        $("#inputText").fadeOut(300).fadeIn(300);
    });
});
function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').value = '';
}
