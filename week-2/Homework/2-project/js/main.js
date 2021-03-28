/** 1- When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white` */
  //#blueBtn
  document.querySelector('#blueBtn').addEventListener('click', changeWithBlue);
  function changeWithBlue() {
      let jumbotronBtn = document.querySelector('.jumbotron')
      jumbotronBtn.style.backgroundColor = '#588fbd'
      let donateABike = document.querySelector('.btn.btn-primary.btn-lrg')
      donateABike.style.backgroundColor = '#ffa500'
      let VolunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg').style.backgroundColor = 'black'
      VolunteerBtn.style.color = 'white'
  };
  /**- When clicking **blue** it should change:

  - **Jumbotron** background color to `#588fbd`
  - **Donate a bike** button background color to `#ffa500`
  - **Volunteer** button background color to `black` and text color to `white` */

  document.querySelector('#orangeBtn').addEventListener('click', changeWithOrange);
  function changeWithOrange() {
    let jumbotronBtn = document.querySelector('.jumbotron').style.backgroundColor = '#f0ad4e';
    let donateABike = document.querySelector('.btn.btn-primary.btn-lrg').style.backgroundColor = '#5751fd';
    let VolunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg').style.backgroundColor = '#31b0d5';
      VolunteerBtn.style.color = 'white';
  }
/** 3- When clicking **green** it should change:
  - **Jumbotron** background color to `#87ca8a`
  - **Donate a bike** button background color to `black`
  - **Volunteer** button background color to `#8c9c08`*/

  document.querySelector('#greenBtn').addEventListener('click', changeWithGreen);
  function changeWithGreen() {
    let jumbotronBtn = document.querySelector('.jumbotron').style.backgroundColor = '#87ca8a';
    let donateABike = document.querySelector('.btn.btn-primary.btn-lrg').style.backgroundColor = 'black';
    let VolunteerBtn = document.querySelector('.btn.btn-secondary.btn-lrg').style.backgroundColor = '#8c9c08';
    VolunteerBtn.style.color = 'white';
  }
  //STEP 2 

  document.querySelector('button[type="submit"]').addEventListener('click', checkValid);
  function checkValid(e) {
    e.preventDefault() //at the begining of the function
    
    //define the variables that contains the buttons
    const email = document.querySelector('#exampleInputEmail1')
    const name = document.querySelector('#example-text-input')
    const description = document.querySelector('#exampleTextarea')

    //check if they are valid
    const isEmailValid = email.value.length > 0 && email.value.includes('@')
    const isNameValid = name.value.length > 0
    const isDescValid = description.value.length > 0
    
    //define the style if they are valid or not
    email.style.backgroundColor = isEmailValid ? '' : 'red'
    name.style.backgroundColor = isNameValid ? '' : 'red'
    description.style.backgroundColor = isDescValid ? '' : 'red' 
    
    //define what to do if all of them are valid
    if(isNameValid && isEmailValid && isDescValid) {
      alert('thank you for filling the form')
      email.value = ''
      name.value = ''
      description.value = ''
    }

  }

