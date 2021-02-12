function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  let fillings = new Array();

  for (let i = 0; i < sandwich.fillings.length; i++) {
    fillings.push(sandwich.fillings[i]);
  }

  return fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city.toUpperCase() === "MANCHESTER";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  let busCapacity = 40;
  let personPerBus = 0;

  if (people <= busCapacity) {
    personPerBus = 1;
  }
  else {
    personPerBus = parseInt(people / busCapacity);
    if (people % busCapacity != 0) {
      personPerBus += 1;
    }
  }

  return personPerBus;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let sheepCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() == "SHEEP") {
      sheepCount += 1;
    }
  }
  
  return sheepCount;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  return ((person.address.postCode.charAt(0).toUpperCase() == 'M') && (person.address.city.toUpperCase() == "MANCHESTER"))
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
