/*var yourAge = prompt("What is your Age");
var outPut = yourAge * 365;
console.log(yourAge);
alert(outPut);
/*var myFirstName = prompt("What is your first name");
var myLastName = prompt("what is your last name");
var myAge = prompt("what is your age");
alert("Welcome, " + myFirstName + " " + myLastName);
alert("Your age is " + myAge);
console.log("from the script file");*/
function jess(curly) {
    if (curly) {
      return "it's curly";
    }
    return "it's not curly";
  }
  
  console.log(jess(false));

  /*function testElseIf(val) {
  if (val > 10) {
    return "Smaller than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }

}

console.log(testElseIf(7));

var x = 10;
var y = "a";
y ==="b" ||x >= 10;*/

/*let twoFer = (name = 'you') => {
  return `One for ${name}, one for me.`;
};
console.log(twofer());*/

           /* let id = `undefined`;
            console.log(id);
            //outputs: undefined

            if(id !== 'undefined') {
            console.log(`Not this ${id}`)
            } else {
              console.log('mission')
            }
            //outputs: Not this undefined*/

/*if (id = ``) {
  console.log(`This ID id ${id}`)
} else {
  console.log(`No ID`);
}*/

/*let COLORS = ['black', 'white', 'brown', 'orange'];

function colorCode() {
  return COLORS.indexOf('orange');
};

console.log(colorCode());

let a = ['dog', 'cat']

let greetings = ['Happy Birthday!', 'Merry Christmas my love', 'A Happy Christmas to all the family', 'You"re all I want for Christmas', 'Get well soon'];

for (i = 0; i < greetings.length; i++) {
  if (greetings[i].includes('Christmas')) {
    console.log(i);
  }
}
let input = 'NEWBURY';
let output = input.replace('EWBURY', 'ewbury');
console.log(output)
let de = 123: 290:
alert('your ip address is' + de)

let version = 500;
for (let s = 2; s < version; s++) {
  if (version % s === 0) {
    return false;
  }
    console.log(s)
}

console.log(izPrime(500));

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num;
}
for (let a = 500; a >= 2; a--) {
  console.log(isPrime(a))
}

function armstrong(motion) {
  let derick = String(motion);
  let grape = derick.length;unt
  let sed = 0;
  for (let i = 0; i < grape; i++) {
    let gent = sed += Math.pow(Number(derick[i]), grape);
    if (gent === motion) {
      return "This is Armstrong reporting from the moon, who's on the line";
    }
  }
  return false;
}

console.log(armstrong(1634));*/

for (let count = 0; count < 100; count++) {
  if (count % 3 == 0) {
    console.log('Fizz');
  }
  
  if (count % 3 == 0 && count % 5 == 0) {
    console.log('Buzz');
  }

  console.log(count);
}


let output = '';
for (let n = 1; n <= 100; n++) {
  if (n % 3 == 0) output += 'Fuzz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n);
}

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

let board = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ";
console.log(board);

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < 10; count++) {
    result *= base;
  }
  return result;
};
console.log(power(2, 10));

/*function patternBuilder(length) {
  let pattern = ' #';
  for (let n = 1; n < length; n++) {
   pattern += ' #';
  };
  return pattern;
};function patternBuilderr(length, height) {
  let pattern = ' #', pattern2 = '# ';
  for (let n = 1; n < length; n++) {
    pattern += ' #', pattern2 += '# ';
  }
  //return patternUnit = pattern + '\n' + pattern2;
for (let n = 2; n <= height; n++) {
  console.log(pattern);
  if (n % 2 === 1 && n === height + 1) {
    break;
  } else {
    console.log(pattern2);
  }
}
}
console.log(patternBuilderr(6, 5));


function patternBuilder2(height) {
  let pattern2 = '# ';
  for (let n = 1; n < height; n++) {
   pattern2 += '# ';
  }
  return '\n' + pattern2;
};


 let patternConstructor = patternBuilder(4) + patternBuilder2(4);
 let height = 4;
 for (let n = 0; n < height; n++) {
   console.log(patternConstructor);
 }
let mixedChar = '8923A';*/

//Builds a  specific pattern of whatever grid size; let say like 8x8
function patternBuilderr(length, height) {
  let pattern = ' #', pattern2 = '# ', newHeight = height / 2;
  if(height % 2 === 1) newHeight += 0.5;  
  for (let n = 1; n < length; n++) {
    pattern += ' #', pattern2 += '# ';
  }
  for (let n = 1; n <= newHeight; n++) {
    console.log(pattern);
    if (height % 2 === 1 && n === newHeight) break;
    else console.log(pattern2);
  }
}
console.log(patternBuilderr(8, 8));


//Checks for number of times a character appeared in a string.
let sampleString = prompt("input a string");
function occurCheck(times) {
  let occur = "";
  for (let n = 0; n < sampleString.length; n++) {
    if (sampleString[n] === times) occur += sampleString[n];
  } 
  if (occur.length === 0) return 'Not Found'; 
  return occur.length;
}
console.log(occurCheck(prompt()));

//Check if a number is even.
let evenNum = Number => {
  if (Number % 2 === 0) return "This is an Even number";
  else return "No, you entered an odd number";
}
console.log(evenNum(7));

//Check if a word or letter exist in a string.
let sampleSentence = 'The coronavirus caused a pandemic during 2020. Okay, just delete China, and reinstall 2020 file';
let wordCheck = "pandemic";
console.log(`The word ${wordCheck} ${sampleSentence.includes(wordCheck) ? "is" : "isn't"} in the sentence`);
