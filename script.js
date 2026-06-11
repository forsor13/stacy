document.addEventListener(
"DOMContentLoaded",
() => {

const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const beginBtn =
document.getElementById("beginBtn");

const lantern =
document.getElementById("lantern");

const music =
document.getElementById("bgMusic");

/* SCREEN SWITCH */

function showScreen(screen){

document
.querySelectorAll(".screen")
.forEach(s=>{

s.classList.remove("active");

});

screen.classList.add("active");
}

/* MUSIC */

function playMusic(){

music.volume = 0;

const playPromise =
music.play();

if(playPromise){

playPromise.catch(()=>{});

}

let volume = 0;

const fade =
setInterval(()=>{

volume += 0.02;

if(volume >= 0.35){

volume = 0.35;

clearInterval(fade);
}

music.volume = volume;

},100);
}

/* START */

beginBtn.addEventListener(
"click",
()=>{

playMusic();

showScreen(screen2);

});

/* LIGHT LANTERN */

lantern.addEventListener(
"click",
()=>{

lantern.innerHTML = "🏮✨";

createLights();

setTimeout(()=>{

showScreen(screen3);

},1200);

});

/* LIGHT EFFECT */

function createLights(){

for(let i=0;i<40;i++){

const light =
document.createElement("div");

light.innerHTML = "✨";

light.style.position =
"fixed";

light.style.left =
Math.random()*100 + "vw";

light.style.top =
Math.random()*100 + "vh";

light.style.fontSize =
"22px";

light.style.zIndex =
"9999";

light.style.pointerEvents =
"none";

document.body.appendChild(light);

light.animate(
[
{opacity:1},
{opacity:0}
],
{
duration:1800
}
);

setTimeout(()=>{

light.remove();

},1800);

}

}

});