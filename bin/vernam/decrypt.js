const decrypt = (str, key) => {
    if (str.length != key.length) {
		throw "Texto e chave não possuem o mesmo tamanho."
	}
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
	let nText = []
	let kText = []
	for (let i of str) {
		nText.push(alphabet.indexOf(i.toLowerCase()))
	}
	for (let i of key) {
		kText.push(alphabet.indexOf(i.toLowerCase()))
	}
	let out = ""
	for (let i in nText) {
		out += alphabet[(nText[i] - kText[i]) < 0 ? 26 + (nText[i] - kText[i]) : (nText[i] - kText[i]) % 26]
	}
	return out;
}

module.exports = {
    decrypt
}