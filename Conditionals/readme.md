## Conditionals

Computer Languages are designed for automating the tasks or simplfying it. One of the key concepts of any language is **conditionals**.

`A peice of code that checks a pre-defined condition and on that basis it runs a specific set of statements.`

In Javascripts, it comes in many flavours for supporting different use-cases. Let see how.

### if

```
if (condition) {
  code to run if condition is true
}
```

1. It contains a keyowd `if` followed by a `conditon` in circular parenthesis.
2. `condition` should evaluates to a boolean `true` or `false`.
3. Any statement in between curly parenthesis `{}` became a part of set of statements that run on the basis of condition.
4. Keyword `if` is used to signify that block of code that you want to run when condition returns a true value.

### if....else

```
if (condition) {
  code to run if condition is true
} else {
  code to run if condition is false
}
```

1. We can further extend `if` conditional for handling the case when condition evaluates to false.
2. Keyword `else` is used to signifies that block of code that you want to run when condition returns a false.
3. Order matters , always there will be `if` first then `else` .

- Note : If you only want to run a single statement you can avoid parenthesis and put directly below it.

### if...else if

```
if (condition1) {
  code to run if condition1 is true
} else if(condition2){
  code to run if condition2 is false
}
```

1. We can extend `if else` conditional further by **chaining** themselves after one another.
2. It sequentialy checks conditon[1......n] and made choices on that basis.
3. It usually preferred when conditions are less. For more conditions `switch` is used, which we will define below.

### switch

If you have conditions and reasonably ammount of code to run on every block. Then using `switch` is advisable. It may look complicated in syntax, but in code it is cleaner than chained `if...else` statements

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    if experession doesn't matches with any of the choices
}
```

1. The keyword `switch`, followed by a set of parentheses.
2. An expression or value inside the parentheses.
3. The keyword `case`, followed by a choice that the expression/value could be, followed by a colon `:`.
4. Some code to run if the choice matches the expression.
5. A `break` statement, followed by a semi-colon `;`. If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the switch statement.
6. As many other cases (bullets 3–5) as you like.
7. The keyword `default`, followed by exactly the same code pattern as one of the cases (bullets 3–5), except that `default` does not have a choice after it, and you don't need to `break` statement as there is nothing to run after this in the block anyway. This is the default option that runs if none of the choices match.

### ternary

```
( condition ) ? run this if condition is true : run this code if condition is false.
```

1. It is used when we have only one condition.
2. This became very handy to use for single condition.

### short-circuit

There are two important aspects of logical operators in JavaScript that you should know:

- They evaluate from left to right
- They **short-circuit**

Short circuiting means that in JavaScript when we are evaluating an AND expression (&&), if the first operand is false, JavaScript will short-circuit and not even look at the second operand. This property allow us to do some cool stuff.

#### short-circuit Conditionals

`(operand1) && (operand2)`

for example, if you want if `isOnline` is data is true than only `fetchData()`. So you could do like below intead of classical if...else conditionals,

`isOnline && fetchData()`

#### short-circuit Evaluation

`(operand1) || (operand2)`

It returns the first truthy while evaluating from left to right. It is usually used for having a default value.

for example, setting name to `John Doe` if `user.name` evaluates to a falsy value.

`const name = user.name || 'John Doe'`
