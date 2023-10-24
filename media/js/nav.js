const navInteraction = document.getElementById("nav-interaction");
const navTarget = document.getElementById("nav-target");

let navShown = false;

navInteraction.onclick = (event) => {
  navShown = !navShown;

  if (navShown) navTarget.classList.add("show")
  else navTarget.classList.remove("show");
}
