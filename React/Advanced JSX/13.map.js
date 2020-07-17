
// Example
// const strings = ['Home', 'Shop', 'About Me'];
// const listItems = strings.map(string => <li>{string}</li>);
// <ul>{listItems}</ul>

// This is fine in JSX, not in an explicit array:

// <ul>
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
// </ul>

// // This is also fine!

// const liArray = [
//   <li>item 1</li>, 
//   <li>item 2<li>, 
//   <li>item 3</li>
// ];

// <ul>{liArray}</ul>

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'))
