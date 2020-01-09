console.log("hello!");

 var sound = new Audio('assets/cute_happy_birthday.mp3');
 var btn = document.getElementById('tune');
 btn.addEventListener("click",function(){
   sound.play();
 })
