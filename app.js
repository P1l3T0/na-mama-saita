hamburgerMenu();

function hamburgerMenu() {
    var sideMenu = document.getElementById("side-menu");
    var blurEffect = document.querySelector("#blur");

    document.getElementById("open-menu").addEventListener("click", function () {
        sideMenu.style.right = "0";
        sideMenu.style.transition = "500ms ease";

        blurEffect.style.pointerEvents = 'auto';
        setTimeout(() => {
            blurEffect.classList.add("blur-overlay");
        }, 5);
    });

    document.getElementById("close-menu").addEventListener("click", function () {
        sideMenu.style.right = "-210px";
        sideMenu.style.transition = "500ms ease";

        blurEffect.style.pointerEvents = 'none';
        setTimeout(() => {
            blurEffect.classList.remove("blur-overlay");
        }, 5);
    });
}


window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

