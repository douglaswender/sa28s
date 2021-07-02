#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');

program.version(package.version);

program
    .command('cesar <path>')
    .description('Roda o algoritmo de cifra para um arquivo txt')
    .option('-c', 'roda script para cifrar o arquivo de texto')
    .option('-d', 'roda script para descrifrar o arquivo de texto')
    .option('-k', 'informa a chave de criptografia para o algoritmo');

program.parse(process.argv);