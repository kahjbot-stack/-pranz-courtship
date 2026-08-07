function showPage(pageId) {
    var pages = document.getElementsByClassName("page");

    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }

    var target = document.getElementById(pageId);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo(0, 0);

    var music = document.getElementById("bgMusic");

    if (music) {
        music.play().catch(function(error) {
            console.log("Music could not play:", error);
        });
    }
}
