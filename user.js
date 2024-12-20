// user.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'user.json');

// Helper function to load user data
function loadUserData() {
    if (!fs.existsSync(filePath)) {
        return { firstName: '', lastName: '', languages: [] };
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Helper function to save user data
function saveUserData(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Add a language
function addLanguage(title, level) {
    if (!title || !level) {
        throw new Error('Title and level are required.');
    }

    const data = loadUserData();

    if (data.languages.some(lang => lang.title === title)) {
        throw new Error(`Language with title "${title}" already exists.`);
    }

    data.languages.push({ title, level });
    saveUserData(data);
    console.log(`Language "${title}" added successfully.`);
}

// Remove a language
function removeLanguage(title) {
    if (!title) {
        throw new Error('Title is required.');
    }

    const data = loadUserData();

    const filteredLanguages = data.languages.filter(lang => lang.title !== title);

    if (filteredLanguages.length === data.languages.length) {
        throw new Error(`Language with title "${title}" not found.`);
    }

    data.languages = filteredLanguages;
    saveUserData(data);
    console.log(`Language "${title}" removed successfully.`);
}

// List all languages
function listLanguages() {
    const data = loadUserData();

    if (data.languages.length === 0) {
        console.log('No languages found.');
    } else {
        console.log('Languages:');
        data.languages.forEach(lang => {
            console.log(`- ${lang.title} (${lang.level})`);
        });
    }
}

// Read a language
function readLanguage(title) {
    if (!title) {
        throw new Error('Title is required.');
    }

    const data = loadUserData();

    const language = data.languages.find(lang => lang.title === title);

    if (!language) {
        throw new Error(`Language with title "${title}" not found.`);
    }

    console.log(`Language: ${language.title} (${language.level})`);
}

module.exports = { addLanguage, removeLanguage, listLanguages, readLanguage };