let word = "javascript"

console.log(word);

const PI = Math.PI
console.log(PI);

console.log(Math.round(PI));

console.log(Math.round(9.81));

console.log(Math.floor(9.81));

console.log(Math.ceil(9.81));

console.log(Math.min(0,-5, 8 ,2,1));

console.log(Math.max(0,-5, 8 ,2,1));

const num = Math.random();
console.log(num);

const num2 = Math.floor(Math.random()* 11);
console.log(num2);

console.log(Math.abs(-10.2))

console.log(Math.sqrt(100))

console.log(Math.pow(3,2))

console.log(Math.E)

console.log(Math.log(10))

console.log(Math.LN2)

console.log(Math.LN10)

console.log(Math.sin(90))
console.log(Math.cos(0))
console.log(Math.tan(180))

const paragraph = "My name is \\Asabeneh Yetayeh. I live in Finland, Helsinki.\nI am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, \tData Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a \'Python\' challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the \"30DaysOfJavaScript\" challenge and \
I hope you are enjoying too."

console.log(paragraph)

let a = 4
let b = 5
console.log(`The sum of ${a} and ${b} is ${a +b}`)

//String methods

//1 length:
let name2 = "Viraj "
console.log(name2.length)

//2 accessing characters in a string
let string = "Javascript"
let firstLetter = string[0]
console.log(firstLetter)
let secondLetter = string[1]
console.log(secondLetter)

let lastLetter = string[string.length-1]
console.log(lastLetter)

//3 toUpperCase()
let string1 = "Viraj"
console.log(string1.toUpperCase())

//4 toLowerCase()
console.log(string1.toLowerCase());

//5. substr(): It takes two arguments, the starting index and number of characters to slice. - not is use
console.log(string1.substr(2,5))
console.log(string1.substr(3,4))

//6.substring()  It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(0,4))
console.log(string.substring(3,10))
console.log(string.substring(3,9))

//7.split() The split method splits a string at a specified place.
let string3 = '30 Days Of JavaScript  '

console.log(string3.split(''))     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string3.split(', '))

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))

//8. trim() The trim method removes whitespace in the beginning and end of the string.
console.log(string3.trim(' '))

// 9. includes(): It takes a substring argument and it checks if substring argument 
// exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
console.log(string3.includes('Days '))
console.log(string3.includes('of'))

//10. replace(): takes as a parameter the old substring and a new substring.
console.log(string3.replace('JavaScript', 'Python'))
console.log(string3.replace('JavaScript', 'React'))

//11.charAt(): Takes index and it returns the value at that index
console.log(string3.charAt(2))
console.log(string3.charAt(6))

//12.charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
console.log(string3.charCodeAt(3))

//13. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(string3.indexOf('q'))

//14. lastIndexOf() Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
console.log(string3.lastIndexOf('Java'))

//15. concat() Takes many substring and joins them together
console.log(string3.concat('I ', 'love ', 'it.'))

//16. startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(string3.startsWith('30'))

//17. endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
console.log(string3.endsWith('d'))

