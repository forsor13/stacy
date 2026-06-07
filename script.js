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

const photoFrame =
document.getElementById("photoFrame");

const memoryPhoto =
document.getElementById("memoryPhoto");

const music =
document.getElementById("bgMusic");

/* SCREEN SWITCH */

function showScreen(screen){

    document
    .querySelectorAll(".screen")
    .forEach(s => {

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
    setInterval(() => {

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
() => {

    playMusic();

    showScreen(screen2);

});

/* PHOTO CLICK */

photoFrame.addEventListener(
"click",
() => {

    memoryPhoto.style.filter =
    "blur(0px)";

    createHearts();

    setTimeout(() => {

        showScreen(screen3);

    },1800);

});

/* HEARTS */

function createHearts(){

    for(let i=0;i<35;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
        "fixed";

        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.bottom =
        "-20px";

        heart.style.fontSize =
        "22px";

        heart.style.zIndex =
        "9999";

        heart.style.pointerEvents =
        "none";

        document.body.appendChild(heart);

        const duration =
        3000 + Math.random()*2000;

        heart.animate(
        [
            {
                transform:
                "translateY(0)"
            },
            {
                transform:
                `translateY(-120vh)
                translateX(${Math.random()*80-40}px)`
            }
        ],
        {
            duration,
            easing:"linear"
        });

        setTimeout(() => {

            heart.remove();

        },duration);
    }
}

});