function add(a, b) {

    return a + b;

}

function divide(a, b) {

    if (b != 0) {
        return a / b;
    } else {
        return NaN;
    }

}

function multiply(a, b) {

    return a * b;

}

var minus = function (a, b) {

    return a - b;

}

function abs(a) {

    if (a < 0) {
        return -1 * a;
    } else {
        return a;
    }
}

function sqrt(a) {

    var x1 = 1;
    var x2 = multiply(0.5, add(a, 1));

    if(a<0) {
        if(a===-1){
            return 'i';
        } else {
            return sqrt(multiply(-1,a))+'i';
        }
    } else if (a === 0 || a === 1) {
        return a;
    } else {
        while (abs(minus(x1, x2)) > 0.01) {
            x1 = x2;
            x2 = multiply(0.5, add(divide(a, x1), x1));
        }
        return x2;
    }

}

function operation(op,x,y) {
    return op(x,y);
}

console.log(sqrt(49));