let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
  document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

function addNewPassword() {
  const characterArray = [
    //prettier-ignore
    ['~','`','!','@','$','%','^','&','*','(',')','-','_','+','=','#'],
    //prettier-ignore
    [0,1,2,3,4,5,6,7,8,9],
    //prettier-ignore
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    //prettier-ignore
    ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
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
