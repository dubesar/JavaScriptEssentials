// eg - 
// Declare a variable:
const name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));
