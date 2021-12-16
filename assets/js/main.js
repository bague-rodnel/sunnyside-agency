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
