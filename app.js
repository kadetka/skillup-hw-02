//Числа

let numPi = Math.PI;
console.log(numPi.toFixed(2));

let maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(maxNumber);

let minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(minNumber);

//получить случайное число с округлением до двух цифр после запятой
function getRandom() {
    let num = Math.random()
    return num.toFixed(2)
  }
console.log(getRandom());

//случайное целое число в заданном интервале
function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);
    return Math.floor(Math.random() * (max - min)) + min;
  }
console.log(getRandomInt());


let sum = 0.6 + 0.7;
console.log(sum);     //проверить результат вычислений
sum = sum.toFixed(1); //приводим к значению 1.3
console.log(sum);

//получить число из строки

let str = '100$';
let number = parseInt(str);
console.log(number);


//Строки

let string = 'some test string'; 

console.log(string[0].toLocaleUpperCase()); 
console.log(string[string.length-1].toLocaleUpperCase()); 
console.log(string.indexOf('string'));

let position = string.indexOf(' ', string.indexOf(' ')+1);//находим в строке позицию второго пробела относительно (позиции первого + 1 символ)
console.log(position)

console.log(string.substr(5, 4));// часть строки начиная с 5 позиции длинной 4 символа
console.log(string.slice(5, 9)); // строка с 5 символа по 9 (не включительно)

console.log(string.slice(0, string.length-6));// получаем строку без последних 6 символов

let a = 20;
let b = 16;
let year = a.toString() + b.toString();
console.log(year);

//Объекты

let obj = {
    product: 'iphone'
}
obj.price = 1000;
obj.currenty = 'dollar';
obj.details = {};
obj.details.model = 'XS';
obj.details.color = 'yellow';
console.log(obj);


//Преобразование примитивов

//Чему равно а, почему?
//let a = 0 || 'string';     // a = 'string' оператор или запирается на истине. так как 0 это false то a = 'string' true
//let a = 1 && 'string';     // a = 'string' оператор и запирается на лжи. если все значения истинны, то вернет последнее
//let a = null || 25;        // a = 25       оператор или запирается на истине. так как null это false то a = 25 true
//let a = null && 25;        // a = null     оператор и запирается на лжи, а null это false 
//let a = null || 0 || 35;   // a = 35       null = false, 0 = false
//let a = null && 0 && 35;   // a = null     первое ложное значение


//Что отобразится в консоли. Почему?

12 + 14 + '12'   // 2612       сначала будет сложение чисел, потом неявное преобразование в строку и конкатенация
3 + 2 - '1'      // 4          сначала будет сложение чисел, потом неявное преобразование в число и вычитание
'3' + 2 - 1      // 31         сначала конкатенация пото преобразование к числу и вычитание
true + 2         // 3          true неявно преобразовывается в число 1
+'10' + 1        // 11         преобразование в число так как +'10', если + убрать то преобразование будет в строку 
undefined + 2    // Nan        undefined преобразовывается в NaN
null + 5         // 5          null преобразуется в 0
true + undefined // NaN        undefined преобразовывается в NaN
5 + "34"         // 534
5 - "4"          // 1
10 % 5           // 0          остаток от деления 10/5 без остатка
5 % 10           // 5
"Java" + "Script" // "JavaScript" 
" " + " "         // '  '     
" " + 0           // 0
true + true       // 2          true преобразуется в 1
true + false      // 1
false + true      // 1
false - true      // -1
3 - 4             // -1
"Bob" - "bill"    // NaN       при вычитании буквенных строк происходит преобразование в не число.



//Что будет результатом следующих сравнений:
5 >= 1              //true
0 === 1             //false
4 <= 1              //false
1 != 1              //false
"A" > "B"           //false
"B" < "C"           //true
"a" > "A"           //true
"b" < "A"           //false
true === false      //false
true != true        //false


//If else

// 1

let hid = 'hidden';
if(hid === 'hidden'){
    hid = 'visible';
}else{
    hid = 'hidden';
}

//2

let n = 10;
if(n === 0){
    n = 1;
}else if(n < 0){
    n = 'less then zero';
}else{
    n*=10;
}

//3

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if(car.age > 5){
    console.log('Need Repair');
    car.needRepair = 'true';
}else{
    car.needRepair = 'false';
}

//4

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

if('discount' in item && item.discount !== NaN && 'price' in item && item.price !== NaN){
    let price = parseInt(item.price);
    let discount = parseInt(item.discount);
    item.priceWithDiscount = price - ((price*15) / 100);
    console.log(item.priceWithDiscount);
}else{
    console.log(item.price);
}

//5

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

let price = parseInt(product.price);

if(price >= min && price <= max){
    console.log(product.name);
}else{
    console.log('Товаров не найдено');
}
