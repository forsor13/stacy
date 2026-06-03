const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const beginBtn =
document.getElementById("beginBtn");

const key =
document.getElementById("key");

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

function fadeInMusic(){

    if(!music) return;

    music.volume = 0;

    music.play()
    .catch(error => {

        console.log(error);

    });

    let volume = 0;

    const fade =
    setInterval(() => {

        volume += 0.02;

        if(volume >= 0.35){

            volume = 0.35;

            clearInterval(fade);
        }

        music.volume =
        volume;

    },100);
}

/* START */

beginBtn.addEventListener(
"click",
() => {

    fadeInMusic();

    showScreen(screen2);

});

/* KEY */

key.addEventListener(
"click",
() => {

    key.innerHTML = "✨";

    setTimeout(() => {

        showScreen(screen3);

        createSparkles();

    },700);

});

/* SPARKLES */

function createSparkles(){

    for(let i=0;i<50;i++){

        const sparkle =
        document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position =
        "fixed";

        sparkle.style.left =
        Math.random()*100
        + "vw";

        sparkle.style.top =
        Math.random()*100
        + "vh";

        sparkle.style.fontSize =
        "20px";

        sparkle.style.pointerEvents =
        "none";

        sparkle.style.zIndex =
        "9999";

        document.body
        .appendChild(
        sparkle
        );

        sparkle.animate(
        [
            {
                opacity:1
            },
            {
                opacity:0
            }
        ],
        {
            duration:
            1500,
            easing:
            "ease-out"
        });

        setTimeout(() => {

            sparkle.remove();

        },1500);
    }
}