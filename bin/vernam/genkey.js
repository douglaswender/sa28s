const genK = (str)=>{
    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
    let out = "";
    for (var i = 0; i < str.length; i++) {
		out += alfabeto[Math.floor(Math.random() * alfabeto.length)];
	}
    return out;
}

module.exports = {
    genK
}