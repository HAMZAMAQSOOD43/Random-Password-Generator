const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const btnEl = document.getElementById("btn-el")
const firstInput = document.getElementById("input-el-1")
const secondInput = document.getElementById("input-el-2")

btnEl.addEventListener('click' ,function(){
randomPassword()
})


function randomPassword(){
  let firstInputPassword = ""
  let secondInputPassword = " "
  
  for (let i =0; i<= 15; i++){
    const randomIndex = Math.floor(Math.random()* characters.length)
  
  const randomChar = characters[randomIndex]
  firstInputPassword += randomChar

  }
  for (let i =0; i<= 15; i++){
    const randomIndex = Math.floor(Math.random()* characters.length)
  
  const randomChar = characters[randomIndex]
  secondInputPassword += randomChar


  }
  firstInput.value = firstInputPassword
  secondInput.value = secondInputPassword
  

}

firstInput.addEventListener('click' ,function(){
console.log(firstInput.value)
})

// let inputEl = document.getElementById("input-el");
// let btnEL = document.getElementById("btn-el");

// function randomPassword() {
//   let password = "";
//   for (let i = 0; i < 10; i++) {
//     let randomIndex = Math.floor(Math.random() * passwordLetters.length);
//     let randomChar = passwordLetters[randomIndex];
//     password += randomChar;
//   }
//   inputEl.value += password

// }

// btnEL.addEventListener("click", function(){
//   randomPassword();
// });

