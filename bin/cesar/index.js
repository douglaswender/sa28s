#! /usr/bin/env node

const program = require('commander');
const package = require('../../package.json');
const fileManager = require('../file-to-string');
const accents = require('../remove-accents');
const caesar = require('./caesar');

program.version(package.version);

program
    .argument('<path>') 
    .argument('<outputPath>')
    .description('Roda o algoritmo de cifra para um arquivo txt')
    .option('-c', 'roda script para cifrar o arquivo de texto')
    .option('-d', 'roda script para descrifrar o arquivo de texto')
    .option('-k [key]', 'informa a chave de criptografia para o algoritmo')
    .action((path, outputPath, options)=>{
        //console.log(`path: ${path}`);
        //console.log(`outputPath: ${outputPath}`);
        //console.log(options);
        let str = fileManager.readFile(path);
        //console.log(str);
        str = accents.removeAccents(str);
        //console.log(str);

        if(options.c == true && options.d == true){
            console.log('Use apenas uma opção (-c ou -d)');
            return;
        } else if(options.c == null && options.d == null){
            console.log('Escolha uma opção (-d ou -c)');
        } else{
            
            let k = 0;
            
            //verifica se o parâmetro K existe, se for nulo ele atribui como 0
            if(options.k === null || options.k === true || options.k === undefined){
                k = 0;
            } else{
                if(options.d === true){
                    k = k-parseInt(options.k)
                } else{
                    k = parseInt(options.k);
                }
            }

            k = k;
            const encrypt = caesar.caesarShift(str, k);
            fileManager.writeFile(outputPath, encrypt);
        }
    });

program.parse(process.argv);