// Game configuration, default = 1 if parameter is empty
function Game(level = 1) {
  // There will be no same words appearing at the same time.
  // usedWord are the flags, contains booleans
  this.usedWord = [];
  // array below contains object information: {id (string), x (int), y (int), content (string), speed (int), status (int), drop: (int)};
  this.groupOfWord = [];
  // array below contains intervals for moving animation
  this.groupOfInterval = [];
  // array of booleans, true if the object is finished and disappeared, false if it's still in motion
  this.finished = [];

  /*  NOTE : TO UNDERSTAND THE ATTRIBUTES OF THIS GAME, READ THE COMMENTS BELOW                                                       */
  /*  - those last three arrays above are related corresponding to their index.                                                       */
  /*  - the first index is the first word that appears on screen, second is second, and so on...                                      */
  /*  - In a nutshell, every word in the game that falls is registered in these three arrays according to the time in ascending order */
  /*  - All the properties are shown below                                                                                            */

  this.uninterrupted = true; // is another event still running?
  this.fired = false;      // is your keyboard pressed?
  this.finishedCounts = 0; // how many words have disappeared
  this.time = 0;           // (not active yet)
  if(!this.scores)         // if score set, continue, if not set to 0
    this.scores = 0;
  if(!this.life)           // if life set, continue, if not set to 100
    this.life = 100;
  this.max_inventory = 5;
  this.is_alive = true;    // if health is not zero then alive, true at initial state
  this.lowerBound = 550;   // set lower bound in pixel
  this.leftBound = 10;     // set left bound in pixel
  this.rightBound = 650;   // set right bound in pixel
  this.focuses = {         // set target focus
    groupIndex: -1,
    charIndex: -1
  };
  this.focusesSpell = -1;  // spell index focus
  Level(level);            // set level
  for(var i = 0; i < listOfWord.length; i++)
    usedWord.push(false);

}

function Level(level){
  // movement speed in pixel per 10 miliseconds.
  this.speed = {
    low  : 4 * level / 50,          // the minimum speed on current level
    high : 5 * level / 50           // the maximum speed on current level
  };
  // generator speed in miliseconds.
  this.generate_interval = {
    low  : 5500 / (1 + level / 5),  // the minimum generator speed on current level
    high : 12000 / (1 + level / 5)  // the maximum generator speed on current level
  };
  // how many words provided in this level
  this.objective = 1 + level;       // how many words left on current level
  this.counts = this.objective;     // how many words are on current level
  document.getElementById("level").innerHTML = level + "";
}
