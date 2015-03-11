/*
Design an interface that abstracts iteration over a collection of values. 
An object that provides this interface represents a sequence, and the 
interface must somehow make it possible for code that uses such an object 
to iterate over the sequence, looking at the element values it is made up 
of and having some way to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that 
takes a sequence object and calls console.log on its first five elements—or 
fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration
over the array using the interface you designed. Implement another object type 
RangeSeq that iterates over a range of integers (taking from and to arguments 
to its constructor) instead.
*/

var logFive = function(sequence){
  for (var i = 0; i < 5; i++){
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

var ArraySeq = function(array){
  this.array = array;
  this.pos = -1;
}
ArraySeq.prototype.next = function(){
  if (this.pos >= this.array.length - 1) {
    return false;
  }
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function(){
  return this.array[this.pos];
};

var RangeSeq = function(from, to){
  this.pos = from - 1;
  this.to = to;
};
RangeSeq.prototype.current = function(){
  return this.pos;
};
RangeSeq.prototype.next = function(){
  if (this.pos >= this.to) {
    return false;
  }
  this.pos++;
  return true;
};

// TEST CASES 
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
