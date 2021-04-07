// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
      counter1 will remember the last time it was called and increment accordingly. counter2 will always return 1.

  2. Which of the two uses a closure? How can you tell?
    counter1 uses a closure. I can tell because it is referencing a function inside itself.

  3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
    counter1 would be preferable in a scenario where you need to keep track of something. counter2 would be preferable in a scenanrio where you need the same thing returned every time.  
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
    return Math.floor(Math.random() * 3);
}


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(callback, numOfInnings){
  let scores = {
    "Home": 0,
    "Away": 0
  };
    for(let i = 0; i < numOfInnings; i++){
      scores["Home"] += callback();
      scores["Away"] += callback();
    }
  return scores;
}

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

  function getInningScore(callback) {
    let singleInning = {
      "Home": 0,
      "Away": 0
    };
    
    singleInning["Home"] = callback();
    singleInning["Away"] = callback();
    return singleInning;  
  }


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(cb1, cb2, numOfInnings) {
  // create the array to be returned
  let allInnings = [];
  // create variable to hold getInningScore(inning())
  let singleInning;
  // create variable for the result string
  let singleInningResult;
  // create variables for final scores
  let homeFinal = 0;
  let awayFinal = 0;
  // array to collect scores for processing into final scores later
  let allScores = [];
  // loop for numOfInnings
  for(let i = 0; i < numOfInnings; i++){
    // use singleInning to call getInningScore, pass inning as arg
    singleInning = cb1(cb2);
    // assign home variable
    let home = singleInning.Home;
    // assign away variable
    let away = singleInning.Away;
    // create variable to hold string
    singleInningResult = `Inning ${i + 1}: Away ${away} - Home ${home}`;
    // push single innings to allScores for processing final
    allScores.push(singleInning);
    // push string to new allInnings array
    allInnings.push(singleInningResult); 
  }
  // reduce to add home scores per inning
  homeFinal = allScores.reduce((acc, score) => acc + score["Home"], 0);
  // reduce to add away scores per inning
  awayFinal = allScores.reduce((acc, score) => acc + score["Away"], 0);
  // string to display if a tie
  let tie = `This game will require extra Innings: Away ${awayFinal} - Home ${homeFinal}`;
  // string to display if not a tie
  let noTie = `Final Score: Away ${awayFinal} - Home ${homeFinal}`;
  // find out if there's a tie
  if(homeFinal !== awayFinal){
    // push noTie string to allInnings array if there's no tie
    allInnings.push(noTie);
  }else{
    // push tie string to allInnings array if there is a tie
    allInnings.push(tie);
  }
  // return the allInnings array
  return allInnings;
}


console.log(scoreboard(getInningScore, inning, 9));




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  //console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
