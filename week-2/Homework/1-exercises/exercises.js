/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

 //let content = document.querySelector("#content");
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  //my code
  arrayOfPeople.forEach( person => {
    let tittle = document.createElement('h1')
    tittle.innerText = person.name;
    content.appendChild(tittle)
    let subTitlle = document.createElement('h2')
    subTitlle.innerText = person.job;
    content.appendChild(subTitlle)
  });
  
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */


function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
  let newList = document.createElement('ul');

  shopping.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    content.appendChild(listItem)//poner este elemento afuera del forEach
  })

}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  let content = document.querySelector("#content");
  let bookList = document.createElement('ul') //create the list

  books.forEach(itemB => {

    let bookListItem = document.createElement('li');
    let text = document.createElement('p');
    let img = document.createElement('img');
    
    text.textContent = itemB.title + " - " + itemB.author;
    img.setAttribute('src', itemB.url)
    
    bookListItem.style.backgroundColor = itemB.alreadyRead ? 'green' : 'red';
    bookListItem.appendChild(text)
    bookListItem.appendChild(img)
    bookList.appendChild(bookListItem)
    
  });
  content.appendChild(bookList)
  
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg' 
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg',
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: 'https://m.media-amazon.com/images/I/41uPjEenkFL._SX260_.jpg',
  }
];

exerciseThree(books);
