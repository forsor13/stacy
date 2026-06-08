document.addEventListener(
"DOMContentLoaded",
() => {

const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const giftBtn =
document.getElementById("giftBtn");

const giftBox =
document.getElementById("giftBox");

const music =
document.getElementById("bgMusic");

/* SCREEN */

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

giftBtn.addEventListener(
"click",
() => {

    playMusic();

    showScreen(screen2);

});

/* OPEN GIFT */

giftBox.addEventListener(
"click",
() => {

    giftBox.innerHTML = "🎉";

    createConfetti();

    setTimeout(() => {

        showScreen(screen3);

    },1200);

});

/* CONFETTI */

function createConfetti(){

    const emojis =
    ["🎉","✨","🎊","🎁"];

    for(let i=0;i<50;i++){

        const item =
        document.createElement("div");

        item.innerHTML =
        emojis[
        Math.floor(
        Math.random()*
        emojis.length
        )];

        item.style.position =
        "fixed";

        item.style.left =
        Math.random()*100
        + "vw";

        item.style.top =
        "-20px";

        item.style.fontSize =
        "22px";

        item.style.zIndex =
        "9999";

        item.style.pointerEvents =
        "none";

        document.body
        .appendChild(item);

        const duration =
        3000 +
        Math.random()*2000;

        item.animate(
        [
            {
                transform:
                "translateY(0)"
            },
            {
                transform:
                `translateY(120vh)
                translateX(${Math.random()*80-40}px)`
            }
        ],
        {
            duration,
            easing:"linear"
        });

        setTimeout(() => {

            item.remove();

        },duration);
    }
}

});