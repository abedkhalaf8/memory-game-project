let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let video = document.querySelector("#background_video");
btn1.addEventListener('click', () =>{
    console.log(video);
   video.src = "../videos/background.mp4";
});
btn2.addEventListener('click', () =>{
   video.src = "../videos/background2.mp4";
});
btn3.addEventListener('click', () =>{
  video.src = "../videos/background3.mp4";
});
