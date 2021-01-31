const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  var nextNum = nums[nums.findIndex(element => element == n)];

  if (nextNum === undefined || nums[nums.length - 1] === n) {
    return null;
  }
  else {
    return nums[nums.findIndex(element => element == n) + 1]
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (result[char] === undefined) {
      result[char] = 1;
    }
    else {
      result[char] += 1;
    }

  }

  if (result[0] === undefined) {
    result[0] = 0;
  }

  return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseInt(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  var arrSum = 0;

  arrs.forEach((arr) => {
    arrSum += arr.reduce((a, b) => a + b, 0);
  });

  return arrSum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length > 0) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  else {
    return [];
  }

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  var searchTermFound = false;

  for (let key in haystack) {
    if (typeof haystack[key] == 'string') {
      if (haystack[key].toUpperCase().includes(searchTerm.toUpperCase())) {
        return true;
      }
    }
  }
  return searchTermFound;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
