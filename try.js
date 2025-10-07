// console.log()
console.log("hello world");
//variables
//let → can be reassigned
//const → cannot be reassigned (once given a value, it’s fixed)
const age=23;
let year={};
// block scoped
//variables declared inside a block { ... } 
//can only be accessed within that block.
console.log(year);
console.log(age);
console.log(typeof(year));

//staticlly typed int x=0; not change the type of the value
// Dynamically typed let x=0; can be changed to x="helen"
//chnage of the type value

let fname=" gelila";
let lname="Sint";
// use concatination
let fullName=fname+" "+lname;
console.log(fullName);

// Template String
let message=`hi ${fullName}`
console.log(message);

//length=the length of the letters
console.log(fullName.length);
// trim=remove white space at the beginning or ending of the string
console.log(fullName.trim())
// slice(start, end)
console.log(fullName.slice(0,4));
//replace(replacee,replacer)
console.log(fullName.replace("gel","del"));
console.log(x);
//split
// fullName.split()
// Arthimetic operater(+,-,*,/,%,**(power))
//const Math.random()*(6-2+1)+1;//between 2 and 6 included
//const Math.random()*(6-2+1);// not included

// TYpe conversion
