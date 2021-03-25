/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const getPtags = document.querySelectorAll("p");
console.log(getPtags);//1

const getFirstDiv = document.querySelector("div");
console.log(getFirstDiv);//2

const getElementId = document.querySelector("#jumbotron-text");
console.log(getElementId);//3

const getPInside = document.querySelectorAll('.primary-content p');
console.log(getPInside);//4


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
document.querySelector('#alertBtn').addEventListener('click', () => alert('Thanks for visiting Bikes for Refugees!') )

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.querySelector('#bgrChangeBtn').addEventListener('click', changeColor)

function changeColor() {
    document.body.style.backgroundColor = 'orange'
}

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
//let paragraph = document.createElement("p")
document.querySelector('#addTextBtn').addEventListener('click' , addSomeText)
function addSomeText() {
    const p = document.createElement('p') //this to create a new element
    p.textContent = "some more text to add in that section" //put something inside
    document.querySelector('#mainArticles').appendChild(p) //this to add the element we have just created
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.querySelector('#largerLinksBtn').addEventListener('click', () => { //here we are usine arrow function
    document.querySelectorAll('a').forEach(a => a.style.fontSize = '50px')
});

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
document.querySelector('#addArticleBtn').addEventListener('click', addNewParagraph)
function addNewParagraph() {
    const p = document.createElement('p') //we create the element here
    const input = document.querySelector('.form-control.addArticle')
    p.textContent = input.value //this to define that we want to use the text the user provides
    document.querySelector('#mainArticles').appendChild(p)
    input.value = "";//we do this to clear the input field after click
}
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
let colors = ["blue", "white", "orange", "brown", "pink"]

function changeColor() {
    const currentColor = document.body.style.backgroundColor 
    const indexCurrentColor = colors.findIndex(c => c === currentColor)
    const nextColor = colors[indexCurrentColor + 1] || colors[0]
    document.body.style.backgroundColor = nextColor;
}