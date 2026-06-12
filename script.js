const intro = document.getElementById("intro");
const lock = document.getElementById("lock");
const stage = document.getElementById("stage");
const song = document.getElementById("song");
const song2 = document.getElementById("song2");

/* INTRO */
window.onload = () => {
  intro.classList.add("show");

  setTimeout(() => {
    intro.classList.remove("show");

    setTimeout(() => {
      intro.style.display = "none";
      lock.classList.remove("hidden");
      lock.classList.add("show");
    }, 1000);

  }, 2000);
};

/* UNLOCK */
function unlock() {
  if (document.getElementById("nameInput").value.toLowerCase() === "stacy") {

    lock.classList.remove("show");

    setTimeout(() => {
      lock.style.display = "none";
      stage.classList.remove("hidden");

      playMusic();
      titleThenSlideshow();

    }, 1000);
  }
}

/* MUSIC */
function playMusic() {
  song.volume = 0;

  song.play().catch(() => {
    document.body.addEventListener("click", () => {
      song.play();
    }, { once: true });
  });

  let v = 0;
  let fade = setInterval(() => {
    if (v < 1) {
      v += 0.05;
      song.volume = v;
    } else clearInterval(fade);
  }, 100);
}

/* TITLE */
function titleThenSlideshow() {
  stage.innerHTML = "<h1>TO MY BESTIE ❤️</h1>";
  setTimeout(slideshow1, 1000);
}

/* SLIDESHOW 1 */
let photos = [];
for (let i = 1; i <= 24; i++) {
  photos.push(`images/photo${i}.jpg.jpg`);
}

function titleThenSlideshow() {
  stage.innerHTML = "";

  // 👉 CREATE TITLE (STAYS ON SCREEN)
  let title = document.createElement("h1");
  title.innerText = "TO MY BESTIE ❤️";
  title.style.marginBottom = "20px";

  stage.appendChild(title);

  // 👉 CREATE IMAGE BELOW TITLE
  let img = document.createElement("img");
  stage.appendChild(img);

  startSlideshow1(img);
}

/* SLIDESHOW 1 */
function startSlideshow1(img) {

  let i = 0;
  img.src = photos[0];

  let interval = setInterval(() => {
    img.style.opacity = 0;

    setTimeout(() => {
      i++;

      if (i >= photos.length - 1) {
        clearInterval(interval);
        img.src = photos[photos.length - 1];

        showButton("VIEW OUR MEMORIES ❤️", slideshow2);
        return;
      }

      img.src = photos[i];
      img.style.opacity = 1;

    }, 800);

  }, 2500);
}

/* SLIDESHOW 2 */
let mem = ["memories/mem1.jpg","memories/mem2(2).jpeg","memories/mem2.jpg","memories/mem3.jpg","memories/mem4.jpg",
  "memories/mem5(5).JPG","memories/mem5.jpg","memories/mem6.jpg","memories/mem7(7).jpg","memories/mem7.jpg","memories/mem8(8).jpg",
  "memories/mem8.jpg","memories/mem9.jpg", "memories/mem10.jpg", "memories/mem11.jpg", "memories/mem12.jpg", 
  "memories/mem13.jpg"];

function slideshow2() {
  stage.innerHTML = "";

  let img = document.createElement("img");
  stage.appendChild(img);

  let i = 0;
  img.src = mem[0];

  let interval = setInterval(() => {
    img.style.opacity = 0;

    setTimeout(() => {
      i++;

      if (i >= mem.length - 1) {
        clearInterval(interval);
        img.src = mem[mem.length - 1];

        showButton("MORE MEMORIES ❤️", startVideos);
        return;
      }

      img.src = mem[i];
      img.style.opacity = 1;

    }, 800);

  }, 2500);
}

/* VIDEOS */
let videos = ["videos/video1.mp4","videos/video2.mp4","videos/video3.mp4"];
let vIndex = 0;

