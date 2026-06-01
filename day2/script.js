const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const openBtn =
document.getElementById("openBtn");

const envelope =
document.getElementById("envelope");

const music =
document.getElementById("bgMusic");

/* ---------- SCREEN SWITCHING ---------- */

function showScreen(screen){

    document
    .querySelectorAll(".screen")
    .forEach(s => {

        s.classList.remove("active");

    });

    screen.classList.add("active");
}

/* ---------- MUSIC ---------- */

function fadeInMusic(){

    if(!music) return;

    music.volume = 0;

    music.play()
    .catch(error => {

        console.log(
            "Music blocked:",
            error
        );

    });

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

/* ---------- BUTTON ---------- */

openBtn.addEventListener(
"click",
() => {

    fadeInMusic();

    showScreen(screen2);

});

/* ---------- ENVELOPE ---------- */

envelope.addEventListener(
"click",
() => {

    envelope.textContent = "💌";

    envelope.style.transform =
    "scale(1.2)";

    setTimeout(() => {

        showScreen(screen3);

        createHearts();

    },800);

});

/* ---------- COUNTDOWN ---------- */

function updateCountdown(){

    document
    .getElementById("countdown")
    .textContent =
    "11 days remaining...";
}

updateCountdown();

/* ---------- HEARTS ---------- */

function createHearts(){

    for(let i = 0; i < 40; i++){

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
        (18 + Math.random()*12) + "px";

        heart.style.zIndex =
        "9999";

        heart.style.pointerEvents =
        "none";

        document.body.appendChild(heart);

        const duration =
        3000 + Math.random()*2500;

        const drift =
        Math.random()*120 - 60;

        heart.animate(
        [
            {
                transform:
                "translateY(0) translateX(0)",
                opacity:1
            },
            {
                transform:
                `translateY(-120vh) translateX(${drift}px)`,
                opacity:0
            }
        ],
        {
            duration:duration,
            easing:"linear"
        });

        setTimeout(() => {

            heart.remove();

        }, duration);
    }
}