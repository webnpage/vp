const popContainer = document.querySelector(".popContainer");
const btn = document.querySelector(".btn");
const close_icon = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  popContainer.classList.add("active");
  container.classList.add("active");
});

close_icon.addEventListener("click", () => {
  popContainer.classList.remove("active");
  container.classList.remove("active");
  videoEl.pause();
});
