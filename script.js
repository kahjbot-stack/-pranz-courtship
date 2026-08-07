function showPage(pageId) {
document.querySelectorAll(”.page”).forEach(page => {
page.classList.remove(“active”);
});

const targetPage = document.getElementById(pageId);
if (targetPage) {
    targetPage.classList.add("active");
}
window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

// =========================
// MUSIC
// =========================

const music = document.getElementById(“bgMusic”);
const musicButton = document.getElementById(“musicButton”);

let musicPlaying = false;

function toggleMusic() {
if (!music) {
return;
}

if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    if (musicButton) {
        musicButton.innerHTML = "🎵";
    }
} else {
    music.play()
        .then(() => {
            musicPlaying = true;
            if (musicButton) {
                musicButton.innerHTML = "🔊";
            }
        })
        .catch(() => {
            console.log("Music could not start.");
        });
}

}
