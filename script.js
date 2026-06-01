const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const startBtn = document.getElementById("startBtn");
const star = document.getElementById("star");

function showScreen(screen){

    document
        .querySelectorAll(".screen")
        .forEach(s => s.classList.remove("active"));

    screen.classList.add("active");
}

startBtn.addEventListener("click", () => {

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

    document.getElementById(
        "countdown"
    ).textContent =
        days + " days remaining...";
}

updateCountdown();

function createConfetti(){

    for(let i = 0; i < 50; i++){

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random()*100 + "vw";

        confetti.style.top = "-10px";

        confetti.style.width = "8px";
        confetti.style.height = "8px";

        confetti.style.borderRadius = "50%";

        confetti.style.background =
            `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration =
            2000 + Math.random()*2000;

        confetti.animate(
            [
                {
                    transform:
                    "translateY(0)"
                },
                {
                    transform:
                    `translateY(120vh)
                    translateX(${Math.random()*200-100}px)`
                }
            ],
            {
                duration,
                easing:"linear"
            }
        );

        setTimeout(() => {

            confetti.remove();

        }, duration);
    }
}