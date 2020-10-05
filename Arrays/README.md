## Array
An array is a special variable, which can hold more than one value at a time.

An array can hold a number of values under a single name and the values can be accessed using an index number. 

Javascript arrays are zero-indexed meaning the first element of an array is at index 0 and the index value of last element is array's length property minus 1.

### Creating and Updating an array
You can create an array as below:

`const arr1 = ['item1', 'item2', 'item3']`<br/>
        OR
`let arr2 = ['item1', 'item2', 'item3']`<br/>

### Accessing Array Elements
Array elements can be accessed with the help of index value of the element. The index value starts from 0 (first element is at index 0). 
You can access an elemene with the syntax: 
`variableName[indexValue]` <br/>
`arr1[0] = item1`<br/>
`arr1[1] = item2`<br/>
`arr1[2] = item3`<br/>

And you can update the complete array as:
`const alpha = ['a', 'b', 'c']`<br/>

`alpha = ['d', 'e']`<br/>
`console.log(alpha)` `//['d', 'e']`

Also you can update array elements as:
`const alpha = ['a', 'b', 'c']`<br/>
`alpha[0] = 'e'`<br/>
`console.log(alpha)` `//['e'. 'b'. 'c']`<br/>

### Nested Arrays
If an array is nested inside another array, it is called a nested array. 
The element of a nested array can be accessed as 
`arr[i][j]` where `i` is the index of nested array and `j` is the index of element inside the nested array

### Array.length
You can find the length of an array with the length property. 
Suppose for an array 
`const arr = [1, 2, 3]`<br/>
`console.log(arr.length)` `//3`<br/>

### Array Methods
Some simple methods to manipulate an array 
#### Push
You can add an element at the end of an array using push method. 
`arrayVariable.push(elementToAdd)`<br/>

#### Shift 
It removes the first item of the array.

#### Unshift
It adds the element as the first item in the array.

#### Slice
It takes two variables.
`arr.slice([start, end])`<br/>
Slices the array from the start index to end one with the ending not included. 
If start is undefined, slice starts from 0 index.

#### indexOf
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

