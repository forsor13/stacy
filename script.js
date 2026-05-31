const startBtn = document.getElementById("startBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const star = document.getElementById("star");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    screen1.classList.remove("active");
    screen2.classList.add("active");

    music.volume = 0.4;

    music.play().catch(() => {});
});

star.addEventListener("click", () => {

    screen2.classList.remove("active");
    screen3.classList.add("active");

    createConfetti();
});

function updateCountdown() {

    const birthday =
        new Date("June 13, 2026 00:00:00").getTime();

    const now = new Date().getTime();

    const distance = birthday - now;

    const days =
        Math.ceil(
            distance / (1000 * 60 * 60 * 24)
        );

    document.getElementById("countdown").innerHTML =
        days + " days remaining...";
}

updateCountdown();

function createConfetti(){

    for(let i=0;i<50;i++){

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.left =
            Math.random()*100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.width = "8px";
        confetti.style.height = "8px";

        confetti.style.background =
            `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.borderRadius = "50%";

        confetti.style.zIndex = "999";

        document.body.appendChild(confetti);

        const duration =
            2000 + Math.random()*2000;

        confetti.animate([
            {
                transform:"translateY(0)"
            },
            {
                transform:
                `translateY(110vh)
                 translateX(${Math.random()*200-100}px)`
            }
        ],{
            duration:duration,
            easing:"linear"
        });

        setTimeout(()=>{
            confetti.remove();
        },duration);
    }
}

