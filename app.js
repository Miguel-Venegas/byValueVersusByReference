// understanding the difference between by value and by reference

// by Value (primitives)
let a = 3;
let b;
b = a;

a = 2;

console.log(a); // output = 2
console.log(b); // output = 3

// this output occurred because variable b created a new memory location for the primitive value, which was initially set to variable a's value of 3. In other words, setting b = a made a copy of variable a's value at that specific instance 

// by Reference (all objects including functions)

let c = {greeting: 'hi'};
let d;

d = c;

c.greeting = 'hello'; // mutated the array

console.log(c); //output = {greeting: 'hello'}
console.log(d); //output = {greeting: 'hello'}

// this output was different than the by-value output example above. Unlike the above example, both variables point to the same object. That is, no new copy is created. Thus, if you mutate the object, it will affect any variable referencing it as well. In other words, they are pointing to the same location in memory.