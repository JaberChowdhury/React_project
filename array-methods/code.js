/**
 *
 * 🫒 Title : Array methods
 * 🫒 Description : Exploring all array methods
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Github : https://github.com/JaberChowdhury
 * 🫒 Date : 26 December 2023
 *
 **/

const array = [3, 7, 5, 2, 9];

array.at(1); // 7
array.concat(array); // [3,7,5,2,9,3,7,5,2,9]
array.constructor; // [Function: Array]
array.copyWithin(1, 2); // [ 3, 5, 2, 9, 9 ]
array.entries(); // [[0,3],[1,7],[2,5],...]
array.every((d) => d > 3); // false
array.fill(2); // [2,2,2,2,2]
array.filter((d) => d < 4); // [3,2]
array.find((d) => d > 4); // 7
array.findIndex((d) => d > 4) // 1
[([1, 2], [3, 4], [5, 6])].flat(); // [ 1, 2, 3, 4, 5, 6 ]
array.flatMap((d) => d * 2); // [ 6, 14, 10, 4, 18 ]
array.forEach((d) => console.log(d));
Array.from("1234"); // [ '1', '2', '3', '4' ]
array.includes(5); // true
array.indexOf(5); // 5
Array.isArray(array); // true
array.join(""); // 37529
array.keys(); // [0,1,2,3,4]
array.lastIndexOf(2); // 3
array.length; // 5
array.map((d) => d * 3); // [ 9, 21, 15, 6, 27 ]
array.pop(); // 9
Array.prototype; // add custom array methods
array.push(1); // 6
array.reduce((current, sum) => current + sum); // 26
array.reduceRight((total, num) => total - num); // -8
array.reverse(); // [ 9, 2, 5, 7, 3 ]
array.shift(); // 3
array.slice(2, 3); // [5]
array.some((d) => d < 8); // true
array.sort((a, b) => a - b); // [ 2, 3, 5, 7, 9 ]
array.splice(2, 4); // [ 5, 2, 9 ]
array.toString(); // 3,7,5,2,9
array.unshift(1); // 6
array.valueOf(); // [ 3, 7, 5, 2, 9 ]
