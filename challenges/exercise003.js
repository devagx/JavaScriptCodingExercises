function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  if (nums.length == 0) {
    return new Array();
  }
  else {
    for (var i = 0; i < nums.length; i++) {
      nums[i] = nums[i] * nums[i];
    }
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  for (var i = 0; i < words.length; i++) {
    if (i > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  return words.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  var subjectCount = 0;

  for (var i = 0; i < people.length; i++) {
    for (var s = 0; s < people[i].subjects.length; s++) {
      subjectCount += 1;
    }

  }
  return subjectCount;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
