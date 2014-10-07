/*
Using the example data set from this chapter, compute the average age difference between 
mothers and children (the age of the mother when the child is born). You can use the average 
function defined earlier in this chapter.

Note that not all the mothers mentioned in the data are themselves present in the array. 
The byName object, which makes it easy to find a person’s object from their name, might be useful here.
*/

// want to give the average function an array of all mother-child age differences. 

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var hasKnownMother = ancestry.filter(function(person){
  return byName[person.mother];
});

function motherChildAgeDifference(person) {
  return (person.born - byName[person.mother].born);
};

var ageDifferences = hasKnownMother.map(function(person) {
  return motherChildAgeDifference(person);
});

console.log(average(ageDifferences));

