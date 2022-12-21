console.log("JAVASCRIPT Project By Ayaz");
let btn = document.querySelectorAll("button");
let inputElem = document.getElementById("answer");
let screenValue ="";
btn.forEach(element => {
    element.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == "X"){
            buttonText = "*";
            screenValue+=buttonText;
            inputElem.value=screenValue;
        }
        else if(buttonText == "C"){
            screenValue="";
            inputElem.value=screenValue;
        }
        else if(buttonText == "="){
            evaluateAnswers();
        }
        else{
            screenValue += buttonText;
            inputElem.value = screenValue;
        }
    })
});

function evaluateAnswers(){
    if(inputElem.value.includes("(") && !isNaN(inputElem.value.charAt(inputElem.value.indexOf("(") - 1)))
    {
        fullans();
        return;
    }
    inputElem.value = eval(screenValue);
}
function fullans(){
    screenValue = addStr(inputElem.value, inputElem.value.indexOf("("), "*");
    inputElem.value = eval(screenValue);
}
function addStr(str, index, stringToAdd) {
    return (
        str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
}
window.onerror = function () {
    alert("PLEASE INPUT VALID EXPRESSION");
    screenValue = "";
    inputElem.value = screenValue;
    console.clear();
};