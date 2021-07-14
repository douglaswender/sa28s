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
        /*
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
        }*/
    });

program.parse(process.argv);