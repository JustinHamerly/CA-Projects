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




