const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const startBtn = document.getElementById("startBtn");
const star = document.getElementById("star");

const music = document.getElementById("bgMusic");

function showScreen(screen){

    document
        .querySelectorAll(".screen")
        .forEach(s => s.classList.remove("active"));

    screen.classList.add("active");
}

function fadeInMusic(){

    if(!music) return;

    music.volume = 0;

    const playPromise = music.play();

    if(playPromise !== undefined){

        playPromise.catch(error => {
            console.log("Music blocked:", error);
        });
    }

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if(volume >= 0.35){

            volume = 0.35;
            clearInterval(fade);
        }

        music.volume = volume;

    },100);
}

startBtn.addEventListener("click", () => {

    fadeInMusic();

    showScreen(screen2);

});

star.addEventListener("click", () => {

    showScreen(screen3);

    createConfetti();

});

function updateCountdown(){

    const birthday =
        new Date("June 13, 2026 00:00:00");

    const now =
        new Date();

    const difference =
        birthday - now;

    const days =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const countdown =
        document.getElementById("countdown");

    if(days > 0){

        countdown.textContent =
            days + " days remaining...";

    }else{

        countdown.textContent =
            "Today is the special day ❤️";
    }
}

updateCountdown();

function createConfetti(){

    for(let i=0;i<60;i++){

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random()*100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.width = "8px";
        confetti.style.height = "8px";

        confetti.style.borderRadius = "50%";

        confetti.style.background =
            `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            2000 + Math.random()*2000;

        const drift =
            Math.random()*200 - 100;

        confetti.animate(
            [
                {
                    transform:
                    "translateY(0px) translateX(0px) rotate(0deg)"
                },
                {
                    transform:
                    `translateY(120vh) translateX(${drift}px) rotate(720deg)`
                }
            ],
            {
                duration:duration,
                easing:"linear"
            }
        );

        setTimeout(() => {

            confetti.remove();

        }, duration);
    }
}