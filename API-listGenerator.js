// This code is API from library ListGenerator.
//link to my library ListGenerator: https://github.com/berlandbor/Library-s-/blob/main/listGenerator.js

import { ListGenerator } from 'https://berlandbor.github.io/ExampleUseListGenerator/listGenerator.js';

const myListGenerator = new ListGenerator("myListContainer");

const myListItems = [
  { text: "Link to Example use  library", link: "https://berlandbor.github.io/ExampleUseListGenerator/" },
  { text: "Link to my repository with this my library and API", link: "https://github.com/berlandbor/ExampleUseListGenerator" },
  { text: "Link to open code API-listGenerator.js", link: "https://github.com/berlandbor/ExampleUseListGenerator/blob/main/API-listGenerator.js" },
  { text: "Link to open code library: listGenerator.js", link: "https://github.com/berlandbor/ExampleUseListGenerator/blob/main/listGenerator.js" }
];

myListGenerator.generateList(myListItems);



//https://www.example1.com