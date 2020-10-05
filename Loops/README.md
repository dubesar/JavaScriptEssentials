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

Example:

```
for(let i = 5;i<=10;i++){
  console.log(i)
}
```
