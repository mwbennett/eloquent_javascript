/*
Arrays have a method reverse, which changes the array by inverting the order in which its elements 
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, 
reverseArray, takes an array as argument and produces a new array that has the same elements in the 
inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array 
given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do 
you expect to be useful in more situations? Which one is more efficient?
*/

function reverseArray(arr) {
  var newArr = [];
  while (arr.length > 0) {
    element = arr.shift();
    newArr.unshift(element);
  }
  return newArr;
}
function reverseArrayInPlace(arr) {
  for (var index = 0; index <= Math.floor(arr.length % 2); index++) {
    element = arr[index];
    arr[index] = arr[arr.length - 1 - index];
    arr[arr.length - 1 - index] = element;
  }
  return arr;
}