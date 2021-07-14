const caesar = require('../cesar/caesar');

function getFrequency(string){
    console.log(string);
    let freq = {};
    for(let i = 0; i<string.length; i++){
        var code = string.charCodeAt(i);
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)){
            let character = string.charAt(i);
            if(freq[character]){
                freq[character]++;
            } else{
                freq[character] = 1;
            }
        }
        
    }

    const sortable  = Object.entries(freq).sort(([,a],[,b]) => b-a);
        //.reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    console.log(sortable);
    let newString = "";

    let letterA = sortable[0][0];

    let key = 0 - (letterA.charCodeAt(0) - 97);
    console.log(key);

    newString = caesar.caesarShift(string, key);

    newString += `\nChave: ${key}`;

    /*
    for(let i=0; i<string.length; i++){
        let char = string.charAt(i);
        let charCode = string.charCodeAt(i);
        let find = 0;
        
        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)){
            sortable.findIndex((c) => {
                if(c[0] === char){
                    find = sortable.findIndex((a)=> a === c)
                }
            });
            newString += freq_order[find];
        } else{
            newString += string[i];
        }
        
    }*/
    console.log(newString);
    return newString;
}

module.exports = {
    getFrequency,
}