// var n = [];
// var n = [1, 2, 3]; // recommended way to form arrays

// var n = new Array();
// var n = new Array(1, 2, 3);

// var x = 1;

// console.log(Array.isArray(x)); // false
// console.log(Array.isArray(n)); // true




// var n = [];
// for (var i = 0; i < 100; ++i) {
// 	n[i] = i + 1;
// }

// console.log(n); // [1, 2, 3, ... 100]




// var n = [1, 2, 3];
// var s = 0;
// for (var i = 0; i < n.length; ++i) {
// 	s += n[i];
// }

// console.log(s); // 6




// var sentence = "the quick brown fox jumped over the lazy dog";
// var words = sentence.split(" ");

// console.log(Array.isArray(words)); // true
// console.log(Array.isArray(sentence)); // false

// console.log(words.length); // 9

// for (var i = 0; i < words.length; ++i) {
// 	console.log("word " + i + ": " + words[i]);
// }




// // shallow copy
// var nums = [];
// for (var i = 0; i < 10; ++i) {
// 	nums[i] = i+1;
// }

// var samenums = nums;

// console.log(nums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(samenums); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// nums[0] = 400;

// console.log(nums); // [ 400, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(samenums); // [ 400, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]




// // deep copy
// function copy(arr1, arr2) {
// 	for (var i = 0; i < arr1.length; ++i) {
// 		arr2[i] = arr1[i]; // assigning values to arr2 from arr1 *magic happens here*
// 	}
// }

// var nums = [];

// for (var i = 0; i < 10; ++i) {
// 	nums[i] = i+1;
// }

// var samenums = [];

// copy(nums, samenums);
// nums[0] = 400;

// console.log(nums[0]); // 400
// console.log(samenums[0]); // 1




// // Searching for value
// var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Raymond"];
// var name = "Vinicius";
// var position = names.indexOf(name); // return the position of the first occurrence or -1 if not found
// if (position >= 0) {
// 	console.log("Found " + name + " at position " + position);
// }
// else {
// 	console.log(name + " not found in array.");
// }

// console.log(position) // -1


// var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Raymond"];
// var name = "Raymond";
// var firstPos = names.indexOf(name); // return the position of the first occurrence or -1 if not found
// console.log("First found " + name + " at position " + firstPos);
// var lastPos = names.lastIndexOf(name); // return the position of the last occurrence or -1 if not found
// console.log("Last found " + name + " at position " + lastPos);



// // String representations of arrays
// var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
// var namestr = names.join();
// console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
// namestr = names.toString();
// console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer



// // Creating new arrays from existing arrays
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 0];
// var nArr = arr1.concat(arr2);
// console.log(nArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
// var nArr2 = arr2.concat(arr1);
// console.log(nArr2); // [ 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ]


// var arr1 = ["a", "b", "c", "d", "e", "f", "g"];
// console.log(arr1); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
// var arr2 = arr1.splice(3,2);
// console.log(arr2); // [ 'd', 'e' ]
// console.log(arr1); // [ 'a', 'b', 'c', 'f', 'g' ]



// // Adding elements to an array
// var n = [1, 2, 3, 4, 5];
// console.log(n); // [ 1, 2, 3, 4, 5 ]
// n.push(6);
// console.log(n); // [ 1, 2, 3, 4, 5, 6 ]


// var nums = [2, 3, 4, 5];
// //          0  1  3  4

// // console.log(nums); // [ 2, 3, 4, 5 ]

// var newnum = 1;
// var N = nums.length; // 4

// for (var i = N; i >= 0; --i) {
//   nums[i] = nums[i-1];
//   console.log(nums[i]);
// }

// // console.log(nums); // [ undefined, 2, 3, 4, 5 ]

// nums[0] = newnum;

// console.log(nums); // [ 1, 2, 3, 4, 5 ]


// var nums = [2, 3, 4, 5];
// var newnum = 1;
// nums.unshift(newnum);
// console.log(nums) // [ 1, 2, 3, 4, 5 ]
// nums = [3, 4, 5];
// nums.unshift(newnum,2); // [ 1, 2, 3, 4, 5 ]
// console.log(nums);



// Removing elements from an array
// var nums = [1, 2, 3, 4, 5, 9];
// var last = nums.pop();
// console.log(last); // 9
// console.log(nums); // [ 1, 2, 3, 4, 5 ]

// var nums = [9,1,2,3,4,5];
// for (var i = 0; i < nums.length; ++i) {
// 	nums[i] = nums[i+1];
// }
// console.log(nums); // [ 1, 2, 3, 4, 5, undefined 

