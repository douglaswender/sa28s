var caesarShift = function (str, amount) {
    console.log(str, amount);
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
  
      // Verifica se é uma letra
      if (c.match(/[a-z]/i)) {
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