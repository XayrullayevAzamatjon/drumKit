
for(let i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    
}
function handleClick(){
    var buttonInnerHTML=this.innerHTML;
    Sound(buttonInnerHTML);
    Animation(buttonInnerHTML);
  }    

document.addEventListener("keypress",function(event){Sound(event.key);Animation(event.key);})

// Making sound from keyboard
function Sound(key)
{
  switch (key) {
      case "w":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "a":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "s":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "d":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "j":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "k":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
        default:
            console.log(key);
  }      
}
function Animation(keyboard){
    var currentKey=document.querySelector("."+keyboard);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove("pressed");
    },100)
}