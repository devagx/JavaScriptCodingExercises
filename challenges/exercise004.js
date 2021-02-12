const findSmallNums = n => n.filter(x => x < 1);

const findNamesBeginningWith = (n, c) => n.filter(x => x.charAt(0).toUpperCase() === c);

const findVerbs = w => w.filter(x => x.substring(0, 3).toUpperCase() == "TO ");

const getIntegers = n => n.filter(x => Number.isInteger(x));

const getCities = u => u.map(x => x.data.city.displayName);

const getSquareRoots = n => n.map(x => Number(Math.sqrt(x).toFixed(2)));

const findSentencesContaining = (s, r) => s.filter(x => x.toUpperCase().match(new RegExp(r.toUpperCase())));

const getLongestSides = t => t.map(x => Math.max.apply(null, x));

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
