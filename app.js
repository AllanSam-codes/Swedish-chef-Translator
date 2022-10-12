var btnTranslate = document.querySelector("#btn-translate");
//console.log(btnTranslate);
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector(".output");

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function errorHandler(error) {
    console.log("error occured", error)
    alert("something went wrong with server ! try after some time")
}



function getTranslatorURL(input) {
    return serverURL + "?" + "text=" + input
}

function clickHandler() {
    var inputText = txtInput.value //input 

    fetch(getTranslatorURL(inputText)) // processing
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated; //output
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);