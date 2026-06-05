const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const unlockBtn =
document.getElementById("unlockBtn");

const heartLock =
document.getElementById("heartLock");

const heartKey =
document.getElementById("heartKey");

const music =
document.getElementById("bgMusic");

function showScreen(screen){

    document
    .querySelectorAll(".screen")
    .forEach(s => {

        s.classList.remove("active");

    });

    screen.classList.add("active");
}

function fadeInMusic(){

    music.volume = 0;

    music.play().catch(()=>{});

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

unlockBtn.addEventListener(
"click",
() => {

    fadeInMusic();

    showScreen(screen2);

    setTimeout(() => {

        heartKey.style.opacity = "1";

    },1200);

});

heartKey.addEventListener(
"click",
() => {

    heartLock.textContent = "💖";

    createHearts();

    setTimeout(() => {

        showScreen(screen3);

    },1000);

});

function createHearts(){

    for(let i=0;i<40;i++){

        const heart =
        document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left =
        Math.random()*100 + "vw";

        heart.style.bottom = "-20px";

        heart.style.fontSize = "24px";

        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const duration =
        3000 + Math.random()*2000;

        heart.animate(
        [
            {
                transform:"translateY(0)"
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

        }, duration);
    }
}