// var nums = [6,1,2,3,4,5];
// var first = nums.shift();
// console.log(first); // 6
// console.log(nums); // [ 1, 2, 3, 4, 5 ]
// nums.push(first);
// console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]


// Adding or removing elements from the middle of an array
// var nums = [1,2,3,7,8,9];
// var newElements = [4,5,6];
// nums.splice(3,0,newElements);
// console.log(nums); // [ 1, 2, 3, [ 4, 5, 6 ], 7, 8, 9 ]

// var nums = [1,2,3,100,200,300,400,4,5];
// nums.splice(3,4);
// console.log(nums); // [ 1, 2, 3, 4, 5 ]




// Putting array elements in order
// var nums = [1,2,3,4,5];
// nums.reverse();
// console.log(nums); // [ 5, 4, 3, 2, 1 ]

// var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond","Cynthia"];
// names.sort();
// console.log(names); // [ 'Bryan','Clayton','Cynthia','Cynthia','David','Mike','Raymond' ]

// var nums = [3,1,2,100,4,200];
// nums.sort();
// console.log(nums); // [ 1, 100, 2, 200, 3, 4 ]

// function compare(num1, num2) {
// 	return num1 - num2;
// }

// var nums = [3,1,2,100,4,200];
// nums.sort(compare);
// console.log(nums); // [ 1, 2, 3, 4, 100, 200 ]




// Non-array-generating iterator functions
// function square(num) {
// 	console.log(num, num * num);
// }

// var nums = [1,2,3,4,5,6,7,8,9,10];
// nums.forEach(square);

// function isEven(num) {
// 	return num % 2 == 0;
// }

// var nums = [2,4,6,8,10];
// var even = nums.every(isEven);
// if (even) {
// 	console.log("all numbers are even");
// }
// else {
// 	console.log("not all numbers are even");
// }

// function isEven(num) {
// 	return num % 2 == 0;
// }
// var nums = [1,2,3,4,5,6,7,8,9,10];
// var someEven = nums.some(isEven);
// if (someEven) {
// 	console.log("some numbers are even");
// }
// else {
// 	console.log("no numbers are even");
// }
// nums = [1,3,5,7,9];
// someEven = nums.some(isEven);
// if (someEven) {
// 	console.log("some numbers are even");
// }
// else {
// 	console.log("no numbers are even");
// }

// function add(runningTotal, currentValue) {
// 	return runningTotal + currentValue;
// }
// var nums = [1,2,3,4,5,6,7,8,9,10];
// var sum = nums.reduce(add);
// console.log(sum); // 55

// function concat(accumulatedString, item) {
// 	return accumulatedString + item;
// }
// var words = ["the ","quick ","brown ","fox"];
// var sentence = words.reduce(concat);
// console.log(sentence); // the quick brown fox

// function concat(accumulatedString, item) {
// 	return accumulatedString + item;
// }
// var words = ["the ","quick ","brown ","fox "];
// var sentence = words.reduceRight(concat);
// console.log(sentence); // fox brown quick the

// function curve(grade) {
//   return grade += 5;
// }
// var grades = [77,65,81,92,93];
// var newgrades = grades.map(curve);
// console.log(newgrades); // [ 82, 70, 86, 97, 98 ]

// function first(word) {
//   return word[0];
// }
// var words = ["for", "your", "information"];
// var acronym = words.map(first);
// console.log(acronym.join("")); // fyi

// function isEven(num) {
//   return num % 2 == 0;
// }
// function isOdd(num) {
//   return num % 2 != 0;
// }
// var nums = [];
// for (var i = 0; i < 20; ++i) {
//   nums[i] = i+1;
// }
// var evens = nums.filter(isEven);
// console.log("Even numbers: ");
// console.log(evens); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
// var odds = nums.filter(isOdd);
// console.log("Odd numbers: "); 
// console.log(odds); // [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]

// function passing(num) {
//   return num >= 60;
// }
// var grades = [];
// for (var i = 0; i < 20; ++i) {
//   grades[i] = Math.floor(Math.random() * 101);
// }
// var passGrades = grades.filter(passing);
// console.log("All grades: "); // EXEMPLE: [ 21, 45, 88, 50, 61, 33, 56, 27, 39, 18, 59, 32, 9, 72, 49, 74, 0, 71, 32, 21 ]
// console.log(grades);
// console.log("Passing grades: ");
// console.log(passGrades); // [ 88, 61, 72, 74, 71 ]

// function afterc(str) {
//   if (str.indexOf("cie") > -1) {
//     return true;
//   }
//   return false;
// }
// var words = ["recieve", "deceive", "percieve", "deceit", "concieve", "vinicius"];
// var misspelled = words.filter(afterc);
// console.log(misspelled); // [ 'recieve', 'percieve', 'concieve' ]