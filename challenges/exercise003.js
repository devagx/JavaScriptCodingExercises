const getSquares = n => n.map(num => num * num);

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let camelCaseWords = [];

  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      camelCaseWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    else {
      camelCaseWords.push(words[i]);
    }
  }

  return camelCaseWords.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let subjectCount = 0;

  for (let i = 0; i < people.length; i++) {
    for (let s = 0; s < people[i].subjects.length; s++) {
      subjectCount += 1;
    }
  }

  return subjectCount;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let ingrediantMatch = false;

  for (let i = 0; i < menu.length; i++) {
    for (let s = 0; s < menu[i].ingredients.length; s++) {
      if (menu[i].ingredients[s].toUpperCase() == ingredient.toUpperCase()) {
        ingrediantMatch = true;
      }
    }
  }
  return ingrediantMatch;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  return Array.from(new Set(arr1.filter(num => arr2.indexOf(num) >= 0))).sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
