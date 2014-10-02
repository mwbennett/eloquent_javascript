/*
The == operator compares objects by identity. But sometimes, you would prefer to compare 
the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the 
same value or are objects with the same properties whose values are also equal when compared 
with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by 
looking at their properties, you can use the typeof operator. If it produces "object" for both 
values, you should do a deep comparison. But you have to take one silly exception into account: 
by a historical accident, typeof null also produces "object".
*/

// var obj2 = {"x": 2}

function deepEqual(value1, value2) {
  if ((typeof value1 === 'object' && value1 !== null) && 
      (typeof value2 === 'object' && value2 !== null)) {

    var count1 = count2 = 0;

    for (var property in value1) count1 += 1;
    for (var property in value2) count2 += 1;
    
    if (count1 === 0 && count2 === 0) return true;

    if (count1 !== count2) return false;
    
    else {
      for (var property in value1) {
        if (value1[property] !== value2[property]) {
          if (typeof value1[property] === "object" && 
              typeof value2[property] === "object") {
            return deepEqual(value1[property], value2[property]);
          }
          else return false;
        }
      return true;
      }
    }
  }
  else {
    return value1 === value2;
  }
}