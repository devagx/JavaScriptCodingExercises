function capitalize(word) {
    if (word === undefined || word.length == 0) throw new Error("word is required");

    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
    if (firstName === undefined || firstName.length == 0) throw new Error("firstName is required");
    if (lastName === undefined || lastName.length == 0) throw new Error("lastName is required");

    return firstName.substring(0, 1) + "." + lastName.substring(0, 1)
}

function addVAT(originalPrice, vatRate) {
    if (originalPrice === undefined) throw new Error("originalPrice is requied");
    if (vatRate === undefined) throw new Error("vatRate is required");
    if (typeof(originalPrice) != 'number') throw new Error("originalPrice is not a number");
    if (typeof(vatRate) != 'number') throw new Error("vatRate is not a number");

    let vatSum = Number(((originalPrice * vatRate) / 100).toFixed(2));
    let grossSum = Number(vatSum) + Number(originalPrice)

    return grossSum;
}

function getSalePrice(originalPrice, reduction) {
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (reduction === undefined) throw new Error("reduction is required");
    if (typeof(originalPrice) != 'number') throw new Error("originalPrice is not a number");
    if (typeof(reduction) != 'number') throw new Error("reduction is not a number");

    let reductionAmount = (Number(originalPrice) * Number(reduction) / 100).toFixed(2);
    let newAmount = Number(originalPrice) - Number(reductionAmount);

    return newAmount;
}

function getMiddleCharacter(str) {
    if (str === undefined || str.length == 0) throw new Error("str is required");

    //Math.Ceil to round up to nearest whole number on strings of odd length and then subtract one because array position starting 0
    //Modular 2 used to identify if to return 1 character or 2 characters in result. If even Then return 2 chars Else 1 char
    return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1);
}

function reverseWord(word) {
    if (word === undefined || word.length == 0) throw new Error("word is required");

    return word.split('').reverse().join('');
}

function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");

    let outputArray = new Array();

    for (let i = 0; i < words.length; i++) {
        outputArray.push(words[i].split('').reverse().join(''));
    }

    return outputArray;
}

function countLinuxUsers(users) {
    if (users === undefined) throw new Error("users is required");

    let linuxUserCount = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].type.toUpperCase() == "LINUX") {
            linuxUserCount += 1;
        }
    }

    return linuxUserCount;
}

function getMeanScore(scores) {
    if (scores === undefined) throw new Error("scores is required");

    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        if (typeof(scores[i]) != 'number') throw new Error("item in array is not a number");
        total += Number(scores[i]);
    }

    return Number((total / scores.length).toFixed(2));
}

function simpleFizzBuzz(n) {
    if (n === undefined || n.length == 0) throw new Error("n is required");

    if (n % 3 != 0 && n % 5 != 0) {
        return n;
    } else if (n % 5 == 0 && n % 3 == 0) {
        return "fizzbuzz";
    } else if (n % 3 == 0) {
        return "fizz";
    } else if (n % 5 == 0) {
        return "buzz";
    }
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