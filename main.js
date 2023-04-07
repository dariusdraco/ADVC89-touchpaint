canvas = document.getElementById("myCanvas");
radiusElement = document.getElementById("radius");
widthElement = document.getElementById("width");
ctx = canvas.getContext("2d");
touchEvent = "";
canvas.addEventListener("touchevent", touchclick);
radiusElement.addEventListener("change", radiusChange);
widthElement.addEventListener("change", radiusChange);
function radiusChange() {
  radius = parseInt(radiusElement.value);
  console.log(radius);
  localStorage.setItem("radius:", radius);
}
function widthChange() {
  width = parseFloat(widthElement.value);
  console.log(width);
  localStorage.setItem("width:", width);
}

function save() {
  color = document.getElementById("color").value;
  radius = parseInt(document.getElementById("radius").value);
  width = parseInt(document.getElementById("width").value);

  console.log("the color is " + color);
  console.log("the radius is " + radius);
  console.log("the width is " + width);

  localStorage.setItem("radius:", radius);
  localStorage.setItem("color:", color);
  localStorage.setItem("width:", width);
}

function touchclick() {
  if (touchEvent == "touchevent") {
    touchEvent = "";
    console.log(touchEvent);
  } else {
    touchEvent = "touchevent";
  }
}

canvas.addEventListener("touchlist", myTouchList);

function myTouchList(e) {
  c = localStorage.getItem("color:");
  r = parseInt(localStorage.getItem("radius:"));
  w = parseInt(localStorage.getItem("width:"));
  console.log("Color : " + c);
  console.log("width : " + w);
  console.log("radius : " + r);
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;

  if (touchEvent === "TouchEvent") {
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = w;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    var x = 0;
    var y = 0;
  }
}
function cleaer() {
  console.log("namaste");
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
