/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
*/

for (var count = 1; count < 101; count++){
  if (count % 15 == 0) console.log('FizzBuzz');
  else if (count % 5 == 0) console.log('Buzz');
  else if (count % 3 == 0) console.log('Fizz');
  else console.log(count);
}