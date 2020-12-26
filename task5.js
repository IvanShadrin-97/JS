function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

// Task 6
function minCalc(arg1, arg2, opertaion) {
    switch (opertaion) {
        case '+':
            sum(arg1, arg2);
            break;
        case '-':
            sub(arg1, arg2);
            break;
        case '*':
            mult(arg1, arg2);
            break;
        case '/':
            div(arg1, arg2);
            break;
        default:
            alert('Choosen operation undefiend')
            break;
    }
}