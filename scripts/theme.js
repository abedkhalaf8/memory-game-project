let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const audio = new Audio('./assets/sounds/theme_change.mp3')
audio.volume = 1;
let video = document.querySelector("#background_video");
btn1.addEventListener('click', () =>{
   video.src = "./assets/videos/background.mp4";
   audio.play();
});
btn2.addEventListener('click', () =>{
   video.src = "./assets/videos/background2.mp4";
   audio.play();
});
btn3.addEventListener('click', () =>{
  video.src = "./assets/videos/background3.mp4";
  audio.play();
}); 
