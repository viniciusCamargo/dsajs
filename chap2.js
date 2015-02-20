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


var nums = [2, 3, 4, 5];
var newnum = 1;
nums.unshift(newnum);
console.log(nums) // [ 1, 2, 3, 4, 5 ]
nums = [3, 4, 5];
nums.unshift(newnum,2); // [ 1, 2, 3, 4, 5 ]
console.log(nums);