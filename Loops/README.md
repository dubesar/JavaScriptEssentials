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
