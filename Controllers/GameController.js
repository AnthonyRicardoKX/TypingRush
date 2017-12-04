// game starts!
function gameStart(){
	generate();
	document.addEventListener("keypress", function(event){
		//console.log(event.key);
	});
}

// return random value between min (included) and max (excluded)
function randomize(min, max){
	return min + Math.floor(Math.random() * (max - min));
}

// generate each node
function generate(){
	console.log(objective);
	if(objective > 0)
	{
		objective--;
		setTimeout(function(){
			createWordNode(pickWord(), randomize(leftBound, rightBound), 0);
			generate();
		}, randomize(generate_interval.low, generate_interval.high));
	}
}

// randomly pick an available word
function pickWord(){
	var wordIndex = randomize(0, listOfWord.length);
	while(usedWord[wordIndex]){
		wordIndex = randomize(0, listOfWord.length);
	}
	usedWord[wordIndex] = true;
	return wordIndex;
}

// create new HTML node element for word
function createWordNode(wordIndex = 0, x = 0, y = 0){

	var new_node = document.createElement("div");
	var groupIndex = groupOfWord.length;
	var id = "w" + groupIndex;
	var text = listOfWord[wordIndex];

	new_node.setAttribute("id", id);

	// initial style
	new_node.style.position = "absolute";
	new_node.style.top = y + "px";
	new_node.style.left = x + "px";

	// push into array
	groupOfWord.push({
		id: id,
		x: x,
		y: y,
		content: text,
		wordIndex: wordIndex,
		speed: randomize(speed.low, speed.high),
		status: status.NORMAL
	});

	// separate all the characters into a group of spans
	for(var i = 0; i < text.length; i ++)
	{
		var new_span = document.createElement("span");
		var new_text_node = document.createTextNode(text[i]);
		new_span.appendChild(new_text_node);
		new_node.appendChild(new_span);
	}

	// apply and render
	document.getElementById("gameWindow").appendChild(new_node);

	// make it fall
	fall(groupIndex, groupOfWord[groupIndex].speed);
}

// falling function
function fall(groupIndex, speeds){
	var id = "w" + groupIndex;
	var node = document.getElementById(id);
	groupOfInterval.push(setInterval(function(){
		groupOfWord[groupIndex].y += speeds;
		node.style.top = groupOfWord[groupIndex].y + "px";
		if(groupOfWord[groupIndex].y >= lowerBound)
		{
			life -= 5;
			usedWord[groupOfWord[groupIndex].wordIndex] = false;
			node.style.display = "none";
			document.getElementById("health-value").innerHTML = life + "%";
			clearInterval(groupOfInterval[groupIndex]);
		}
	}, 10));
}

// Main
Game(10);
gameStart();