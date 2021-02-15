const findSmallNums = numArr => numArr.filter(num => num < 1);

const findNamesBeginningWith = (nameArr, char) => nameArr.filter(name => name.charAt(0).toUpperCase() === char);

const findVerbs = wordsArr => wordsArr.filter(word => word.substring(0, 3).toUpperCase() == "TO ");

const getIntegers = numArr => numArr.filter(num => Number.isInteger(num));

const getCities = userArr => userArr.map(user => user.data.city.displayName);

const getSquareRoots = numArr => numArr.map(num => Number(Math.sqrt(num).toFixed(2)));

const findSentencesContaining = (sentences, word) => sentences.filter(sentence => sentence.toUpperCase().match(new RegExp(word.toUpperCase())));

const getLongestSides = numMdArr => numMdArr.map(item => Math.max.apply(null, item));

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