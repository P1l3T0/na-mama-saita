hamburgerMenu();

function hamburgerMenu() {
    var sideMenu = document.getElementById("side-menu");
    var blurEffect = document.getElementById("blur-overlay");

    document.getElementById("open-menu").addEventListener("click", function () {
        sideMenu.style.right = "0";
        sideMenu.style.transition = "500ms ease";

        blurEffect.style.pointerEvents = 'auto';
        setTimeout(() => {
            blurEffect.style.display = 'block';
        }, 1);
    });

    document.getElementById("close-menu").addEventListener("click", function () {
        sideMenu.style.right = "-210px";
        sideMenu.style.transition = "500ms ease";

        blurEffect.style.pointerEvents = 'none';
        setTimeout(() => {
            blurEffect.style.display = 'none';
        }, 1);
    });
}
