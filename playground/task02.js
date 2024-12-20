const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'output.txt');

const textToAppend = 'Hello, World\n';

fs.appendFile(filePath, textToAppend, (err) => {
    if (err) {
        console.error('Помилка при додаванні тексту до файлу:', err);
    } else {
        console.log('Рядок "Hello, World" успішно додано до файлу.');
    }
});
