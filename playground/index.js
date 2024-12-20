// Підключаємо модуль lodash
const _ = require('lodash');

// 1. Метод _.chunk() - розбиває масив на підмасиви заданої довжини
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedArray = _.chunk(array, 3); 
console.log('_.chunk():', chunkedArray);
// Результат: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// 2. Метод _.reverse() - змінює порядок елементів в масиві
const reversedArray = _.reverse([...array]); 
console.log('_.reverse():', reversedArray);
// Результат: [9, 8, 7, 6, 5, 4, 3, 2, 1]

// 3. Метод _.uniq() - створює новий масив без дубльованих значень
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = _.uniq(arrayWithDuplicates); 
console.log('_.uniq():', uniqueArray);
// Результат: [1, 2, 3, 4, 5]

// 4. Метод _.find() - знаходить перший елемент в масиві, що відповідає умові
const users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 48 },
    { 'user': 'betty', 'age': 40 }
];
const foundUser = _.find(users, user => user.age < 40);
console.log('_.find():', foundUser);
// Результат: { user: 'barney', age: 36 }

// 5. Метод _.sortBy() - сортує масив об'єктів за певним полем
const sortedUsers = _.sortBy(users, ['age']);
console.log('_.sortBy():', sortedUsers);
// Результат: [
//   { user: 'barney', age: 36 },
//   { user: 'betty', age: 40 },
//   { user: 'fred', age: 48 }
// ]
