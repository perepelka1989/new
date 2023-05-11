// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// console.log(`0-это ноль`);
// for (let i = 1; i <=11; i++) {  
//  if (i%2!==0) {
//  console.log(`${i}-нечетное число`);} 
//  if (i%2==0) {  
//  console.log(`${i}-четное число`);   
// }}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr=[1, 2, 3, 4, 5, 6, 7];
// arr.splice(3,2);
// console.log (arr);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );

  const myArr = generateArray(5, 9);
console.log(myArr);

let result = myArr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);
console.log(Math.min.apply(null, myArr));

let num= myArr.includes(3);
console.log (num);