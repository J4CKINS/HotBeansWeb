var nav = document.querySelector(".mobile-nav");
var navdisplay = false;

function navClicked() {
    if (!navdisplay) {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    nav.style.display = "inline";
    navdisplay = true;
}

function closeNav() {
    nav.style.display = "none";
    navdisplay = false;
}