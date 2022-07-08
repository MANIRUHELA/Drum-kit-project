/*document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
});*/
//pehla button element select hoga or uspr ye event hoga.querSelector is used for first element only

/*document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    this.style.color = "white";
  });
});*/

/*querySelectorAll returns the list of all the elements having button as the element.To access thode elements and to apply
events on them we have used forEach.
*/

//FOR BUTTONS
document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
});
//FOR KEYBOARDS
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break; //agar break nahi lagaenge to pehle wali ka bhi sound ayega click krne pe
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
      break;
  }
}

//FOR ANIMATIONS
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
