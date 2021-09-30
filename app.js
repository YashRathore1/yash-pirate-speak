var translateButton = document.querySelector("#button-translate");
var textArea = document.querySelector("#text-area");
var outputDiv = document.querySelector("#outputbox");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
console.log("error occcured", error)
alert("Something Wrong! Please try again later.")
}   

function clickHandler() {
    // var inputText = textArea.value;

    fetch(getTranslationURL(textArea.value))
    .then(response => response.json())
     
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innertext = translatedText;
    })
    .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler);