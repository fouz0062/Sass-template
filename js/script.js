var icons = document.querySelector(".burger-icon");

icons.addEventListener("click", () => {
    var menu = document.querySelector(".header--menu");
    var navicon = document.querySelectorAll(".navicon");

    menu.classList.toggle("show");
    navicon.forEach(icon => {
        icon.classList.toggle("hidden");
    })
})