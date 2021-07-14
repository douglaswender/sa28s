/*************************
Use: 'hello'.encrypt("XMCKL")
=> "eqnvz"
*************************/
const encrypt = (str, key) => {
	if (str.length != key.length) {
		throw "Text and Key have to be the same length."
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
		out += alphabet[(nText[i] + kText[i]) % 26]
	}
	return out;
}

module.exports = {
    encrypt
}