let firstNUmber;
let currentNumber = "";
let operator;
let lastNumber;

let display = document.getElementById("display");
let upDisplay = document.getElementById("upper-display");
let buttons = document.querySelector(".buttons");

let handleOperator = function(){

}

let operation = function(event){
    operator = event.target.dataset.value;
    firstNUmber = currentNumber;
    upDisplay.textContent = firstNUmber + event.target.textContent;
    currentNumber = "";
    
}


let calculate = function(){
    let result;
    if(operator === "plus"){
        result = parseFloat(firstNUmber) + parseFloat(currentNumber);
    } else if( operator === "minus"){
        result = parseFloat(firstNUmber) - parseFloat(currentNumber);
    } else if(operator === "divide"){
        result = parseFloat(firstNUmber) / parseFloat(currentNumber);  
    } else if(operator === "multiply") {
        result = parseFloat(firstNUmber) * parseFloat(currentNumber);  
    }
    firstNUmber = result;
    currentNumber = result
    upDisplay.textContent = result;
}

buttons.addEventListener("click", function(event){
    if(event.target.dataset.type === "number"){
        if(currentNumber === "0"){
        currentNumber = event.target.dataset.value;
        display.textContent = currentNumber;
        } else {
            currentNumber = currentNumber + event.target.dataset.value;
            display.textContent = currentNumber;
        }
    } else if (event.target.dataset.type === "operator") {
        if(event.target.dataset.value === "plus")
        {
            operation(event);
        }
        else if(event.target.dataset.value === "minus")
        {
            operation(event);
        }else if(event.target.dataset.value === "divide")
        {
            operation(event);
        }else if(event.target.dataset.value === "multiply")
        {
            operation(event);
        }
        else if(event.target.dataset.value === "equal")
        {
            calculate();          
        }
    } else if (event.target.dataset.type === "manage"){
        if (event.target.dataset.value === "backspace") {
            currentNumber = currentNumber.slice(0, -1);
            if(currentNumber === ""){
                currentNumber = "0";
            }
            display.textContent = currentNumber;
        }
    }
})

