/*
You can write React code without using JSX at all!
The following JSX expression:

const h1 = <h1>Hello world</h1>;
can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: React.createElement(). Every JSX element is secretly a call to React.createElement().

*/


const greatestDivEver = React.createElement(
  'div',
  null,
  'i am div'
);
