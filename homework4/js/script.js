// Задание 1

var arr1 = [1, 2, 3, 4, 5];

for (var i = 0; i < arr1.length; i++) {
	document.write(arr1[i] + '  ');
}

document.write('<br />');

// Задание 2

var arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > -2) continue; // больше -2 продолжаем. Перебор массива
    if (arr2[i] < -9) continue; // меньше -10 продолжаем
    document.write(arr2[i]+ '  ');
} 



document.write('<br />');

// Задание 3

var arr = [];
for (var i = 22, j = 0; i < 57, j < 35; i++ , j++) {
    arr[j] = (i + 1);
}
document.write(arr + '  ');

document.write('<br />');

var arr = [], i = 22, j = 0;
while (i++ < 57, j++ < 35) arr[j - 1] = i;
document.write(arr);

document.write('<br />');

// Сумма чисел 

var a = 57, result = 0;
for (var i = 22; i <= a; i++) {
    result = 0;
    for (var j = 1; j <= i; j++) result += j;
}
document.write('Сумма чисел массива [23;57] = ' + result);



document.write('<br />');

// задание 4

var arr = ['10', '20', '30', '50', '235', '3000'];
var d = arr.length;
for (var i = 0; i < d; i++) {
    str = arr[i] + '';
    if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
        document.write(arr[i] + ' ');
    }
}



document.write('<br />');

// Задание 5

var arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for(var i = 0; i < arr.length; i++) {
    if(i == 5 || i == 6){
    document.write('<b>' + arr[i] + ' ' + '</b>');
    }
    else {
    document.write(arr[i] + '  ');
    }
}


document.write('<br />');

// Задание 6

var arr = ['цук', '123уцк', 'h234', '12', 1234, '33', 543234, 'ывыав', 'ываы', 'ыав'];
arr.push('213124');
document.write('Последний элемент массива ' + arr[arr.length- 1]);


document.write('<br />');

// Задание 7

var value = 1;
var arr = [];
for (var i = 0; value != ''; i++) {
    value = prompt('Введите числе или пустое поле чтобы завершить');
    if (value != '') {
        arr.push(value);
    }
    else continue;
}
document.write('Массив ' + arr);

arr.sort(function(a,b){ 
    return a - b;
  });

document.write(' сортированный массив ' + arr);

document.write('<br />');

// Задание 8


var arr = [12, false, 'Текст', 4, 2, -5, 0];
document.write(arr + ' заданный порядок ');
var box = [];
var b = arr.length;
for (var i = 0; i < b/2; i++) {
    box = arr[i];
    arr[i] = arr[b - i - 1];
    arr[b - i - 1] = box;
}
document.write(arr + ' обратный порядок');


document.write('<br />');

// Задание 9


var arr = [5,9,21,,,9,78,,,,,,,,,,,,6],
    arr1 = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] == undefined) {
        arr1++;
    }
}

document.write('Количество пустых значений в массиве ' + arr1);


document.write('<br />');

// Задание 10



var arr = [0, 1, 1, 0, 1, 0];
    arrSum = 0;

for (i = arr.indexOf(0); i <= arr.lastIndexOf(0); i++) {
    arrSum += arr[i];
}

document.write(arrSum);

// Задание 11

document.write('<br />');

var h = 5,
    space = h - 1,
    checkMark = 1,
    spaceInLane = 0,
    checkMarkInLane = 0;

for (i = 0; i < h; i++) {

    for (spaceInLane = 0; spaceInLane < space; spaceInLane++) {
        document.write("&nbsp\n");
    }

    for (checkMarkInLane = 0; checkMarkInLane < checkMark ; checkMarkInLane++) {
        document.write("^");
    }

    space -= 1;
    checkMark += 2;
    document.write("<br>");

}

