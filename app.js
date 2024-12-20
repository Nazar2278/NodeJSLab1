const yargs = require('yargs');
const { addLanguage, removeLanguage, listLanguages, readLanguage } = require('./user');

// Команди для yargs
yargs.command({
    command: 'add',
    describe: 'Add a new language',
    builder: {
        title: {
            describe: 'Title of the language',
            demandOption: true,
            type: 'string'
        },
        level: {
            describe: 'Level of proficiency',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        try {
            addLanguage(argv.title, argv.level);
        } catch (error) {
            console.error(error.message);
        }
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a language',
    builder: {
        title: {
            describe: 'Title of the language to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        try {
            removeLanguage(argv.title);
        } catch (error) {
            console.error(error.message);
        }
    }
});

yargs.command({
    command: 'list',
    describe: 'List all languages',
    handler() {
        listLanguages();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read details of a language',
    builder: {
        title: {
            describe: 'Title of the language to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        try {
            readLanguage(argv.title);
        } catch (error) {
            console.error(error.message);
        }
    }
});

// Налаштування yargs
yargs.parse();
