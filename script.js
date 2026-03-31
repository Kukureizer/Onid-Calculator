let firstNUmber;
let currentNumber = "";
let operator;

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


let calculate = function(firstNUmber, operator, currentNumber){
    
    if(operator === "plus"){
       let result = parseFloat(firstNUmber) + parseFloat(currentNumber);
        upDisplay.textContent = result;
        firstNUmber = result;
        currentNumber = ""; 
    } else if( operator === "minus"){
        let result = parseFloat(firstNUmber) - parseFloat(currentNumber);
        upDisplay.textContent = result;
        firstNUmber = result;
        currentNumber = ""; 
    } else if(operator === "divide"){
        let result = parseFloat(firstNUmber) / parseFloat(currentNumber);
        upDisplay.textContent = result;
        firstNUmber = result;
        currentNumber = ""; 
    } else if(operator === "multiply") {
        let result = parseFloat(firstNUmber) * parseFloat(currentNumber);
        upDisplay.textContent = result;
        firstNUmber = result;
        currentNumber = ""; 
    }
}

buttons.addEventListener("click", function(event){
    if(event.target.dataset.type === "number"){
        currentNumber = currentNumber + event.target.dataset.value;
        display.textContent = currentNumber;
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
            calculate(firstNUmber, operator, currentNumber);            
        }
    }
})

// else if (event.target.dataset.type === "manage"){
//         if (event.target.dataset.value === "backspace") {
//             currentNumber = currentNumber.slice(0, -1);
//             display = currentNumber;
//         }
//     }