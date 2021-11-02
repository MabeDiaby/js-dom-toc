// generate your Table of Contents using DOM manipulation
// You will see that your index.html file contains a LOT of text, with h1, h2, and p tags.
// Your goal is to use JavaScript only via DOM Manipulation to create a Table of Contents!
// Get every h1 and h2 from the HTML file and create a list li item inside of the aside element for every title.
// All your HTML for the Table of Contents in the aside element must be generated (created) with JavaScript! I.e., do not hard-code the heading titles inside your HTML file.
// 1. First use a DOM method to retrieve or "get" the h1/h2 elements from the DOM by their class name.
// 2.Then think about how you would use DOM manipulation to add the inner text of those headers to the aside element. Hint: Try console.logging your DOM variables to see what is being retrieved!
// 3.Remember that your Table of Contents should be created from DOM methods inside your script.js file, and that you should not directly edit your index.html file.
// 4.BIG HINT: Read documentation on creating and appending nodes here. Focus on using the createElement and appendChild methods to create a li, set its inner text to the heading title, and append it to the right parent element.

const tableOfContents = document.querySelector("#table-of-contents");
const headingOne = document.querySelector("h1.heading");
const headingsTwo = document.querySelectorAll("h2.heading");
const ordered = document.createElement("ol");
const unlisted = document.createElement("h3");

const tocTocTitle = document.createElement("h2");
tocTocTitle.innerText = "Table of Contents";
tocTocTitle.style.fontWeight = "bold";
tocTocTitle.style.textAlign = "center";
tableOfContents.appendChild(tocTocTitle);

unlisted.innerText = headingOne.innerText;
tableOfContents.appendChild(unlisted);

ordered.setAttribute("type", "I");
tableOfContents.appendChild(ordered);

headingsTwo.forEach((lists, listItem) => {
  const list = document.createElement("li");
  lists.setAttribute("id", `${listItem}`);

  const anchor = document.createElement("a");
  anchor.innerText = lists.innerText;
  anchor.setAttribute("href", `#${listItem}`);

  anchor.style.textDecoration = "none";
  anchor.style.color = "black";
  list.appendChild(anchor);
  ordered.appendChild(list);
});

console.log(ordered);

// document.body.querySelector(".heading").innerHTML = "Hello im selected"