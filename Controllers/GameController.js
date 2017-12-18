// game starts!
function gameStart(){
	generate();
	document.addEventListener("keydown", function(event){
		console.log(focuses);
		var my_key = event.key.toString().toLowerCase();
		// get first character if the start is correct
		if(focuses.groupIndex === -1)
		{
			for(var i = 0; i < groupOfWord.length; i++)
			{
				if(groupOfWord[i].content[0].toLowerCase() === my_key && !finished[i])
				{
					focuses.groupIndex = i;
					focuses.charIndex = 0;
					document.getElementById(groupOfWord[focuses.groupIndex].id).childNodes[focuses.charIndex].style.color = "yellow";
					break;
				}
			}
		}
		// continue if key is correct
		else if(groupOfWord[focuses.groupIndex].content[focuses.charIndex + 1].toString().toLowerCase() === my_key && !finished[focuses.groupIndex])
		{
			focuses.charIndex++;
			document.getElementById(groupOfWord[focuses.groupIndex].id).childNodes[focuses.charIndex].style.color = "yellow";

			// If the whole characters filled
			if(focuses.charIndex + 1 === groupOfWord[focuses.groupIndex].content.length)
			{
				usedWord[groupOfWord[focuses.groupIndex].wordIndex] = false;
				clearInterval(groupOfInterval[focuses.groupIndex]);
				document.getElementById(groupOfWord[focuses.groupIndex].id).style.display = "none";

				scores += 5;
				finishedCounts++;
				document.getElementById("score").innerHTML = scores + "";

				finished[focuses.groupIndex] = true;

				focuses.groupIndex = -1;
				focuses.charIndex = -1;

				if(finishedCounts === counts && is_alive)
				{
					// Remove the words and animation please.. we're going to the next level
					for(var i = 0; i < groupOfInterval.length; i++)
					{
						clearInterval(groupOfInterval[i]);
						var child = document.getElementById(groupOfWord[i].id);
						child.parentNode.removeChild(child);
					}
					groupOfInterval = [];
					groupOfWord = [];

					var next_level = Number(document.getElementById("level").innerHTML) + 1;
					Game(next_level);
					gameStart();
				}
			}
		}
	});
}

// stop all animations when the game is over
function stop(){
	is_alive = false;
	for(var i = 0; i < groupOfWord.length; i++)
	{
		usedWord[i] = false;
		clearInterval(groupOfInterval[i]);
		document.getElementById(groupOfWord[i].id).style.display = "none";
		document.getElementById("health-value").innerHTML = 0 + "%";
	}
}

// return random integer value between min (included) and max (excluded)
function randomize(min, max){
	return min + Math.floor(Math.random() * (max - min));
}

// generate each node
function generate(){
	// generate more if the game hasn't finished
	if(objective > 0)
	{
		objective--;
		setTimeout(function(){
			if(is_alive)
			{
				createWordNode(pickWord(), randomize(leftBound, rightBound), 0);
				finished.push(false);
				generate();
			}
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
	new_node.style.fontSize = "24px";
	new_node.style.fontWeight = "bold";
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

	// apply and show
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
			console.log(life);
			finishedCounts++;
			// If dead, then stop
			if(life <= 0)
			{
				stop();
			}
			else
			{
				usedWord[groupOfWord[groupIndex].wordIndex] = false;
				node.style.display = "none";
				document.getElementById("health-value").innerHTML = life + "%";
				clearInterval(groupOfInterval[groupIndex]);
				finished[groupIndex] = true;
				if(groupIndex === focuses.groupIndex)
				{
					focuses.groupIndex = -1;
					focuses.charIndex = -1;
				}

				if(finishedCounts === counts && is_alive)
				{
					// Remove the words and animation please.. we're going to the next level
					for(var i = 0; i < groupOfInterval.length; i++)
					{
						clearInterval(groupOfInterval[i]);
						var child = document.getElementById(groupOfWord[i].id);
						child.parentNode.removeChild(child);
					}
					groupOfInterval = [];
					groupOfWord = [];

					var next_level = Number(document.getElementById("level").innerHTML) + 1;
					Game(next_level);
					gameStart();
				}
			}
		}
	}, 10));
}

// Main
Game(20);
gameStart();