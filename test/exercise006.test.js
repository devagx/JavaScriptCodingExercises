const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("this is a string not an array");
    }).toThrow("an Array is required");
  });
  test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });
  test("it works okay with decimal numbers", () => {
    const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
    const expected = 30;
    expect(result).toBe(expected);
  });
  test("return 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
  });
});
describe("isValidDNA Input Tests", () => {
  test('should throw error if arguments not supplied', () => {
    expect(() => isValidDNA()).toThrow();
  });
  test('should throw error if null argument supplied', () => {
    expect(() => isValidDNA(null)).toThrow();
  });
  test('should throw error if argument  is an empty string', () => {
    expect(() => isValidDNA("")).toThrow();
  });
  test("Throws an error as new Array is passed instead of string", () => {
    expect(() => {
      isValidDNA(new Array());
    }).toThrow();
  });
  test("Throws an error as number is passed instead of string", () => {
    expect(() => {
      isValidDNA(1);
    }).toThrow();
  });
});
describe("isValidDNA Output Tests", () => {
  test("return true as result contains valid characters only. Valid characters are CTGA in uppercase.", () => {
    expect(isValidDNA("CTGA")).toBe(true);
  });
  test("return true as result contains valid characters only. Valid characters are CTGA in uppercase.", () => {
    expect(isValidDNA("GCTA")).toBe(true);
  });
  test("return true as result contains valid characters only. Valid characters are CTGA in uppercase.", () => {
    expect(isValidDNA("GACT")).toBe(true);
  });
  test("return true as result contains valid characters only. Valid characters are CTGA in uppercase.", () => {
    expect(isValidDNA("AAAA")).toBe(true);
  });
  test("return false as result contains invalid characters. Valid characters are CTGA in uppercase.", () => {
    expect(isValidDNA("GXCT")).toBe(false);
  });
  test("return false as result contains invalid characters. Valid characters are CTGA in uppercase.", () => {
    expect(isValidDNA("GcTA")).toBe(false);
  });
});


describe("getComplementaryDNA Input Tests", () => {
  test('should throw error if arguments not supplied', () => {
    expect(() => getComplementaryDNA()).toThrow();
  });
  test('should throw error if null argument supplied', () => {
    expect(() => getComplementaryDNA(null)).toThrow();
  });
  test('should throw error if argument  is an empty string', () => {
    expect(() => getComplementaryDNA("")).toThrow();
  });
  test("Throws an error as new Array is passed instead of string", () => {
    expect(() => {
      getComplementaryDNA(new Array());
    }).toThrow();
  });
  test("Throws an error as number is passed instead of string", () => {
    expect(() => {
      getComplementaryDNA(1);
    }).toThrow();
  });
});

describe("isItPrime", () => {
  test("Test description here....", () => {

  });
});

describe("createMatrix", () => {
  it("it returns a matrix of 1 X 1 when passed 1", () => {
    const result = createMatrix(1);
    const expected = [["foo"]];
    expect(result).toEqual(expected);
  });

});

describe("areWeCovered", () => {
  test("it returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });
  test("returns false if there are staff but < 3 not scheduled to work", () => {
    const staff = [
      { name: "gary", rota: ["Monday", "Tuesday"] },
      { name: "paul", rota: ["Monday", "Tuesday"] },
      { name: "sally", rota: ["Monday", "Tuesday"] },
      { name: "jess", rota: ["Monday", "Tuesday"] }
    ];
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });
});
