let myFullName = "Matt Mortazie"; // 12 characters in name...not including space

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
document.querySelector(".header").innerHTML = myFullName + "\'s Lab 4.\n";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
var pgraphOne = document.createElement("p1");
pgraphOne.className = "content1";
var pgraphTwo = document.createElement("p2");
pgraphTwo.className = "content2";
var pgraphOneText = document.createTextNode("The first new paragraph. \n");
var pgraphTwoText = document.createTextNode("The second new paragraph. \n");
pgraphOne.appendChild(pgraphOneText);
pgraphTwo.appendChild(pgraphTwoText);
var newContentParagraphs = document.querySelector(".content");
newContentParagraphs.appendChild(pgraphOne);
newContentParagraphs.appendChild(pgraphTwo);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
var insertText = "My name has " + myFullName.length + " characters.";
pgraphOne.append(insertText);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
var thirdChar = myFullName.charAt(2);
pgraphTwo.append("The third character of my name is: " + thirdChar + ".");

// 6 Add a new line to your second paragraph
pgraphTwo.innerText += "\n";

// 7 Return the final three characters of your last name to that new line
var last3 = myFullName.substring(myFullName.length - 3, myFullName.length);
pgraphTwo.append("The final three characters in my name is: " + last3 + ".\n");

// 8 Substring your first and last name into two separate variables
var firstName = myFullName.slice(0, 4);
var lastName = myFullName.slive(5);

// 9 Add the total length of your first and last names together
var nameLength = firstName.length + lastName.length;

// 10 Display that total next to your name in your header
document.querySelector(".header").append("The length of my first and last name is: " + nameLength);