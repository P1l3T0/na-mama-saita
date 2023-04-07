hamburgerMenu();

function hamburgerMenu() {
    const sideMenu = document.getElementById("side-menu");
    const openMenu = document.getElementById("open-menu");
    const closeMenu = document.getElementById("close-menu");

    openMenu.addEventListener("click", function () {
        sideMenu.style.top = "0";
        sideMenu.style.transition = "1.5s ease";
    });

    closeMenu.addEventListener("click", function () {
        sideMenu.style.top = "-80rem";
        sideMenu.style.transition = "1.5s ease";
    });
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});