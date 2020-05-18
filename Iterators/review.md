.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.

.map() executes the same code on every element in an array and returns a new array with the updated elements.

.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

.reduce() iterates through an array and takes the values of the elements and returns a single value.

All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
