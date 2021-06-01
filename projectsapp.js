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