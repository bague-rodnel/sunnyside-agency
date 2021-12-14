const navbar = document.querySelector(".navbar");

window.onscroll = function() {
  if (this.scrollY >= navbar.clientHeight) {
    navbar.classList.add("opaque")
  } else {
    navbar.classList.remove("opaque")
  }
}