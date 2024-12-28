// Select the button element
const buttongithub = document.querySelector(".github");
const buttonfrontend = document.querySelector(".frontend");
const buttonlinkedin = document.querySelector(".linkedin");
const buttonx = document.querySelector(".x");
const buttoninsta = document.querySelector(".insta");

// Add a click event listener
buttongithub.addEventListener("click", function () {
    window.open("https:/www.github.com", "_blank");
});
buttonfrontend.addEventListener("click", function () {
    window.open("https://www.frontendmentor.io/", "_blank");
});
buttonlinkedin.addEventListener("click", function () {
    window.open("https:/www.linkedin.com", "_blank");
});
buttonx.addEventListener("click", function () {
    window.open("https:/www.x.com", "_blank");
});
buttoninsta.addEventListener("click", function () {
    window.open("https:/www.instagram.com", "_blank");
});