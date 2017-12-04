// Game configuration
function Game(level = 1) {
  // array below contains objects: {id (string), x (int), y (int), content (string), speed (int), status (int)}
  this.groupOfWord = [];
  this.groupOfInterval = [];
  this.time = 0;
  this.score = 0;
  this.max_inventory = 5;
  this.life = 100;
  this.lowerBound = 550; // set lower bound in pixel
  this.leftBound = 10;   // set left bound in pixel
  this.rightBound = 700; // set right bound in pixel
  this.focuses = {       // set target focus
    groupIndex: -1,
    charIndex: -1
  };
  Level(level);          // set level
}

function Level(level){
  // movement speed in pixel per 10 miliseconds.
  this.speed = {
    low  : 4 * level / 50,
    high : 5 * level / 50
  };
  // generator speed in miliseconds.
  this.generate_interval = {
    low  : 5500 / (1 + level / 5),
    high : 12000 / (1 + level / 5)
  };
  // how many words provided in this level
  this.objective = 20 + level;
  document.getElementById("level").innerHTML = level + "";
}
