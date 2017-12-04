let listOfWord = ["Argentina", "Brazil", "Cat", "Devil", "Eagle", "Friendster", "Gilgamesh", "Hikikomori", "Indigo", "Jargon", "Kebab", "Lemon", "Melon", "Nostalgia", "Operator", "Query"];
let usedWord = [];

for(var i = 0; i < listOfWord.length; i++)
	usedWord.push(false);

let status = {
	NORMAL: 0,
	FREEZE: 1
};
