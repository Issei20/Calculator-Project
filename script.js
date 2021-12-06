// functions basic math


function clear1(){
    document.getElementById("screenShow").innerHTML = "";
    firstNum = "";
    secondNum = "";
    operator = "";
   }
   
   function back() {
    const screenShow = document.getElementById("screenShow");
    screenShow.textContent = screenShow.textContent.toString().slice(0, -1)
    if(operator === "") {
        firstNum = firstNum.toString().slice(0, -1);
    } else if (operator !== "" && secondNum === "") {
        operator = operator.toString().slice(0, -1);
    } else {
    secondNum = secondNum.toString().slice(0, -1);
    }
}

result = 0
function add(firstNum, secondNum){
result = parseFloat(firstNum)+ parseFloat(secondNum);
document.getElementById("screenShow").innerHTML = Math.round(result * 100) / 100;

}

function multiply(firstNum, secondNum){
result = parseFloat(firstNum) * parseFloat(secondNum);
document.getElementById("screenShow").innerHTML = Math.round(result * 100) / 100;


}


function substract(firstNum, secondNum){
result = parseFloat(firstNum) - parseFloat(secondNum);
document.getElementById("screenShow").innerHTML = Math.round(result * 100) / 100;

}


function divided(firstNum, secondNum){
    if (firstNum == 0 || secondNum == 0) {
        return alert("ERROR : You can't divide by 0");
    }
result = parseFloat(firstNum) / parseFloat(secondNum);
document.getElementById("screenShow").innerHTML = Math.round(result * 100) / 100;

}

firstNum = "";
        secondNum = "";
        operator = "";

function operate(operator, firstNum, secondNum){

    if (operator === "+"){
        add(firstNum, secondNum);
    } else if (operator === "-"){
        substract(firstNum, secondNum);
    } else if (operator === "*"){
        multiply(firstNum, secondNum);
    } else if (operator === "/") {
        divided(firstNum, secondNum);
    }

}


const numbers = document.querySelectorAll(".myBtn");
const operators = document.querySelectorAll(".myBtnOp");

numbers.forEach(number => {
    
    number.addEventListener("click", e => {
        if (e.target.value === ".") {
            if(operator === "" && firstNum.includes(".")){
                return;
                
        } else if (operator !== "" && secondNum.includes(".")){
            return;
            
    }}

        if (operator === "" && !firstNum.includes(".") && !secondNum.includes(".") ) { 
          
            firstNum += e.target.value;
            document.getElementById("screenShow").innerHTML = firstNum;
        } else { 
            secondNum += e.target.value;
            document.getElementById("screenShow").innerHTML = firstNum + operator + secondNum ;
        }
    });

    
});

operators.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.value;
        document.getElementById("screenShow").innerHTML = firstNum + operator + secondNum ;
        
    });
});



function equalPlay(){

   operate(operator, firstNum, secondNum);
   firstNum = Math.round(result * 100) / 100
   secondNum = "";
};


document.getElementById("plus");
document.getElementById("bigEqual");

document.getElementById("one");
window.addEventListener('keydown', e => {
   if(e.key === "=" || e.key === "Enter") {

    equalPlay();
    
   }
          

    if (operator === "" && e.key !== "+" && e.key !== "/"&& e.key !== "*"&& e.key !== "-" && e.key !== "Backspace" && e.key !== "Enter"&& e.key !== ".") { 
    
        firstNum += e.key;
        
        document.getElementById("screenShow").innerHTML = firstNum;
           
       
    } else if (e.key !== '=' && e.key !== "+" && e.key !== "/"&& e.key !== "*"&& e.key !== "-" && e.key !== "Backspace" && e.key !== "Enter"&& e.key !== ".") { 
       
        secondNum += e.key;
        document.getElementById("screenShow").innerHTML = firstNum + operator + secondNum ;
        
    } else if (e.key === "+" || e.key ==="-" || e.key === "*" || e.key === "/" && e.key !== "Backspace" && e.key !== "Enter" && e.key !== ".") {
        operator = e.key;
        document.getElementById("screenShow").innerHTML = firstNum + operator + secondNum ;
    } else if (e.key === "Backspace") { 
        back()
    } else if (e.key ===".") {
        if(operator === "" && firstNum.includes(".")){
            return;
            
           } else if (operator === ""  ){
            
        firstNum += e.key;
        
        document.getElementById("screenShow").innerHTML = firstNum;
       } else if (secondNum.includes(".")){
        return;
        
       } else  {
        
    secondNum += e.key;
    
    document.getElementById("screenShow").innerHTML = firstNum + operator + secondNum;
}

  
}

})




let screenShow = document.getElementById("screenShow").innerHTML;

