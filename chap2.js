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




// // Shallow copy
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




// Deep copy
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




// Iterator functions that return a new array
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




// Two-dimensional and multimentional arrays
// Array.matrix = function(numrows, numcols, initial) {
//   var arr = [];
//   for (var i = 0; i < numrows; ++i) {
//     var columns = [];
//     for (var j = 0; j < numcols; ++j) {
//       columns[j] = initial;
//     }
//     arr[i] = columns;
//   }
//   return arr;
// }
// var nums = Array.matrix(5,5,0);
// console.log(nums); // [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ]
// var names = Array.matrix(3,3,"");
// names[1][2] = "Joe";
// console.log(names); // [ [ '', '', '' ], [ '', '', 'Joe' ], [ '', '', '' ] ]




// Processing two-dimensional array elements
// by row
// var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
// var total = 0;
// var average = 0.0;
// for (var row = 0; row < grades.length; ++row) {
//   for (var col = 0; col < grades[row].length; ++col) {
//     total += grades[row][col];
//   }
//   average = total / grades[row].length;
//   console.log("Student " + parseInt(row + 1) + " average " + average.toFixed(2));
//   total = 0;
//   average = 0.0;
// }

// // by column
// var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
// var total = 0;
// var average = 0.0;
// for (var col = 0; col < grades.length; ++col) {
//   for (var row = 0; row < grades[col].length; ++row) {
//     total += grades[row][col];
//   }
//   average = total / grades[col].length;
//   console.log("Test " + parseInt(col + 1) + " average " + average.toFixed(2));
//   total = 0;
//   average = 0.0;
// }




// Jagged arrays
// var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
// var total = 0;
// var average = 0.0;
// for (var row = 0; row < grades.length; ++row){
//   for (var col = 0; col < grades[row].length; ++col) {
//     total += grades[row][col];
//   }
//   average = total / grades[row].length;
//   console.log("Student " + parseInt(row + 1) + " average " + average.toFixed(2));
//   total = 0;
//   average = 0.0;
// }




// Arrays of objects
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// function displayPts(arr) {
//   for (var i = 0; i < arr.length; ++i) {
//     console.log(arr[i].x + ", " + arr[i].y);
//   }
// }
// var p1 = new Point(1,2);
// var p2 = new Point(3,5);
// var p3 = new Point(2,8);
// var p4 = new Point(4,4);
// var points = [p1, p2, p3, p4];
// for (var i = 0; i < points.length; ++i) {
//   console.log("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y);
// }
// var p5 = new Point(12,-3);
// points.push(p5); // add item to the end of array
// console.log("After push: ");
// displayPts(points);
// points.shift(); // delete first item of array
// console.log("After shift: ");
// displayPts(points);




// Arrays in objects
// function weekTemps() {
// 	this.dataStore = [];
// 	this.add = add;
// 	this.average = average;
// }

// function add(temp) {
// 	this.dataStore.push(temp);
// }

// function average() {
// 	var total = 0;
// 	for (var i = 0; i < this.dataStore.length; ++i) {
// 		total += this.dataStore[i];
// 	}
// 	return total / this.dataStore.length;
// }

// var thisWeek = new weekTemps();
// thisWeek.add(52);
// thisWeek.add(55);
// thisWeek.add(61);
// thisWeek.add(65);
// thisWeek.add(55);
// thisWeek.add(50);
// thisWeek.add(52);
// thisWeek.add(49);
// console.log(thisWeek.average());




// Exercises
// 1. Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

// function studentsGrades() {
// 	this.grades = [];
// 	this.addGrade = addGrade;
// 	this.gradesAverage = gradesAverage;
// }

// function addGrade(grade) {
// 	this.grades.push(grade);
// }

// function gradesAverage() {
// 	var total = 0;
// 	for (var i = 0; i < this.grades.length; ++i) {
// 		total += this.grades[i];
// 	}
// 	return total / this.grades.length;
// }

// var thisExam = new studentsGrades();
// thisExam.addGrade(8);
// thisExam.addGrade(6.5);
// thisExam.addGrade(7);
// thisExam.addGrade(10);
// thisExam.addGrade(9.5);
// thisExam.addGrade(4);
// thisExam.addGrade(6.5);
// thisExam.addGrade(8);
// console.log(thisExam.gradesAverage());




// To sum the content of array
// var foo = [];
// for (var i = 0; i < 10; ++i) {
// 	foo[i] = i + 1;
// }

// var total = 0;
// for (var i = 0; i < foo.length; ++i) {
// 	total += foo[i];
// }
// console.log(total);
// I could create this with a function and the add method.




// 2. Store a set of words in an array and display the contents both forward and backward.
// var sentence = "Store a set of words in an array";
// var wordsForward = sentence.split(" ");

// console.log(wordsForward); // [ 'Store', 'a', 'set', 'of', 'words', 'in', 'an', 'array' ]

// var wordsBackward = wordsForward.reverse();
// console.log(wordsBackward); // [ 'array', 'an', 'in', 'words', 'of', 'set', 'a', 'Store' ]

// 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.


// 4. Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

function individualLetters() {
	this.letters = [];
	this.addLetter = addLetter;
	this.formWord = formWord;
}

function addLetter(letter) {
	this.letters.push(letter);
}

function formWord() {
	var word = this.letters.join('');
	return word;
}

var myWord = new individualLetters();
myWord.addLetter("v");
myWord.addLetter("i");
myWord.addLetter("n");
myWord.addLetter("i");
myWord.addLetter("c");
myWord.addLetter("i");
myWord.addLetter("u");
myWord.addLetter("s");
console.log(myWord.formWord());