function startVideos() {
  stage.innerHTML = "";

  let video = document.createElement("video");
  video.autoplay = true;
  video.controls = true;
  stage.appendChild(video);

  playVideo(video);

  video.onended = () => {
    vIndex++;

    if (vIndex < videos.length) {
      fade(video, () => playVideo(video));
    } else {

  // 🎵 bring song2 to normal volume
  let normalVol = setInterval(() => {
    if (song2.volume < 1) {
      song2.volume += 0.05;
    } else {
      clearInterval(normalVol);
    }
  }, 150);

  fade(video, finalScene);
}
    }
  };

function playVideo(video) {

  video.src = videos[vIndex];
  video.load();

  video.playsInline = true;
  video.setAttribute("webkit-playsinline", "true");

  video.play().catch(() => {
    document.body.addEventListener("click", () => {
      video.play();
    }, { once: true });
  });

  // 🎬 NORMAL VIDEOS
  if (vIndex !== 2) {
    song.volume = 1;
  }

  // 🎬 VIDEO 3 SPECIAL CINEMATIC AUDIO
  if (vIndex === 2) {

    // fade OUT first song
    let fadeOut = setInterval(() => {
      if (song.volume > 0.05) {
        song.volume -= 0.05;
      } else {
        clearInterval(fadeOut);
        song.pause();
      }
    }, 150);

    // start second song softly
    song2.volume = 0;
    song2.play();

    let fadeIn = setInterval(() => {
      if (song2.volume < 0.2) {
        song2.volume += 0.02;
      } else {
        clearInterval(fadeIn);
      }
    }, 150);
  }
}

function fade(el, callback) {
  el.style.opacity = 0;
  setTimeout(() => {
    callback();
    el.style.opacity = 1;
  }, 1000);
}

/* FINAL IMAGE */
function finalScene() {
  stage.innerHTML = "";

  let img = document.createElement("img");
  img.src = "memories/mem5.jpg";
  stage.appendChild(img);

  showButton("ENTER MY MESSAGE ❤️", showMessage);
}

/* BUTTON */
function showButton(text, action) {
  let btn = document.createElement("button");
  btn.innerText = text;

  btn.onclick = () => {
    btn.remove();
    action();
  };

  stage.appendChild(btn);
}

/* MESSAGE */
function showMessage() {
  stage.innerHTML = "";

  // 👉 KEEP IMAGE
  let img = document.createElement("img");
  img.src = "memories/mem5.jpg";
  stage.appendChild(img);

  let p = document.createElement("p");
  stage.appendChild(p);

  let text = `Happy Birthday Sor 🎂

You are one of the most special person in my life.
This little surprise is just my way of showing how much you mean to me.

No matter what happens, you will always have a place in my heart ❤️

I hope this day is as wonderful as you are, filled with love, laughter, and unforgettable moments.

Happy Birthday again, Sor! May this year bring you all the happiness and success you deserve. 🎉

Please give me one more chance to make you happy again, I promise I will do my best to be the best for you.
I still care about you, and I’ve changed. I’ve learned from my mistakes and grown a lot since then. ❤️

I love you so much ❤️
Just be my girlfriend and my everything for the rest of our lives!`;

  let i = 0;

  function type() {
    if (i < text.length) {
      p.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(type, 200);
    } else {
      setTimeout(showLovePage, 60000);
    }
  }

  type();
}

/* END */
function showLovePage() {
  stage.innerHTML = "";

  let love = document.createElement("h1");
  love.style.fontSize = "3rem";
  love.innerText = "I LOVE YOU ❤️";

  stage.appendChild(love);

  setTimeout(showEnd, 2500);
}

function showEnd() {
  stage.innerHTML = "";

  let end = document.createElement("h1");
  end.className = "big-end";
  end.innerText = "THE END";

  stage.appendChild(end);

  // ⏹ STOP MUSIC AFTER FADE
  setTimeout(() => {
    song.pause();
song.currentTime = 0;

song2.pause();
song2.currentTime = 0;
  }, 3000);
}







