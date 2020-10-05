## Loops

Loops offer a quick and easy way to do something repeatedly.

It's something like a game where you tell someone to take X steps in one direction. For example, the idea "Go five steps to the east" could be expressed in loop as:

```
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
```

## Types of Loops

### While loop:

The simplest of all looping structure is the while loop. The general format of the while
loop is:

```
while (test condition)
{
   body of the loop
}
```

If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.

Example:

```
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard
while(currentCard!='spade'){
  currentCard = cards[Math.floor(Math.random() * 4)]
  console.log(currentCard)
}
```

### Do While Loop

The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

```
do
  statement
while (condition);
```

Unlike other loops statement is always executed once before the condition is checked.

```
let cupsOfSugarNeeded = 4
let cupsAdded = 0

do {
  cupsAdded += 1
}while (cupsAdded<cupsOfSugarNeeded)
```

### For loop

For Loop is the most common type of loop where there are three parts:

1. Initialization: It is used to initialize loop variable

2. Condition: Decides whether to go inside the loop or not

3. Increment/decrement: Updates the loop variable for next iteration of loop

Syntax

```
for(initialization; condition; increment/decrement)
{
        body of loop;
}
```

Example 1:

```
for(let i = 5;i<=10;i++){
  console.log(i)
}
```

Example 2:
We can do reversed loop as opposed to incrementing the testing condition:

```
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}
```

Example 3: Not only the specific values array and string can also be looped to access their value:

Something like this which causes repeated value and code:

```
// Write your code below

const vacationSpots = ["New York","Seattle","Ohio"]

console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])

```

Can be converted to something like this:

```
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0;i<vacationSpots.length;i++){
  console.log("I would love to visit "+ vacationSpots[i])
}
```

Example 4: Sometimes when we are accessing values or looping the statements, the value is found found before the whole loop condition has ended at that case, we can use `break` condition:

```
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0;i<rapperArray.length;i++){
  console.log(rapperArray[i])
  if(rapperArray[i] === "Notorious B.I.G.") break
}

console.log("And if you don't know, now you know.")
```

Example 5:
Sometimes we have got large set of conditions and some complex calculations to be performed in that case nested loop comes into play.

A nested loop is a loop within a loop, an inner loop within the body of an outer one. How this works is that the first pass of the outer loop triggers the inner loop, which executes to completion. Then the second pass of the outer loop triggers the inner loop again. This repeats until the outer loop finishes.

```
const bobsFollowers = ["Alex", "Mateo","Carie","Marie"]

tinasFollowers = ["Alex","Carie","John"]

let mutualFollowers = []

for(let i = 0; i < bobsFollowers.length ;i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers)
```

**Note:** These examples performed in for loops can be performed in `while` Loops and `do while` loops as well and vice versa.
