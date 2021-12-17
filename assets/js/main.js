// force refresh from top
window.onbeforeunload = function () {
  if(window.scrollTo) window.scrollTo(0,0);
  if(history && history.scrollRestoration) history.scrollRestoration = "manual";
}; 

// ============== INJECT Y SCROLLBAR WIDTH TO CSS VAR FOR LATER ==============
let scrollbarWidth = (window.innerWidth - document.body.clientWidth) + 'px';
console.log(scrollbarWidth)
document.documentElement.style.setProperty("--y-scrollbar-width", scrollbarWidth);

// ============ NAVBAR POP ON SCROLL =============
const navbar = document.querySelector(".navbar");

window.onscroll = function() {
  if (this.scrollY >= navbar.clientHeight) {
    navbar.classList.add("opaque")
  } else {
    navbar.classList.remove("opaque")
  }
}

// ================= TOGGLE DROPDOWN ================
const navbarToggler = document.querySelector(".navbar-toggler");
const dropdownMenu = document.querySelector(".dropdownMenu");
dropdownMenu.style.setProperty("--content-height", dropdownMenu.scrollHeight + "px")

navbarToggler.onclick = function(e) {
const showNow = dropdownMenu.dataset.show;

  if (showNow === "false") {
    dropdownMenu.dataset.show = "true";
  } else {
    dropdownMenu.dataset.show = "false";
  }
}

// ==================== CLOSE MENU AT ANCHOR CLICK ===========
const navbarLinks = document.querySelectorAll(".navbar-menu a");
navbarLinks.forEach(link => {
  link.onclick = function(e){ 
    dropdownMenu.dataset.show = "false";
  }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  mobile: false
})

sr.reveal(`.home .img-box`, {origin: 'bottom', distance: '50%', delay: 200})
sr.reveal(`.transform .content-box`, {origin: 'left', delay: 500})
sr.reveal(`.transform .img-box`,{origin: 'right', viewOffset: {bottom: 120}})
sr.reveal(`.stand-out .img-box`,{origin: 'left', delay: 200})
sr.reveal(`.stand-out .content-box`,{origin: 'right'})
sr.reveal(`.services__graphic-design .img-box, .services__photography .img-box`, {interval: 240, duration: 1000})
sr.reveal(`.services__photography .content-box, .services__graphic-design .content-box`,{origin: 'bottom', interval: 180})
sr.reveal(`.testimonial img`,{distance: '0', interval: 150, scale: 0, duration: 800})
sr.reveal(`.project`, {scale: 1, distance: '0', rotate: {y: 90}, interval: 200})