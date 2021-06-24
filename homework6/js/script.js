//Задание 1

var str1 = 'aaa@bbb@ccc'
console.log(str1 .replace(/@/g, '!'));

//  Задание 2

var date2 = '2025-12-31'

console.log(date2.replace(/(2025)-(12)-(31)/, '$3/$2/$1'))

// Задание 3

var str3 = 'Я учу javascript!'

console.log(str3.substr(2, 4))
console.log(str3.slice(2, 5))
console.log(str3.substring(2, 5))


// Задание 4

var arr = ['4', '2', '5', '19', '13', '0', '10'], 
    sum = 0, i, 
    result;
for (i = 0; i < arr.length; i++) {
result = Math.sqrt(sum += Math.pow(arr[i], 3));
}
console.log(result)

// Задание 5

var a = 3, b = 5, c;
c = a - b
console.log(Math.abs(c));

// Задание 6

var date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// Задание 7

var str = 'aa aba abba abbba abca abea'.replace(/ab+a/g, ' ');
console.log(str)
