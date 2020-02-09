const skillsForFrontendEngineer = ["html", "css", "js"];
console.log(skillsForFrontendEngineer);
console.log(typeof skillsForFrontendEngineer);

let array;
array = [1,5, 4, 9];
console.log(array.length);
console.log(Array.isArray(array));
console.log(array[4]);
array[0]  = 6;
console.log(array);

// How to reverse a string.
//.split -> .reverse -> .join
//use for loop with reverse iteration.

//methods in array
array.push(500); // adds to the end of the array
array.unshift(1);//add to the begining of the array.
array.pop(); // removes the last element of the array.
array.shift();//removes the first element of the array.


//sort number
//you need to use a compare function to s0rt number in ascending number for descending use b-a.
array.sort(function(a,b) {
    return a-b;
});


var array = [1,2,3,4,5,1,1,1];
array.splice(0,1);
array.reverse();
console.log(array);

var array = [1,6,3];
var array1 = [4,5];
const val=array.concat(array1);
val.sort();
console.log(val);

var ar = [1,5,4,9,7,29,100,75];
console.log(ar.sort());
ar.sort(function(a,b) {
    return a-b;
});
console.log(ar);

// find number based on a condition and return the first match. i.e num less than 100

function lessthan100(num) {
    return num < 100;
}

let number = ar.find(lessthan100);
