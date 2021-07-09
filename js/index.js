let nav = document.getElementById('mobile-nav'),
     mainBurger = document.querySelector("#main-burger")

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

mainBurger.addEventListener("click", (e) => {
    nav.classList.toggle("is-open")
})