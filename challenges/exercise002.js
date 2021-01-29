function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  var fillings = new Array();

  for (var i = 0; i < sandwich.fillings.length; i++) {
    fillings.push(sandwich.fillings[i]);
  }

  return fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person.city.toUpperCase() == "MANCHESTER") { return true }
  else return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  var busCapacity = 40;
  var personPerBus = 0;

  if (people <= busCapacity) {
    personPerBus = 1;
  }
  else {
    //alert("person = " + person + " | busCapacity=" + busCapacity + " |person / busCapacity = " + (person / busCapacity));
    personPerBus = parseInt(people / busCapacity);
    if (people % busCapacity != 0) {
      personPerBus += 1;
    }
  }
  return personPerBus;

}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  var sheepCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() == "SHEEP") {
      sheepCount += 1;
    }
  }
  return sheepCount;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if ((person.address.postCode.charAt(0).toUpperCase() == 'M') && (person.address.city.toUpperCase() == "MANCHESTER")) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
