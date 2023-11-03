// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  let tenArr = [];
for (const number of numbers) {
  if (number > 10){
  tenArr.push(number);
}
}
return tenArr;
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let arr = [];
  for (const word of words){
  if (word[0].toUpperCase() || words[0] === 'B');
  }
   {
  return arr;
}
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  originalArray = originalArray.concat(additionalItems);
  return originalArray;
}
extend ([1,2,3,4], [6,7,8])

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  let newArr = [];
  for (let i=0; i < items.length; i++){
    let bbb = newArr[i];
}
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const newArr = [];
  for (let i =0; i<items.length; i+=2){
    newArr.push(items[i]);
  }
  return newArr;
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let indexArr = [];
for(let i =0; i <words.length; i++){
    let word = listWords [i];
    if (word.startsWith(letter)){
      indexArr.push(i);
    }
}
return indexArr;
}
const listWords = ['hi','bye', 'hello'];
const letter = 'h';
const resultIndex = findWordsStartingWith(listWords, letter)

console.log(resultIndex);

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]

function smallestNItems(items, n) {
  let smArr = [];
  for (let i = 0; i < n; i++)
  smArr.push (items[i]);
  return smArr;
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  let firstArr = [];
for (let i = 0; i <items.length; i++){
  let word = items[i];
  if (word === value){
    firstArr.push([i]);
  }
}
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  let arr = [];
for(let i = start;  i <= range.length-1; i++){
arr.push(i);
}
return arr;
}
const result = range(1, 4);

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
