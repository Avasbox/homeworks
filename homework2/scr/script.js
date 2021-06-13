// задание 1
let name = prompt('Ваше имя?'),
    age = prompt('Ваш возраст?'),
    city = prompt('Ваш город?'),
    phone = prompt('Ваш номер телефона?'),
    email = prompt('Ваш email?'),
    company = prompt('Название вашей компании?');

console.log('Меня зовут ' + name + '. Мне ' + age + 'лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ' ' + email);

// задание 2

let yearsOld = 2021 - 1 - age;

console.log(name + ' родился в ' + yearsOld + ' году');

// Задание 3

let n1 = 2,
    n2 = 2,
    n3 = 3,
    n4 = 3,
    n5 = 3,
    n6 = 1;

console.log('Число из шести цифр ' + n1 + '' + n2 + '' + n3 + '' + n4 + '' + n5 + '' + n6);

let sum1_3 = n1 + n2 + n3,
    sum3_6 = n4 + n5 + n6;

(sum1_3 == sum3_6) ? console.log('Да... Сумма первых трех равна сумме последних трех') : console.log('Нет');

let stroka = prompt('Введите число', '111111'),
    char1 = +stroka[0],
    char2 = +stroka[1];


// задание 4

let a = -3;

if(a > 0) {
    console.log('вернo');
} else {
    console.log('НЕ вернo');
}

// задание 5

let a1 = 10,
    b1 = 2,
    summ = a1 + b1,
    difference = a1 - b1,
    composition = a1 * b1,
    divis = a1 / b1,
    totalSumm = summ + difference + composition + divis;

console.log('Сумма = ' + summ + ' Разность = ' + difference + ' Произведение = ' + a1 * b1 + ' Частное = ' + a1 / b1);

if(summ > 1) {
    console.log(totalSumm ** 2);
}

// задание 6 есть вопрос?

if(a1 > 2 || a1 < 11 || b1 >= 6 || b1 < 14) {
    console.log('Верно')
}  else {
    console.log('Не верно')
};
                                     

// задание 7 есть вопрос? && - и || или

let min = 32;

if(min <= 15) {
    console.log('первая четверть');
} else if((min > 15) && (min <= 30)) {
    console.log('вторая четверть');
} else if((min > 30) && (min <= 45)) {
    console.log('третья четверть');
} else {
    console.log('четвертая четверть');
}
