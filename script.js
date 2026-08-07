function showPage(pageId) {
    var pages = document.querySelectorAll('.page');

    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    var target = document.getElementById(pageId);

    if (target) {
        target.classList.add('active');
    }

    window.scrollTo(0, 0);

    var music = document.getElementById('bgMusic');

    if (music) {
        music.play().catch(function() {});
    }
}
