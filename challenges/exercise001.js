function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
 
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  //console.log(firstName.substring(0,1) + "." + lastName.substring(0,1))
  return firstName.substring(0,1) + "." + lastName.substring(0,1)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  var vatSum = Number(((originalPrice * vatRate) / 100).toFixed(2));
  var grossSum = Number(vatSum) + Number(originalPrice)
  
  //console.log("vatSum = " + vatSum + "|| originalPrice = " + originalPrice + "|| grossSum = " + grossSum)

  return grossSum;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  var reductionAmount = (Number(originalPrice) * Number(reduction)/100).toFixed(2);

  //console.log("reductionAmount = " + reductionAmount )
  var newAmount = Number(originalPrice) - Number(reductionAmount);

  return newAmount;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  const getMiddleCharacter = s => str.substr(str.length - 1 >>> 1, (~str.length & 1) + 1);

  return getMiddleCharacter(str);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
