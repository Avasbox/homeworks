//Задание 1

function computec(a, b, c) {
    return(a - b)/c;
}

console.log(computec(6, 4, 2))

// Задание 2

function power(d) {
    return(d ** 2) + ' ' + (d ** 3);

}

console.log(power(20))

// Задание 3

function min(a, b) {
    if (a > b) {
        return b; 
    } else {
        return a;
    }
}

console.log(min(25, 20))


// задание 4

var arr = [];
function array1() {
    var a = +prompt('Начало массива'),
    b = +prompt('Конец массива');
    
    for (; a <= b; a++) {
    arr.push(a);        
    }

    console.log(arr);
}


function array2 () {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}    
  
array1();
array2();

// задание 5

var a = 421425;
function isEven() {

    if((a % 2) === 0) {
        return true; 
} else {
    return false;
}
}

if (isEven(a) === true) {
    console.log('Это четное число');
} else {
    console.log('Это нечетное число');
}

// Задание 6

