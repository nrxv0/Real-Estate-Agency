const hambuger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hambuger) {
  hambuger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}