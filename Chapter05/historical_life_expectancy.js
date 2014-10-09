/* 
Compute and output the average age of the people in the ancestry data set per century. 
A person is assigned to a century by taking their year of death, dividing it by 100, and 
rounding it up, as in Math.ceil(person.died / 100).
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function getAge(person) {
  return person.died - person.born;  
}

function getCentury(person) {
  return Math.ceil(person.died / 100 ); 
}

var agesObject = {};

function getAgesByCentury(obj) {
  obj.forEach(function(person) {
    if (agesObject[getCentury(person)] === undefined) {
      agesObject[getCentury(person)] = [getAge(person)];
    }
    else {
      agesObject[getCentury(person)].push(getAge(person));
    }
  })
}

function averageAges() {
  getAgesByCentury(ancestry);
  for (var century in agesObject) {
    console.log(century, ": ", average(agesObject[century]));
  }
}

averageAges();