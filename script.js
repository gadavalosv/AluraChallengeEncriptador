function encrypt(){
    var text = document.getElementById("textToEncrypt").value;
    var outputText = "";
    for (var i = 0; i < text.length; i++) {
        switch(text[i]){
            case 'a':
                outputText += "ai";
                break;
            case 'i':
                outputText += "imes";
                break;
            case 'u':
                outputText += "ufat";
                break;
            case 'e':
                outputText += "enter";
                break;
            case 'o':
                outputText += "ober";
                break;
            default:
                outputText += text[i];
                break;
        }
    }
    if(outputText != ""){
        document.getElementById("img_textNotFound").hidden = true;
        document.getElementById("outputDesc").hidden = true;
        document.getElementById("outputText").innerText = outputText;
        document.getElementById("decrypter").style.display = "block";
        document.getElementById("decrypter").style.textAlign = "left";
    }else{
        document.getElementById("img_textNotFound").hidden = false;
        document.getElementById("outputDesc").hidden = false;
        document.getElementById("outputText").innerText = "Ningún mensaje fue encontrado";
        document.getElementById("decrypter").style.display = "flex";
        document.getElementById("decrypter").style.textAlign = "center";
    }
}

function decrypt(){
    var text = document.getElementById("textToEncrypt").value;
    text = text.replaceAll("ai", "a");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ufat", "u");
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("ober", "o");
    if(text != ""){
        document.getElementById("img_textNotFound").hidden = true;
        document.getElementById("outputDesc").hidden = true;
        document.getElementById("outputText").innerText = text;
        document.getElementById("decrypter").style.display = "block";
        document.getElementById("decrypter").style.textAlign = "left";
    }else{
        document.getElementById("img_textNotFound").hidden = false;
        document.getElementById("outputDesc").hidden = false;
        document.getElementById("outputText").innerText = "Ningún mensaje fue encontrado";
        document.getElementById("decrypter").style.display = "flex";
        document.getElementById("decrypter").style.textAlign = "center";
    }
}