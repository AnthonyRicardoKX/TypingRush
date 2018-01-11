let listOfWord = [
	["Argentina", "Ark", "Ant", "All", "Ally", "And"],
	["Brazil", "Big", "Brother", "Brain", "Bar", "Bowl", "Beacon"],
	["Cat", "Car", "Call", "Clam", "Crane", "Crawl"],
	["Devil", "Dinosaur", "Darkness", "Dark", "Drain"],
	["Eagle", "Eat", "Ent", "Ear", "Eavesdrop", "Enter"],
	["Friendster", "Fry", "Free", "Friend", "Finish", "Follow"],
	["Gilgamesh", "Garden", "Goal", "Girl", "Grave", "Gust"],
	["Hair", "Heir", "Hollow", "Huge", "Hello", "Heist"],
	["Indigo", "Initial", "Idiom", "Item", "Iron", "Inertia"],
	["Jargon", "Jack", "Journey", "Jam", "Juggler", "Justice"],
	["Kebab", "Ketchup", "Kibble", "Kick", "Keen", "Keel"],
	["Lemon", "Lime", "Less", "Large", "Little", "Leak"],
	["Melon", "Mime", "Meme", "Mentor", "Man", "Mart"],
	["Nostalgia", "Nose", "Nacho", "Nail", "Name", "Nice"],
	["Operator", "Option", "Odd", "Orb", "Oak", "Ordeal"],
	["Park", "Prank", "Peach", "Porch", "Peace", "Piece"],
	["Query", "Queen", "Quack", "Quick", "Quill", "Quit"],
	["Rainbow", "Rain", "Row", "Rack", "Rush", "Reach"],
	["Sand", "Sow", "Sit", "Shock", "Shut", "Soon"],
	["Tour", "Trick", "Temper", "Tilt", "Torch", "Truck"],
	["Union", "Umbrella", "Under", "Unit", "Until", "Unless"],
	["Velvet", "Vector", "Veal", "Vowel", "Vacant", "Value"],
	["Wall", "Will", "Watch", "Wreck", "Write", "Wish", "Walk"],
	["Xylophone", "Xenon", "Xiphoid", "Xenophobe", "Xylem"],
	["Yam", "Yap", "Yak", "Yacht", "Yell", "Year"],
	["Zebra", "Zinc", "Zap", "Zone", "Zodiac", "Zealot"]
];

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