#! /usr/bin/env node

const program = require('commander');
const package = require('../../package.json');
const fileManager = require('../file-to-string');
const word = require('../remove-accents');
const frequency = require('./frequency')

program.version(package.decifraVersion);

program
    .argument('<path>') 
    .argument('<outputPath>')
    .description('Roda o algoritmo de cifra para um arquivo txt')
    .action((path, outputPath)=>{
        console.log(`path: ${path}`);
        console.log(`outputPath: ${outputPath}`);
        let str = word.removeAccents(fileManager.readFile(path));
        console.log(str);

        const decrypt = frequency.getFrequency(str.toLowerCase());
        fileManager.writeFile(outputPath, decrypt);
    });

program.parse(process.argv);