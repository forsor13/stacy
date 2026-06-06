document.addEventListener("DOMContentLoaded", () => {

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const startBtn = document.getElementById("startBtn");
const shootingStar = document.getElementById("shootingStar");
const music = document.getElementById("bgMusic");

let moveInterval = null;

/* SCREEN SWITCH */
function showScreen(screen){
    document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));

    screen.classList.add("active");
}

/* MUSIC (MOBILE SAFE) */
function playMusic(){

    if(!music) return;

    music.volume = 0;

    const playPromise = music.play();

    if(playPromise){
        playPromise.catch(()=>{});
    }

    let v = 0;

    const fade = setInterval(()=>{

        v += 0.02;

        if(v >= 0.35){
            v = 0.35;
            clearInterval(fade);
        }

        music.volume = v;

    },100);
}

/* START */
startBtn.addEventListener("click", () => {

    playMusic();

    showScreen(screen2);

    startStar();

});

/* STAR MOVEMENT */
function startStar(){

    let pos = -80;

    moveInterval = setInterval(()=>{

        pos += 5;

        shootingStar.style.left = pos + "px";

        if(pos > window.innerWidth + 100){
            pos = -80;
        }

    },16);
}

/* CLICK STAR */
shootingStar.addEventListener("click", () => {

    clearInterval(moveInterval);

    shootingStar.innerHTML = "✨";

    createStars();

    setTimeout(()=>{

        showScreen(screen3);

    },1000);

});

/* EFFECT */
function createStars(){

    for(let i=0;i<50;i++){

        const star = document.createElement("div");
        star.innerHTML = "⭐";

        star.style.position = "fixed";
        star.style.left = Math.random()*100 + "vw";
        star.style.top = Math.random()*100 + "vh";
        star.style.fontSize = "20px";
        star.style.zIndex = "9999";
        star.style.pointerEvents = "none";

        document.body.appendChild(star);

        star.animate(
            [{opacity:1},{opacity:0}],
            {duration:1500}
        );

        setTimeout(()=>star.remove(),1500);
    }
}

});