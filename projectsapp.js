// PROJECT 1 - KELVIN WEATHER

const kelvin = 44;
// assigning variable kelvin to 293
let celsius = kelvin - 273;
// assigning variable celsius by subtracting from variable kelvin
let fahrenheit = celsius * (9/5) + 32;
// assigning variable fahrenheit to the formula for conversion from variable celsius
fahrenheit = Math.floor(fahrenheit);
// takes the value of fahrenheit and rounds it down to the nearest integer
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(newton);




// PROJECT 2 - DOG YEARS

const myAge = 12;
// assigns myAge variable to an age
let earlyYears = 2;
// assigns earlyYears variable to a number
earlyYears *= 10.5;
let laterYears = myAge - 2;
// assigns laterYears variable to 2 less than myAge variable
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
// assigns myAgeInDogYears variable to the sum of earlyYears and laterYears
let myName = 'Justin Hamerly'.toLowerCase();
console.log(`My name is ${myName}.  I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// Console logs the string of text for my age in both human and dog years.




// PROJECT 3 - CONDITIONALS - MAGIC 8 BALL

let userName = 'Justin';
// assigns userName to an empty string.  This is a falsy value
userName ? console.log(`Hello, ${userName} !`) : console.log('Hello!')
// checks if userName is true.  if true will log  'Hello _____!'  if false will just log 'Hello!'
let userQuestion = 'Will I win the lottery?';
// assigns userQuestion to the string 'Will I win the lottery?'
console.log(userName + ' asked ' + userQuestion);

let randomNumber = Math.floor(Math.random() *8)
//randomNumber will be a random number between 0 and 7.  Math.random() picks a decimal between 0 (inclusive) and 1 (exclusive) and Math.floor() rounds the value down to the nearest integer.
let eightBall = '';

switch(randomNumber){
  case 0 : 
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
 case 5 :
    eightBall = 'My sources say no';
    break;
 case 6 :
    eightBall = 'Outlook not so good';
    break;
 case 7 :
    eightBall = 'Signs point to yes';
    break;
}
//assigns a string to eightBall based on randomNumber

console.(eightBall);
//logs the string assigned to eightBall




// PROJECT 4 - CONDITIONALS - RACE DAY

let raceNumber = Math.floor(Math.random() * 1000);

const raceEarly = true;

const age = 18;

if (raceEarly && age > 18){
  raceNumber += 1000;
  console.log(`You will race at 9:30 AM.  Your number is ${raceNumber}`);
}
else if (!raceEarly && age > 18){
  console.log(`You will race at 11:00 AM.  Your number is ${raceNumber}`)
}
else if(age < 18){
  console.log(`You will race at 12:30AM.  Your number is ${raceNumber}`)
}
else {
  console.log('See the registration desk.')
}

// while age is 18 message will always read See the registration desk.  Adults who register early will race at 9:30 and be given a number over 1000.  Adults who register late will go at 11:00 and be given a race number under 1000.  All minors will race at 12:30 with a number under 1000.




// PROJECT 5 - FUNCTIONS - ROCK, PAPER, SCISSORS

//user selects rock,paper,or scissors using userInput parameter
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }else if (userInput === 'bomb'){
    return 'bomb'
  }else{
    return '....';
  }
}
//computer selects rock, paper or scissors randomly
const getComputerChoice = () => {
  compInput = Math.floor(Math.random() * 3);
  switch (compInput){
    case 0 :
      return 'rock';
    case 1 :
      return 'paper';
    case 2 :
      return 'scissors';
  }
}
// compares userChoice to computerChoice
function determineWinner(userChoice,computerChoice){
    if (userChoice === 'bomb'){
        return 'EXPLOSION!  AUTOWIN';
  } else if (userChoice === computerChoice){
    return 'Tie!';
  } else if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Lose!';
     } else {
        return 'Win!';
     }
  } else if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
       return 'Lose!';
     } else {
       return 'Win!';
     }
  } else if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Lose!';
    } else {
      return 'Win!';
    }
  } else {
    return 'Please select rock, paper or scissors'
  }
}
// change getUserChoice to another string to play in the console
function playGame(){
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You chose ' + userChoice + '!');
  console.log('The computer chose ' + computerChoice + '!');
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();




// PROJECT 6 - FUNCTIONS - SLEEP DEBT CALCULATOR

//assigns default sleep hours to each day of the week
const getSleepHours = day => {
  switch (day){
  case 'monday' :
    return 8;
  case 'tuesday' :
    return 8;
  case 'wednesday' :
    return 8;
  case 'thursday' :
    return 8;
  case 'friday' :
    return 8;
  case 'saturday' :
    return 8;
  case 'sunday' :
    return 8;
  }
}
//function gets actual hours with no parameters in the function using concise body form
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
//function for getting ideal sleep hours
const getIdealSleepHours = () =>{
  const idealHours = 8.5;
  return idealHours * 7;
}
//calculates sleep debt
const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDebt = getIdealSleepHours() - getActualSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log(`You sleept an ideal amount!  Congratulations! Your sleep debt is ${sleepDebt}`);
  } else if (actualSleepHours > idealSleepHours){
        console.log(`You slept too much!  Your sleep debt is ${sleepDebt} hours`);
  } else {
    console.log(`Time to sleep... you need ${sleepDebt} hours of sleep!`)
  }
}

calculateSleepDebt();




//PROJECT 7 - SCOPE - TRAINING DAYS
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  
  return days;
};

const name = 'Nala';
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Justin';

logEvent(name2, event2)
logTime(name2, days2)
