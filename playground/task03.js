const os = require('os');
const fs = require('fs');
const path = require('path');

const userName = os.userInfo().username;

const greeting = `Hello, ${userName}!`;

console.log(greeting);

const filePath = path.join(__dirname, 'greeting.txt');

fs.writeFile(filePath, greeting, (err) => {
    if (err) {
        console.error('Помилка при записі в файл:', err);
    } else {
        console.log('Привітання успішно записано у файл greeting.txt');
    }
});
