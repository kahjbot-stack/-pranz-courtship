function showPage(pageId) {
// Hide every page
document.querySelectorAll(”.page”).forEach(page => {
page.classList.remove(“active”);
});

// Show selected page
const targetPage = document.getElementById(pageId);
if (targetPage) {
    targetPage.classList.add("active");
}
// Scroll back to top
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
    music.play().then(() => {
        musicPlaying = true;
        if (musicButton) {
            musicButton.innerHTML = "🔊";
        }
    }).catch(() => {
        console.log("Music could not start.");
    });
}

}
