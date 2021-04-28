
var noofdrum=document.querySelectorAll(".drum").length;
for(var i=0;i<noofdrum;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var butt=this.innerHTML;
    makesound(butt);
    buttonanime(butt);

  }
  );
}

document.addEventListener("keypress",function(event){

  makesound(event.key);
  buttonanime(event.key);
});


function makesound(key){
  switch (key) {
    case "w":
    var audio =new Audio('sounds/crash.mp3');
    audio.play();
      break;

      case "a":
      var a=new Audio('sounds/kick-bass.mp3');
      a.play();
      break;

      case "s":
      var s =new Audio('sounds/snare.mp3');
      s.play();
      break;

      case "d":
      var d = new Audio('sounds/tom-1.mp3');
      d.play();
      break;

      case "j" :
        var j = new Audio('sounds/tom-2.mp3');
        j.play();
        break;

        case "k":
         var d = new Audio('sounds/tom-3.mp3');
         d.play();
         break;

         case "l":
         var l1=  new Audio('sounds/tom-4.mp3');
         l1.play();
         break;

    default:console.log(key);

  }


}

function buttonanime(currentkey){
  var active=document.querySelector("."+currentkey);
  active.classList.add("pressed");

  setTimeout(function(){active.classList.remove("pressed");},100)

}
