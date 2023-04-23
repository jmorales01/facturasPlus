

// ########### Movimiento de NAV ###########
window.addEventListener("scroll", function () {
    var navs = document.querySelector("nav");
    navs.classList.toggle("abajo", this.window.scrollY > 0);
})