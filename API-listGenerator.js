// This code is API from library ListGenerator.
//link to my library ListGenerator: https://github.com/berlandbor/Library-s-/blob/main/listGenerator.js

import { ListGenerator } from 'https://berlandbor.github.io/Library-s-/listGenerator.js';

const myListGenerator = new ListGenerator("myListContainer");

const myListItems = [
  { text: "Link to open code: listGenerator.js", link: "https://berlandbor.github.io/Library-s-/listGenerator.js" },
  { text: "Link to my repository with my library's", link: "https://github.com/berlandbor/Library-s-" },
  { text: "Link to Example use this library", link: "https://www.example3.com" }
];

myListGenerator.generateList(myListItems);



//https://www.example1.com