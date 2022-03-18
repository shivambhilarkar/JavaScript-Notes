//Events in JavaScript
// mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu
// touch events (TouchEvent): touchstart, touchmove, touchend, touchcancel
// keyboard events (KeyboardEvent): keydown, keypress, keyup
// form events: focus, blur, change, submit
// window events: scroll, resize, hashchange, load, unload

const btn = document.querySelector("#btn");
console.log(btn);

//onclick mouse Event;
btn.addEventListener("click", function () {
  console.log("Button is Clicked");
});

//onhover event
btn.addEventListener("mouseover", () => {
  console.log("Mouse hover.....");
});

// double click event
btn.addEventListener("dblclick", () => {
  console.log("double clicked..");
});

// keyboard events
document.addEventListener("keydown", function () {
  console.log("Key is pressed");
});

let txt = document.getElementById("text");
document.addEventListener("keypress", (event) => {
  console.log(event.keyCode);
  txt.textContent += event.key;
});

window.addEventListener("scroll", function () {
  console.log("web page is scrolling..");
});
window.addEventListener("load", () => {
  console.log("Web page is loaded");
});

// animation with css & cloning
var logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  logo.classList.toggle("animate");
});
