// pop is used to delete last value
// push is used to take last value
// shift is used to delete first value 
// unshift is used to take first value
// delete is to delete value but we not used to beacuse it leave empty
let arr = [78,89,5677,45,987,78];
console.log(arr.length);
arr.pop();
arr.pop();
console.log(arr);

arr.push("hello");
console.log(arr);

 arr.shift();
 console.log(arr);

 arr.unshift(7777);
 console.log(arr);

 delete arr[2];
 console.log(arr);

//  arr.splice(startfrom,howmany,addhowmany)
arr.splice(0,1);
console.log(arr);