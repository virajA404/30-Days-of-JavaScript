//Level 1

//1
let challenge = '30 Days Of JavaScript'
//2
console.log(challenge)
//3
console.log(challenge.length)
//4
console.log(challenge.toUpperCase());
//5
console.log(challenge.toLowerCase());
//6
console.log(challenge.substring(4,8))
//7
console.log(challenge.substring(3,21));
//8
console.log(challenge.includes("Days"));
//9
console.log(challenge.split(''));
//10
console.log(challenge.split(' '));

//11 
let arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(arr.split(' ,'));

//12
console.log(challenge.replace('JavaScript', 'Python'));

//13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt('J'));

//15
console.log(challenge.indexOf('a'));

//16
console.log(challenge.lastIndexOf('a'));

//17
let sentence = "  You cannot end a sentence with because because because is a conjunction  ";
console.log(sentence.indexOf('because'));

//18
console.log(sentence.lastIndexOf('because'));

//19
console.log(sentence.search('because'));

//20
console.log(sentence.trim());

//21
console.log(challenge.startsWith('3'));

//22
console.log(challenge.endsWith('t'))

//23
console.log(challenge.match('a'))

//24
console.log(challenge.concat('30 Days of', 'JavaScript'))

//25
console.log(challenge.repeat(2));


//Exercise level 2
//1
console.log('There is no exercise better for the heart than reaching down and lifting people up.')

//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//3
let num = '10';

let num2  = 10;

console.log(num == num2);

//4
console.log(Math.round(parseFloat('9.8')) == 10)

//5
let word1 = 'python';
let word2 = 'jargon';

console.log(word1.match("on"))
console.log(word2.search("on"))

//6
let sentence1 = "I hope this course is not full of jargon."
console.log(sentence1.match('jargon'));

//7
console.log(Math.floor(Math.random()*101))

//8
console.log(Math.floor(Math.random()*51)+50)

//9
console.log(Math.floor(Math.random()*255))

//10
let string = 'JavaScript'
console.log(string.charAt(Math.floor(Math.random() * string.length)))

//11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t4\t8\n')

//12
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.substr(31,23))