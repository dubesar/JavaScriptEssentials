Although manual conversion only took you a few minutes, it is unsustainable as the size of the JavaScript file increases.

Because ES6 is predictably backwards compatible, a collection of JavaScript programmers developed a JavaScript library called Babel that transpiles ES6 JavaScript to ES5.

Transpilation is the process of converting one programming language to another.

In the remaining exercises of this lesson, you will learn how to use Babel to transpile the new, easy-to-write version of JavaScript (ES6) to the old, browser-compatible version of JavaScript (ES5).

In the instructions below, you will pass JavaScript ES6 code to Babel, which will transpile it to ES5 and write it to a file in the lib directory.

Step 1: `npm install babel-cli`  - This installs one of the two required Babel packages.

Step 2: `npm install babel-preset-env`  - This installs the second of two required Babel packages.

Step 3: `npm run build` - You can view the ES5 code in ./lib/main.js.
