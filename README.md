# Random Password Generator

## Overview
- Random password generator
- Generates password with click of a button
- Password is between 10-18 characters
- Password is a collection of numbers, letters (upper and lowercase), and symbols

## My process

### Built with

- HTML5 markup
- CSS 
- JavaScript 

### What I learned

- How to generate a random password by selecting characters at random stored in nested arrays
- How to generate a random number and make sure the number has a minimum of N

function addNewPassword() {
  const characterArray = [
    ['~','`','!','@','$','%','^','&','*','(',')','-','_','+','=','#'], 
    [0,1,2,3,4,5,6,7,8,9],   
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  ];

  const passwordLength = Math.floor(Math.random() * 9) + 10;
  let randomPassword = [];

  while (randomPassword.length < passwordLength) {
    let randomIndex =
      characterArray[Math.floor(Math.random() * characterArray.length)];
    let randomSelector = Math.floor(Math.random() * randomIndex.length);
    randomPassword.push(randomIndex[randomSelector]);
  }

  return randomPassword.join("");
}


## Author

- Portfolio Page (https://pprograms.netlify.app/)

## Acknowledgments

Thank you to the Generation USA JWD Program for providing the mini-project for us to practice our JavaScript skills that we have been learning in class. 
https://usa.generation.org/
https://usa.generation.org/national/junior-web-developer/
