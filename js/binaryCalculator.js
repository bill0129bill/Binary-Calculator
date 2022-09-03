const res = document.getElementById("res");
let operand1 = '';
let operator = '';
let operand2 = '';

function display() {
    res.innerHTML = operand1 + operator + operand2;
}
function clearResult() {
    operand1 = '';
    operator = '';
    operand2 = '';
    display();
}

function checkRange(){
    return (operand1.length + operator.length + operand2.length >= 45);
}

function assignOperator(value) {

    if(operand2 != ''){
       equal();
    }
    if(checkRange()){
        return;
    }
    
    operator = value;
    display();
}

function addBinary(value) {
    if(checkRange()){
        return;
    }

    if(operator != '') {
        // exist an operator
        operand2 += value;
    } else {
        operand1 += value;
    }
    display();
}

function equal() {
    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    switch(operator) {
        case '+':
            operand1 += operand2;
            break;
        case '-':
            operand1 -= operand2;
            break;
        case '*':
            operand1 *= operand2;
            break;
        case '/':
            if(operand2)
                operand1 /= operand2;
            break;
        default:
            break;
    }
    operand1 = parseInt(operand1).toString(2);
    if(operand1.length >= 45){
        //out of range
        operand1 = '';
    }
    operator = '';
    operand2 = '';
    display();
 }