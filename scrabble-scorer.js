// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
	for (let i = 0; i < word.length; i++) {
	  for (const pointValue in oldPointStructure) {
		 if (oldPointStructure[pointValue].includes(word[i])) {
      //Convert letterPoints to numbers and sum the values
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function initialPrompt() {
  console.clear();
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const onePointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z']
};
//let simpleScore;
function simpleScore(word){
  word = word.toUpperCase();
	let singlePointScoring = "";
  for(let i = 0; i < word.length; i++){
    for (const pointValue in onePointStructure) {
		 if (onePointStructure[pointValue].includes(word[i])) {
			singlePointScoring += `Points for '${word[i]}': ${pointValue}\n`
     }
	  }
  }
  return singlePointScoring;
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const vowelPointStructure = {
  1: ['L', 'N', 'R', 'S', 'T', 'D', 'G', 'B', 'C', 'M', 'P', 'F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};
function vowelBonusScore(word){
  word = word.toUpperCase();
	let vowelBonusPoints = "";
  for(let i = 0; i < word.length; i++){
    for (const pointValue in vowelPointStructure) {
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			  vowelBonusPoints += `Points for '${word[i]}': ${pointValue}\n`
     }
	  }
  }
  return vowelBonusPoints;
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function transform(pointStructureParameter) {
  //pointStructureParameter = pointStructureParameter.tolowerCase();
  let newStructure = {};
  for (let key in pointStructureParameter){
    let newKeys = pointStructureParameter[key];
    for (let i = 0; i < newKeys.length; i++){
      newStructure[newKeys[i]] = (key);
    }
  }
  return(newStructure);
};
let newPointStructure = (transform(oldPointStructure));

function scrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "abcd";
  let outputScore = 0;
  //console.log(outputScore);
  for ( i = 0; i < word.length; i++) {
    outputScore = outputScore + Number(newPointStructure[word[i]]);
    //console.log(newPointStructure[word[i]]);
  }
  return outputScore;
}  
// let reviewObject = {
//   a:1
//   b:3
//   c:3
//   d:2
// };
//let review string = "abcd";
//let outputscore = 0;
//for ( i = 0; i < word.length; i++) {
//  outputScore = outputScore + reviewObject[reviewString[i]];
//}

// 	let letterPoints = "";
// 	for (let i = 0; i < word.length; i++) {
// 	  for (const pointValue in newPointStructure) {
// 		 if (newPointStructure[pointValue].includes(word[i])) {
//       //Convert letterPoints to numbers and sum the values
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }
// 	  }
// 	}
// 	return letterPoints;
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//write scrabbleScore() to use newPointStructure and return a cumulative score for the whole word entered.
// function scrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = "";
// 	for (let i = 0; i < word.length; i++) {
// 	  for (const pointValue in newPointScore) {
// 		  if (newPointScore[pointValue].includes(word[i])) {
//       //Convert letterPoints to numbers and sum the values
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		  }
// 	  }
//     return letterPoints;
// 	}
	
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// scrabbleScorer();
let singlePointScorer = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoreFunction: simpleScore
};
let vowelScorer = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: vowelBonusScore
};
let scrabbleScore = {
  name: "Scrabble New Point Scoring",
  description: "The new point scoring algorithm.",
  scoreFunction: scrabbleScorer
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const scoringAlgorithms = [singlePointScorer, vowelScorer, scrabbleScore];
function scorerPrompt() {
  let word = input.question("Let's play some scrabble!\n\n"+"Enter a word to score: ");
  let scoringPrompt = Number(input.question("Which scoring algorithm would you like to use?\n\n" + "0 - Simple: One point per character\n" + "1 - Vowel Bonus: Vowels are worth 3 points\n" + "2 - Scrabble: Uses scrabble point system\n" + "Enter 0, 1, or 2: "));
    //"Select which scoring algorithm to use: "
  // let scoreDisplay = 
  //console.log("Score for '" + word + "':" );
  if (scoringPrompt === 0){
    console.log("algorithm name: ", scoringAlgorithms[0].name);
    console.log("scorerFunction result: ", scoringAlgorithms[0].scoreFunction(word));
  }  
  else if(scoringPrompt === 1){
    console.log("algorithm name: ", scoringAlgorithms[1].name);
    console.log("scorerFunction result: ", scoringAlgorithms[1].scoreFunction(word));
  }
  else if(scoringPrompt === 2){
    console.log("algorithm name: ", scoringAlgorithms[2].name);
    console.log("scorerFunction result: ", scoringAlgorithms[2].scoreFunction(word));
  }
  // return scoreDisplay;
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Once you've defined newPointStructure, use it to finish writing the scrabbleScore() function and then replace the oldScrabbleScorer() function in scoringAlgorithms with this new function.
// Tip
// oldScrabbleScorer() uses oldPointStructure and returns a score for each letter in a word. You'll want to write scrabbleScore() to use newPointStructure and return a cumulative score for the whole word entered.
function runProgram() {
  //initialPrompt(); 
  scorerPrompt();
  //console.log (newPointStructure);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

