#! /usr/bin/env node

const program = require('commander');
const package = require('../../package.json');
const fileManager = require('../file-to-string');
const word = require('../remove-accents');
const { encrypt } = require('./encrypt');
const { decrypt } = require('./decrypt');
const { genK } = require('./genkey');

program.version(package.decifraVersion);

program
    .argument('<keyPath>')
    .argument('<path>')
    .argument('<outputPath>')
    .option('-c', 'roda script para cifrar o arquivo de texto')
    .option('-d', 'roda script para descrifrar o arquivo de texto')
    .description('Roda o algoritmo de cifra para um arquivo txt')
    .action((keyPath, path, outputPath, options) => {
        console.log(`path: ${path}`);
        console.log(`outputPath: ${outputPath}`);

        if (options.c == true && options.d == true) {
            console.log('Use apenas uma opção (-c ou -d)');
            return;
        } else if (options.c == null && options.d == null) {
            console.log('Escolha uma opção (-d ou -c)');
        } else {
            let str = word.removeAccents(fileManager.readFile(path));

            if (options.c === true) {
                let generatedKey = genK(str);
                fileManager.writeFile(keyPath, generatedKey);
                console.log(str);
                console.log(encrypt(str, generatedKey));
                fileManager.writeFile(outputPath, encrypt(str, generatedKey));
            } else if(options.d === true){
                let generatedKey = fileManager.readFile(keyPath);
                console.log(generatedKey);
                console.log(str);
                console.log(decrypt(str, generatedKey));
                fileManager.writeFile(outputPath, decrypt(str, generatedKey));
            } else{
                throw "Houve um erro inexperado!";
            }
        }

    });

program.parse(process.argv);