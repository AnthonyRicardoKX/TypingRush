let listOfWord = ["Argentina", "Brazil", "Cat", "Devil", "Eagle", "Friendster", "Gilgamesh", "Hikikomori", "Indigo", "Jargon", "Kebab", "Lemon", "Melon", "Nostalgia", "Operator", "Query", "Rainbow", "Sand", "Tour", "Union", "Velvet", "Wall", "Xylophone", "Yam", "Zebra"];

// for every word's status or drop
let special = {
	NORMAL: 0,
	FIRE: 1,
	FREEZE: 2,
	SLOW: 3
};

function generateDrop(){
	// NORMAL: 85
	// FIRE: 5
	// FREEZE: 5
	// SLOW: 5

	// val range: 1 up to 100
	var val = randomize(1, 101);

	if(val <= 5)
		return special.FIRE;
	else if(val <= 10)
		return special.FREEZE;
	else if(val <= 15)
		return special.SLOW;
	else
		return special.NORMAL;
}