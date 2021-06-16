// задание 1

document.write('задание 1' + '<br />');

let a = 1;


while(a < 50) {
    document.write(a + ' ');
    a++;
}

document.write('<br />');

var b = 35;

while(b > 8) {
    document.write(b + ' ');
    b--;
}


document.write('<br />' + 'задание 2');

// задание 2

var c = 89;

while(c > 11) {
    document.write('<br />' + c + ' ');
    c--;
}

// задание 3
document.write('<br />' + 'задание 3' + '<br />');

let d = 100;
let sum13 = 0;

for(let f = 1; f <= d; f++) {
    console.log(f);
    sum13 += f;
}

document.write('Сумма чисел от 0 до 100 = ' + sum13 + '<br />' + 'задание 4' + '<br />');


// задание 4

let g = 5;
let sum = 0;

for(let h = 1; h <= g; h++) {
    sum = 0;

    for(let j = 1; j <= h; j++) {
        sum += j;
    }
    document.write('сумма числа ' + h + ' = ' + sum + '<br />');
}

// задание 5

var k = 8;

while(k <= 56) {
    document.write(k + '; ');
    k +=2;
}

document.write('<br />');

for(let l = 8; l <= 56;) {
    document.write(l + '; ');
    l +=2;
}

document.write('<br />');

// задание 6



for(m = 2; m <= 10; m++) {
    for(n = 2; n <= 10; n++) {
    document.write(n + ' * ' + m  + ' = ' + (n * m) + '<br />');
    }
    document.write('<br />');   
}


document.write('<br />');

// задание 7
for (var num = 1000, i1 = 0; num > 49; num = num / 2, i1++);

document.write('число при делении 2 = ' + num + '<br />');
document.write('количество итераций = ' + i1 + '<br />');

document.write('<br />'); 



// Задание 8 (Как встроить проверку на число или текст? Ошибка скрипта: учитывает пробелы как число, которое равно 0)

var i8 = 0,
    s8 = 0,
    ch;

while ((ch = prompt("Введите число")) !== "0" && ch != null) {

++i8;
s8 += Math.abs(ch); 
}

/*if (number.isNaN( переменная)) Проверяет если не число выдает сообщение что не число, если число continue
*/
alert("Чисел введено: " + i8 + "\nСумма чисел: " + s8
+ "\nСреднее арифметическое: " + (s8 / i8));


// Задание 9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
const arr = str.split(' ');
document.write(`Минимальное значение: ${Math.min(...arr)}, Максимальное значение: ${Math.max(...arr)}`);


document.write('<br />'); 



// Задание 10 (Перевернуть значение числа в обратном порядке?)



var number = prompt("Введите число:"),
    output = [],
    sNumber = number.toString();

for (var i10 = 0, len = sNumber.length; i10 < len; i10 += 1) {
    output.push(+sNumber.charAt(i10));
}

document.write('Раскаладываем число на цифры ' + output + '<br />');

for (var i10 = 0, sum10 = 0; i10 < output.length; sum10 += output[i10++]);
document.write('Сумма чисел = ' + sum10 + '<br />');

var int_length = (''+number).length;

document.write('Количество чисел' + int_length + '<br />');

var spl = number.split('');
document.write(spl.reverse());

