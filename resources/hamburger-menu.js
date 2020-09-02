function hamburgerMenu() {
    document.getElementById("hamburger").style.visibility = "visible";
    document.getElementById("mobile-nav").style.visibility = "hidden";
    document.getElementById("mobile-close").style.visibility = "visible";
}

function hamburgerClose() {
    document.getElementById("hamburger").style.visibility = "hidden";
    document.getElementById("mobile-nav").style.visibility = "visible";
    document.getElementById("mobile-close").style.visibility = "hidden";
}