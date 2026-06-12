document.addEventListener("DOMContentLoaded",()=>{

const screen1=document.getElementById("screen1");
const screen2=document.getElementById("screen2");
const screen3=document.getElementById("screen3");

const startBtn=document.getElementById("startBtn");
const bouquet=document.getElementById("bouquet");
const music=document.getElementById("bgMusic");

let unlocked=false;

/* SCREEN SWITCH */
function showScreen(s){
document.querySelectorAll(".screen").forEach(e=>e.classList.remove("active"));
s.classList.add("active");
}

/* MUSIC */
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

/* START */
startBtn.addEventListener("click",()=>{
playMusic();
showScreen(screen2);
});

/* BOUQUET CLICK */
bouquet.addEventListener("click",()=>{
bouquet.innerHTML="💖";
unlocked=true;

createHearts();

setTimeout(()=>{
showScreen(screen3);
},1200);
});

/* HEART EFFECT */
function createHearts(){
for(let i=0;i<60;i++){
const el=document.createElement("div");
el.innerHTML=["💐","💖","✨"][Math.floor(Math.random()*3)];

el.style.position="fixed";
el.style.left=Math.random()*100+"vw";
el.style.top="-20px";
el.style.fontSize="22px";
el.style.pointerEvents="none";
el.style.zIndex="9999";

document.body.appendChild(el);

el.animate([
{transform:"translateY(0)",opacity:1},
{transform:"translateY(120vh)",opacity:0}
],{duration:2500});

setTimeout(()=>el.remove(),2500);
}
}

});