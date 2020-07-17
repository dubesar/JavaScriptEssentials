

//Not all lists need to have keys. A list needs keys if either of the following are true:
// 1.The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
// 2.A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.


import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) =>
  // expression goes here:
  <li key={'person_'+i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'))
