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

//level 3
//1
let sentence3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log((sentence3.match(/love/gi)).length)

//2
let sentece4 = 'You cannot end a sentence with because because because is a conjunction'
console.log((sentece4.match(/because/gi)).length)

const sentence6 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern = sentence6.match(/%/gi)
console.log(sentence6.replace(pattern, " "))

// //4
// let sentece5 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
// let regEx = /\d+/
// let amount = console.log((sentece5.match(/\d+/g)))

// console.log(amount.charAt(0))

