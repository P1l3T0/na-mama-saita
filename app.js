hamburgerMenu();

function hamburgerMenu() {
    const sideMenu = document.getElementById("side-menu");

    document.getElementById("open-menu").addEventListener("click", function () {
        sideMenu.style.right = "0";
        sideMenu.style.transition = "500ms ease";
    });

    document.getElementById("close-menu").addEventListener("click", function () {
        sideMenu.style.right = "-210px";
        sideMenu.style.transition = "500ms ease";
    });
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});