var caesarShift = function (str, amount) {
    // Se for informado valor negativo
    if (amount < 0) {
      return caesarShift(str, amount + 26);
    }
  
    // Inicializar a variável
    var output = "";
  
    // Percorer os caracteres
    for (var i = 0; i < str.length; i++) {
      // Selecionar o caractere
      var c = str[i];
      // Verifica se é uma letra ou número
      if (c.match(/[a-z0-9]/i)) {
        // Seleciona o código ASCII
        var code = str.charCodeAt(i);
  
        // Maiúsculas
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
        // Minúsculas
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }

        // Números
        else if(code >= 48 && code <= 57){
          c = String.fromCharCode(((code - 48 + amount) % 10) + 48);
          console.log(c);
        }
      }
  
      // Adiciona ao texto
      output += c;
    }
  
    // Pronto
    return output;
  };

module.exports = {
  caesarShift,
};