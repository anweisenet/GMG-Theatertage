const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navTarget = document.getElementById("nav-target");

let navShown = false;

const handler = (event) => {
  navShown = !navShown;

  if (navShown) navTarget.classList.add("show")
  else navTarget.classList.remove("show");
};
navOpen.onclick = handler;
navClose.onclick = handler;
