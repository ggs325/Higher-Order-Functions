const createPlayer = function(name, score) {
  name: name,
    score. score,
    summary. {name} has {score} points
};


const getWinner = function(player1, player2) {
  // your code here
};


const p1 = createPlayer("Ada", 120);
const p2 = createPlayer("Kaz", 95);


console.log(p1.name);       // → "Ada"
console.log(p2.score);      // → 95
console.log(p1.summary);    // → "Ada has 120 points"
console.log(getWinner(p1, p2)); // → "Ada"
