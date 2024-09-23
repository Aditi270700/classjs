 let sum = null;
 console.log (typeof(sum));

 sum = 90;
 console.log (typeof(sum));

 sum = "sdfdsf";
 console.log (typeof(sum));

//  bigint datatype
let num = 1549849865656956565n;
let num1 = 56n;
console.log(num + num1);
console.log(typeof(num));

// symbol datatype
let a = symbol("Aditi");
let b =  symbol("Aditi");
console.log(a===b);

let c = ('45');
let d = ('45');
console.log(c===d);