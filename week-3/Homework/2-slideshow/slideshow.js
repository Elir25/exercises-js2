// Write your code here
let i = 0;
let images = [];
let time = 2000;
let interval;
//images 
images[0] = "images/anastasia-ulyanova-aFqfi1ASUJc-unsplash.jpg";
images[1] = "images/jamie-street-uNNCs5kL70Q-unsplash.jpg";
images[2] = "images/karsten-winegeart--_gMskl-uoc-unsplash.jpg";
images[3] = "images/tran-mau-tri-tam--81lVsfM4gQ-unsplash.jpg";

//butons
let backBtn = document.querySelector('#back');
let forwardBtn = document.querySelector('#forward');
let autoBtn = document.querySelector('#auto');
let autoBack = document.querySelector('#auto-back');

//change the images manually (forward)
forwardBtn.addEventListener('click', () => {
  clearInterval(interval);
  if (i < images.length - 1) {
    i ++;
  } else i = 0;
  document.slide.src = images[i];
});

//change the images backwards (back)
backBtn.addEventListener('click', () => {
  clearInterval(interval);
  if (i > 0) {
    i --;
  } else i = images.length -1;
  document.slide.src = images[i];
  
});

//change the images every 3 seconds (auto-forward)
autoBtn.addEventListener('click', changeImg)

function changeImg() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (i < images.length - 1) {
      i ++;
    } else i = 0;
    document.slide.src = images[i];
  }, time);


  //setTimeout(changeImg, time);
}

//change the images every 3 seconds (auto-back)
autoBack.addEventListener('click', changeBackAuto);

function changeBackAuto() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (i > 0) {
      i --;
    } else i = images.length - 1;
    document.slide.src = images[i];
  }, time);

}
//window.onload = changeImg;


