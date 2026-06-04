const screen1 =
document.getElementById("screen1");

const screen2 =
document.getElementById("screen2");

const screen3 =
document.getElementById("screen3");

const enterBtn =
document.getElementById("enterBtn");

const specialFlower =
document.getElementById("specialFlower");

const music =
document.getElementById("bgMusic");

function showScreen(screen){

    document
    .querySelectorAll(".screen")
    .forEach(s =>
        s.classList.remove("active")
    );

    screen.classList.add("active");
}

function fadeInMusic(){

    music.volume = 0;

    music.play().catch(()=>{});

    let volume = 0;

    const fade =
    setInterval(()=>{

        volume += 0.02;

        if(volume >= 0.35){

            volume = 0.35;

            clearInterval(fade);
        }

        music.volume = volume;

    },100);
}

enterBtn.addEventListener(
"click",
()=>{

    fadeInMusic();

    showScreen(screen2);

});

specialFlower.addEventListener(
"click",
()=>{

    createPetals();

    setTimeout(()=>{

        showScreen(screen3);

    },1000);

});

function createPetals(){

    for(let i=0;i<40;i++){

        const petal =
        document.createElement("div");

        petal.innerHTML = "🌸";

        petal.style.position="fixed";
        petal.style.left=Math.random()*100+"vw";
        petal.style.top="-20px";
        petal.style.fontSize="24px";
        petal.style.zIndex="9999";

        document.body.appendChild(petal);

        const duration =
        3000 + Math.random()*2000;

        petal.animate(
        [
            {
                transform:"translateY(0)"
            },
            {
                transform:
                `translateY(120vh)
                translateX(${Math.random()*100-50}px)`
            }
        ],
        {
            duration,
            easing:"linear"
        });

        setTimeout(()=>{
            petal.remove();
        },duration);
    }
}