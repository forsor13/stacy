document.addEventListener(
"DOMContentLoaded",
() => {

const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const startBtn =
document.getElementById("startBtn");

const balloon =
document.getElementById("balloon");

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

startBtn.addEventListener(
"click",
() => {

    playMusic();

    showScreen(screen2);

});

balloon.addEventListener(
"click",
() => {

    balloon.innerHTML = "💥";

    createBurst();

    setTimeout(() => {

        showScreen(screen3);

    },1000);

});

function createBurst(){

    for(let i=0;i<40;i++){

        const item =
        document.createElement("div");

        item.innerHTML =
        ["🎉","✨","🎊"][Math.floor(Math.random()*3)];

        item.style.position =
        "fixed";

        item.style.left =
        Math.random()*100 + "vw";

        item.style.top =
        Math.random()*100 + "vh";

        item.style.fontSize =
        "22px";

        item.style.pointerEvents =
        "none";

        item.style.zIndex =
        "9999";

        document.body.appendChild(item);

        item.animate(
        [
            {opacity:1},
            {opacity:0}
        ],
        {
            duration:1500
        });

        setTimeout(() => {

            item.remove();

        },1500);
    }
}

});