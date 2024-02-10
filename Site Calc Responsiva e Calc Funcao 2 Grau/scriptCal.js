// Script da Cauculadora Simples

document.onkeydown = function(e){
    if(e.key === "Escape"){
        calcClear()
    }
    if(e.key === "Enter"){
        result()
    }
    if(isFinite(e.key) && num1.value === ""){
        num1.focus()
    }
    switch(e.key){
        case "ArrowUp":
            plusOperation()
            break
        case "ArrowDown":
            minusOperation()
            break
        case "ArrowLeft":
            timesOperation()
            break
        case "ArrowRight":
            divisionOperation()
            break
    }
}

const calcOperation = document.getElementById("calcOperation");
var selectedCalcOperation = calcOperation.innerHTML;

const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const timesBtn = document.getElementById("timesBtn");
const divisionBtn = document.getElementById("divisionBtn");
const clearBtn = document.getElementById("clearBtn");

let num1 = document.getElementById("calcFirstInput")   
let num2 = document.getElementById("calcSecondInput")

const calcForm = document.getElementById("CalcPage");
const resultInput = document.getElementById("calcResultInput")

num1.addEventListener("keydown", function(e){
    if (e.which === 38 || e.which === 40){
        e.preventDefault();
    }
})
num2.addEventListener("keydown", function(e){
    if (e.which === 38 || e.which === 40){
        e.preventDefault();
    }
})

plusBtn.addEventListener("click", plusOperation);
minusBtn.addEventListener("click", minusOperation);
timesBtn.addEventListener("click", timesOperation);
divisionBtn.addEventListener("click", divisionOperation);
clearBtn.addEventListener("click", calcClear);

calcForm.addEventListener("submit", result)



function plusOperation() {
   calcOperation.innerHTML = "+";
    selectedCalcOperation = "+";
    plusBtn.classList.add("selectedOpr")
    minusBtn.classList.remove("selectedOpr")
    timesBtn.classList.remove("selectedOpr")
    divisionBtn.classList.remove("selectedOpr")
}
function minusOperation() {
    calcOperation.innerHTML = "-";
    selectedCalcOperation = "-";
    plusBtn.classList.remove("selectedOpr")
    minusBtn.classList.add("selectedOpr")
    timesBtn.classList.remove("selectedOpr")
    divisionBtn.classList.remove("selectedOpr")
}
function timesOperation() {
    calcOperation.innerHTML = "×";
    selectedCalcOperation = "×";
    plusBtn.classList.remove("selectedOpr")
    minusBtn.classList.remove("selectedOpr")
    timesBtn.classList.add("selectedOpr")
    divisionBtn.classList.remove("selectedOpr")
}
function divisionOperation(){
    calcOperation.innerHTML = "÷";
    selectedCalcOperation = "÷";
    plusBtn.classList.remove("selectedOpr")
    minusBtn.classList.remove("selectedOpr")
    timesBtn.classList.remove("selectedOpr")
    divisionBtn.classList.add("selectedOpr")
}

function calcClear(){
    num1.value = ""
    num2.value = ""
    resultInput.value = ""
}

function result(e){
    var num1 = document.getElementById("calcFirstInput").value
    var num2 = document.getElementById("calcSecondInput").value
    if (num1 === ""){
        num1 = 0
    }
    if (num2 === ""){
        num2 = 0
    }
    var result
    switch(selectedCalcOperation){
        case "+" :
            result = parseInt(num1) + parseInt(num2)
            console.log(result)
            if(resultInput.value !== ""){
                resultInput.value = parseInt(resultInput.value) + result
            } else{
                resultInput.value = result
            }
            break;
        case "-" :
            result = parseInt(num1) - parseInt(num2)
            console.log(result)
            resultInput.value = result.toFixed(2)
            break;
        case "×" :
            result = parseInt(num1) * parseInt(num2)
            console.log(result)
            if(resultInput.value !== ""){
                resultInput.value = parseInt(resultInput.value) + result
            } else{
                resultInput.value = result
            }
            break;
        case "÷":
            result = parseInt(num1) / parseInt(num2)
            console.log(result)
            resultInput.value = result
            break;
    }


    e.preventDefault();
}


