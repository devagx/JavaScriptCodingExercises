const {
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
} = require("../challenges/exercise001");

describe("capitalize", () => {
  test("returns a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("the quick fox")).toBe("The quick fox");
    expect(capitalize("oh no, bears!!!")).toBe("Oh no, bears!!!");
    /* I Added below edge test cases earlier on */
    expect(capitalize("Hello everyone")).toBe("Hello everyone");
  });

  test("does nothing if the string is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => capitalize()).toThrow();
  });

  test('should throw error if null argument supplied', () => {
    expect(() => capitalize(null)).toThrow();
  });

  test('should throw error if argument  is an empty string', () => {
    expect(() => capitalize("")).toThrow();
  });

});

describe("generateInitials", () => {
  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
  });
  test("ensure a . character is part of the returned string", () => {
    expect(generateInitials("Frederic", "Bonneville")).toContain(".");
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => generateInitials()).toThrow();
  });

  test('should throw error if null argument supplied', () => {
    expect(() => generateInitials(null,null)).toThrow();
  });

  test('should throw error if argument 1 is an empty string', () => {
    expect(() => generateInitials("","test")).toThrow();
  });

  test('should throw error if argument 2 is an empty string', () => {
    expect(() => generateInitials("test","")).toThrow();
  });
  
});

describe("addVAT", () => {
  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBe(25);
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => addVAT()).toThrow();
  });

  test('should throw error if null argument supplied', () => {
    expect(() => addVAT(null,null)).toThrow();
  });

  test('should throw error if string argument supplied', () => {
    expect(() => addVAT("test1","test2")).toThrow();
  });
  test('should throw error if string argument supplied', () => {
    expect(() => addVAT("test1",0)).toThrow();
  });
  test('should throw error if string argument supplied', () => {
    expect(() => addVAT(1,"test2")).toThrow();
  });
});

describe("getSalePrice", () => {
  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBe(50);
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => getSalePrice()).toThrow();
  });

  test('should throw error if null argument supplied', () => {
    expect(() => getSalePrice(null,null)).toThrow();
  });

  test('should throw error if string argument supplied', () => {
    expect(() => getSalePrice("test1","test2")).toThrow();
  });
  test('should throw error if string argument supplied', () => {
    expect(() => getSalePrice("test1",0)).toThrow();
  });
  test('should throw error if string argument supplied', () => {
    expect(() => getSalePrice(1,"test2")).toThrow();
  });
});

describe("getMiddleCharacter", () => {
  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => getMiddleCharacter()).toThrow();
  });

  test('should throw error if null argument supplied', () => {
    expect(() => getMiddleCharacter(null)).toThrow();
  });

  test('should throw error if argument  is an empty string', () => {
    expect(() => getMiddleCharacter("")).toThrow();
  });
});

describe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => reverseWord()).toThrow();
  });

  test('should throw error if null argument supplied', () => {
    expect(() => reverseWord(null)).toThrow();
  });

  test('should throw error if argument  is an empty string', () => {
    expect(() => reverseWord("")).toThrow();
  });
});

describe("reverseAllWords", () => {
  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => reverseAllWords()).toThrow();
  });

  test("reverse with empty strings", () => {
    expect(
      reverseAllWords(["", "", "", "", ""])
    ).toEqual(["", "", "", "", ""]);
  });

  test("reverse with empty array", () => {
    expect(
      reverseAllWords([])
    ).toEqual([]);
  });
});

describe("countLinuxUsers", () => {
  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => countLinuxUsers()).toThrow();
  });

  test("returns the correct number of Linux users found which is 0 because of empty array", () => {
    const users = [];
    expect(countLinuxUsers(users)).toBe(0);
  });
});

describe("getMeanScore", () => {
  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => getMeanScore()).toThrow();
  });

  test("returns 0 because of 0 value in array", () => {
    expect(getMeanScore([0])).toBe(0);
  });

  test("returns error because item in array is not a number", () => {
    expect(() => getMeanScore(["test"])).toThrow();
  });
});

describe("simpleFizzBuzz", () => {
  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });

  test('should throw error if arguments not supplied', () => {
    expect(() => simpleFizzBuzz()).toThrow();
  });

  test('should throw error if null argument supplied', () => {
    expect(() => simpleFizzBuzz(null)).toThrow();
  });

  test('should throw error if argument  is an empty string', () => {
    expect(() => simpleFizzBuzz("")).toThrow();
  });
});
