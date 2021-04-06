// Write your code here
let i = 0;
let images = [];
let time = 2000;
//images 
images[0] = "images/anastasia-ulyanova-aFqfi1ASUJc-unsplash.jpg";
images[1] = "images/jamie-street-uNNCs5kL70Q-unsplash.jpg";
images[2] = "images/karsten-winegeart--_gMskl-uoc-unsplash.jpg";
images[3] = "images/tran-mau-tri-tam--81lVsfM4gQ-unsplash.jpg";

//butons
let backBtn = document.querySelector('#back');
let forwardBtn = document.querySelector('#forward');
let autoBtn = document.querySelector('#auto');

//change the images manually (forward)
forwardBtn.addEventListener('click', () => {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i ++;
  } else i = 0;
});
//change the images backwards (back)
backBtn.addEventListener('click', () => {
  /** for (var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}*/
  document.slide.src = images[i];
  
});

//change the images every 3 seconds (auto)
autoBtn.addEventListener('click', changeImg)

function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i ++;
  } else i = 0;

  setTimeout("changeImg()", time); //""?
}

//window.onload = changeImg;


