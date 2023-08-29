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