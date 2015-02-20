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


var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "Raymond"];
var name = "Raymond";
var firstPos = names.indexOf(name); // return the position of the first occurrence or -1 if not found
console.log("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name); // return the position of the last occurrence or -1 if not found
console.log("Last found " + name + " at position " + lastPos);
