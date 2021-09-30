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
   
    var inputText = textArea.value;
    
    console.log(getTranslationURL(inputText))
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
     
    .then((json) => {
        let translatedText = json.contents.translated;
       
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

translateButton.addEventListener("click", clickHandler);