document.addEventListener("DOMContentLoaded",()=>{

const screen1=document.getElementById("screen1");
const screen2=document.getElementById("screen2");
const screen3=document.getElementById("screen3");

const startBtn=document.getElementById("startBtn");
const bottle=document.getElementById("bottle");
const music=document.getElementById("bgMusic");

let anim;

function showScreen(s){
document.querySelectorAll(".screen").forEach(e=>e.classList.remove("active"));
s.classList.add("active");
}

function playMusic(){
music.volume=0;
const p=music.play();
if(p)p.catch(()=>{});

let v=0;
const fade=setInterval(()=>{
v+=0.02;
if(v>=0.35){v=0.35;clearInterval(fade);}
music.volume=v;
},100);
}

startBtn.addEventListener("click",()=>{
playMusic();
showScreen(screen2);
});

bottle.addEventListener("click",()=>{

bottle.innerHTML="💌";

createWaves();

setTimeout(()=>{
showScreen(screen3);
},1200);

});

function createWaves(){

for(let i=0;i<40;i++){

const d=document.createElement("div");
d.innerHTML="🌊";

d.style.position="fixed";
d.style.left=Math.random()*100+"vw";
d.style.top=Math.random()*100+"vh";
d.style.fontSize="20px";
d.style.pointerEvents="none";
d.style.zIndex="9999";

document.body.appendChild(d);

d.animate([
{opacity:1,transform:"translateY(0)"},
{opacity:0,transform:"translateY(100px)"}
],{duration:1500});

setTimeout(()=>d.remove(),1500);
}

}

});