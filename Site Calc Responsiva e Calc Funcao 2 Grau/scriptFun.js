// Script da Calculadora de Função de 2 grau

let calcBtn = document.getElementById("calcBtn")
calcBtn.addEventListener("click", result)

let x1Result = document.getElementById("x1Result")
let x2Result = document.getElementById("x2Result")
let deltaResult = document.getElementById("deltaResult")
let resultPage = document.getElementById("resultPage")

function result(e){
    numA = parseInt(document.getElementById("numA").value)
    numB = parseInt(document.getElementById("numB").value)
    numC = parseInt(document.getElementById("numC").value)

    let delta = (numB ** 2) -4 * numA * numC

    deltaResult.innerHTML = delta

    if(delta < 0){
        x1Result.innerHTML = "Não Existe"
        x2Result.innerHTML = "Não Existe"
    } else {
        bask1 =  ((numB*-1) + Math.sqrt(delta)) / 2 * numA
        bask2 =  ((numB*-1) - Math.sqrt(delta)) / 2 * numA
        x1Result.innerHTML = bask1.toFixed(2)
        x2Result.innerHTML = bask2.toFixed(2)
    }
    e.preventDefault();

    resultPage.classList.remove("hidden")
    window.scrollBy(0, 500);
}